<template>
  <section class="px-4 md:px-20 py-10" id="upload">
    <div class="flex flex-col items-start gap-4 w-full max-w-lg mx-auto space-y-5">
      <h1 class="text-3xl font-bold text-gray-900">Let's start!</h1>
      <p class="text-gray-700">Add photo to make scan. You can upload photo from the device or take a photo with camera (available for mobiles)</p>

      <!-- Drag & Drop Area -->
      <div
        class="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-blue-900 transition-colors"
        @drop.prevent="onDrop"
        @dragover.prevent
        @click="fileInput.click()"
      >
        <p v-if="!store.image">Drag & Drop your skin image here or click to select</p>
        <p v-else class="font-semibold text-gray-900">{{ store.image.name }}</p>
        <input type="file" accept="image/*" @change="onFileChange" class="hidden" ref="fileInput" />
      </div>

      <!-- Predict Button -->
      <button 
        @click="predict" 
        :disabled="!store.image || store.loading"
        class="bg-blue-900 ml-5 text-white px-10 py-2 rounded-3xl disabled:opacity-50 flex items-center justify-center gap-2"
      >
        <span v-if="store.loading" class="loader-border animate-spin w-5 h-5 border-2 border-white rounded-full border-t-transparent"></span>
        {{ store.loading ? 'Predicting...' : 'Predict' }}
      </button>

      <!-- Prediction Result -->
      <div v-if="store.prediction" class="mt-4 p-4 border rounded bg-white w-full">
        <h3 class="font-bold text-lg text-gray-900 mb-2">Prediction Result:</h3>
        <p><strong>Label:</strong> {{ store.prediction.label }}</p>
        <p><strong>Confidence:</strong> {{ store.prediction.confidence }}</p>

        <!-- Probability Chart -->
        <div class="mt-4">
          <BarChart :chart-data="chartData" :chart-options="chartOptions" />
        </div>

        <!-- Grad-CAM Heatmap -->
        <div v-if="store.heatmap" class="mt-4">
          <h4 class="font-semibold mb-2">Grad-CAM Heatmap:</h4>
          <canvas ref="heatmapCanvas" class="border rounded w-full"></canvas>
        </div>
      </div>

      <!-- Error -->
      <p v-if="store.error" class="text-red-500 mt-2">{{ store.error }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useSkinStore } from '@/stores/skinStore'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Chart Component
const BarChart = {
  extends: Bar,
  props: ['chartData', 'chartOptions'],
  mounted() {
    this.renderChart(this.chartData, this.chartOptions)
  },
}

const store = useSkinStore()
const heatmapCanvas = ref(null)
const fileInput = ref(null)

// Drag & Drop
const onDrop = (event) => {
  const file = event.dataTransfer.files[0]
  if (file) store.setImage(file)
}

// File Change
const onFileChange = (event) => {
  const file = event.target.files[0]
  if (file) store.setImage(file)
}

// Predict
const predict = () => store.predict()

// Heatmap Watch
watch(() => store.heatmap, (newHeatmap) => {
  if (!newHeatmap || !heatmapCanvas.value) return
  const canvas = heatmapCanvas.value
  const ctx = canvas.getContext('2d')
  const width = Math.sqrt(newHeatmap.length)
  const height = width
  canvas.width = width
  canvas.height = height

  const imgData = ctx.createImageData(width, height)
  for (let i = 0; i < newHeatmap.length; i++) {
    imgData.data[i * 4] = newHeatmap[i]       // R
    imgData.data[i * 4 + 1] = 0               // G
    imgData.data[i * 4 + 2] = 0               // B
    imgData.data[i * 4 + 3] = 255             // A
  }
  ctx.putImageData(imgData, 0, 0)
})

// Chart Data & Options
const chartData = ref({
  labels: ['MEL', 'NV', 'BCC', 'AKIEC', 'BKL', 'DF', 'VASC'],
  datasets: [{
    label: 'Probability',
    backgroundColor: '#1E40AF',
    data: []
  }]
})

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: true, text: 'Prediction Probabilities' }
  },
  scales: {
    y: { beginAtZero: true, max: 100 }
  }
}

// Update Chart when prediction changes
watch(() => store.prediction, (pred) => {
  if (!pred) return
  chartData.value.datasets[0].data = pred.probabilities.map(p => (p * 100).toFixed(2))
})
</script>

<style scoped>
.loader-border {
  border-top-color: transparent;
  border-right-color: white;
  border-bottom-color: white;
  border-left-color: white;
}
</style>
