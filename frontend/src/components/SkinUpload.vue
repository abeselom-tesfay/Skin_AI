<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">🧬 Skin AI Analyzer</h1>
        <p class="text-lg text-gray-600">Upload a human skin lesion image for AI-powered analysis</p>
      </div>

      <!-- Upload Card -->
      <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <!-- File Upload -->
        <div 
          @drop="handleDrop"
          @dragover="handleDragOver"
          @click="$refs.fileInput.click()"
          class="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer transition-all hover:border-blue-400 hover:bg-blue-50"
          :class="{ 'border-blue-500 bg-blue-50': isDragging }"
        >
          <input 
            type="file" 
            ref="fileInput"
            @change="handleFileSelect"
            accept="image/*" 
            class="hidden"
          />
          
          <div class="text-6xl mb-4">📸</div>
          <h3 class="text-xl font-semibold text-gray-700 mb-2">
            {{ selectedFile ? 'Image Selected ✓' : 'Upload Human Skin Image' }}
          </h3>
          <p class="text-gray-500 mb-4">
            {{ selectedFile ? selectedFile.name : 'Click or drag & drop your image here' }}
          </p>
          <button class="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            {{ selectedFile ? 'Change Image' : 'Choose File' }}
          </button>
        </div>

        <!-- Analyze Button -->
        <button 
          @click="analyzeImage"
          :disabled="!selectedFile || loading"
          class="w-full mt-6 bg-green-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
        >
          {{ loading ? '🔬 Analyzing...' : '🧪 Analyze Skin Lesion' }}
        </button>
      </div>

      <!-- Results -->
      <div v-if="result" class="bg-white rounded-2xl shadow-xl p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Analysis Results</h2>
        
        <!-- Prediction Card -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Image Preview -->
          <div>
            <h3 class="font-semibold text-gray-700 mb-4">Uploaded Image</h3>
            <img :src="imagePreview" class="w-full rounded-lg shadow-md" />
          </div>

          <!-- Results -->
          <div>
            <h3 class="font-semibold text-gray-700 mb-4">AI Analysis</h3>
            <div class="space-y-4">
              <div class="p-4 bg-blue-50 rounded-lg">
                <p class="text-sm text-gray-600">Prediction</p>
                <p class="text-xl font-bold text-blue-700 capitalize">{{ result.prediction }}</p>
              </div>
              
              <div class="p-4 bg-green-50 rounded-lg">
                <p class="text-sm text-gray-600">Confidence</p>
                <p class="text-xl font-bold text-green-700">{{ (result.confidence * 100).toFixed(2) }}%</p>
              </div>

              <!-- All Predictions -->
              <div class="p-4 bg-gray-50 rounded-lg">
                <p class="text-sm text-gray-600 mb-2">All Possibilities</p>
                <div class="space-y-2">
                  <div 
                    v-for="(prob, index) in result.all_predictions" 
                    :key="index"
                    class="flex justify-between items-center"
                  >
                    <span class="capitalize text-sm">{{ classNames[index] }}</span>
                    <span class="font-semibold">{{ (prob * 100).toFixed(1) }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Error Message -->
      <div v-if="error" class="bg-red-50 border border-red-200 rounded-xl p-6 mt-6">
        <div class="flex items-start">
          <div class="text-2xl mr-3">🚫</div>
          <div>
            <p class="text-red-800 font-bold text-lg mb-2">{{ error }}</p>
            <p v-if="errorDetails" class="text-red-700 mb-2">
              <span class="font-semibold">Detected:</span> {{ errorDetails }}
            </p>
            <p v-if="errorConfidence" class="text-red-600 text-sm mb-2">
              <span class="font-semibold">Confidence:</span> {{ errorConfidence }}
            </p>
            <p v-if="errorSuggestion" class="text-blue-700 font-medium">
              💡 {{ errorSuggestion }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkinUpload',
  data() {
    return {
      selectedFile: null,
      imagePreview: null,
      result: null,
      loading: false,
      error: null,
      errorDetails: null,
      errorSuggestion: null,
      errorConfidence: null,
      isDragging: false,
      classNames: ['akiec', 'bcc', 'bkl', 'df', 'mel', 'nv', 'vasc']
    }
  },
  methods: {
    handleFileSelect(event) {
      this.selectedFile = event.target.files[0];
      this.previewImage();
      this.clearErrors();
      this.result = null;
    },
    
    handleDrop(event) {
      event.preventDefault();
      this.isDragging = false;
      this.selectedFile = event.dataTransfer.files[0];
      this.previewImage();
      this.clearErrors();
      this.result = null;
    },
    
    handleDragOver(event) {
      event.preventDefault();
      this.isDragging = true;
    },
    
    previewImage() {
      if (this.selectedFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
      }
    },
    
    clearErrors() {
      this.error = null;
      this.errorDetails = null;
      this.errorSuggestion = null;
      this.errorConfidence = null;
    },
    
    async analyzeImage() {
      if (!this.selectedFile) return;
      
      this.loading = true;
      this.clearErrors();
      this.result = null;
      
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      
      try {
        const response = await fetch('http://localhost:5000/predict', {
          method: 'POST',
          body: formData,
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          // Handle validation errors from backend
          this.error = data.error || 'Invalid image content';
          this.errorDetails = data.detected_content;
          this.errorSuggestion = data.suggestion;
          this.errorConfidence = data.confidence ? `Skin confidence: ${data.confidence}` : null;
          return;
        }
        
        this.result = data;
        
      } catch (error) {
        console.error('Error:', error);
        this.error = 'Failed to analyze image. Please try again.';
        this.errorSuggestion = 'Check your connection and try again';
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>