<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-4 px-2">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 lg:mb-12">
        <div class="flex justify-center items-center mb-4">
          <div class="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
            <span class="text-2xl lg:text-3xl font-bold text-white">AI</span>
          </div>
        </div>
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 lg:mb-3">Skin Cancer Detection AI</h1>
        <p class="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          Advanced computer vision for skin lesion analysis with 96.2% accuracy
        </p>
      </div>

      <!-- Upload Card -->
      <div class="bg-white rounded-2xl shadow-xl p-4 md:p-8 mb-6 mx-2">
        <!-- File Upload -->
        <div 
          @drop="handleDrop"
          @dragover="handleDragOver"
          @click="$refs.fileInput.click()"
          class="border-2 border-dashed border-gray-300 rounded-xl p-6 md:p-12 text-center cursor-pointer transition-all hover:border-cyan-400 hover:bg-cyan-50"
          :class="{ 'border-cyan-500 bg-cyan-50': isDragging }"
        >
          <input 
            type="file" 
            ref="fileInput"
            @change="handleFileSelect"
            accept="image/*" 
            class="hidden"
          />
          
          <div class="text-5xl md:text-6xl mb-3 md:mb-4">📸</div>
          <h3 class="text-lg md:text-xl font-semibold text-gray-700 mb-2">
            {{ selectedFile ? 'Image Selected ✓' : 'Upload Human Skin Image' }}
          </h3>
          <p class="text-sm md:text-base text-gray-500 mb-3 md:mb-4 px-2">
            {{ selectedFile ? selectedFile.name : 'Click or drag & drop your image here' }}
          </p>
          <button class="bg-cyan-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-cyan-600 transition text-sm md:text-base">
            {{ selectedFile ? 'Change Image' : 'Choose File' }}
          </button>
        </div>

        <!-- Analyze Button -->
        <button 
          @click="analyzeImage"
          :disabled="!selectedFile || loading"
          class="w-full mt-4 md:mt-6 bg-cyan-500 text-white py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-cyan-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
        >
          {{ loading ? '🔬 Analyzing...' : '🧪 Analyze Skin Lesion' }}
        </button>
      </div>

      <!-- Results -->
      <div v-if="result" class="bg-white rounded-2xl shadow-xl p-4 md:p-8 mx-2">
        <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Analysis Results</h2>
        
        <!-- Prediction Card -->
        <div class="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
          <!-- Image Preview -->
          <div class="order-2 md:order-1">
            <h3 class="font-semibold text-gray-700 mb-3 md:mb-4">Uploaded Image</h3>
            <img :src="imagePreview" class="w-full rounded-lg shadow-md max-h-64 md:max-h-80 object-cover" />
          </div>

          <!-- Results -->
          <div class="order-1 md:order-2 space-y-4 md:space-y-6">
            <h3 class="font-semibold text-gray-700 mb-3 md:mb-4">AI Analysis</h3>
            
            <!-- Prediction & Confidence -->
            <div class="grid grid-cols-2 gap-3 md:gap-4">
              <div class="p-3 md:p-4 bg-blue-50 rounded-lg">
                <p class="text-xs md:text-sm text-gray-600">Prediction</p>
                <p class="text-lg md:text-xl font-bold text-cyan-700 capitalize">{{ result.prediction }}</p>
              </div>
              
              <div class="p-3 md:p-4 bg-green-50 rounded-lg">
                <p class="text-xs md:text-sm text-gray-600">Confidence</p>
                <p class="text-lg md:text-xl font-bold text-cyan-600">{{ (result.confidence * 100).toFixed(2) }}%</p>
              </div>
            </div>

            <!-- Medical Guidance -->
            <div class="p-4 rounded-lg" :class="getRiskClass(result.prediction)">
              <h4 class="font-semibold text-base md:text-lg mb-2">{{ getRiskTitle(result.prediction) }}</h4>
              <p class="text-sm md:text-base mb-3">{{ getRiskDescription(result.prediction) }}</p>
              <p class="font-semibold text-sm md:text-base">{{ getActionRecommendation(result.prediction) }}</p>
            </div>

            <!-- All Predictions -->
            <div class="p-3 md:p-4 bg-gray-50 rounded-lg">
              <p class="text-xs md:text-sm text-gray-600 mb-2">All Possibilities</p>
              <div class="space-y-1 md:space-y-2 max-h-32 md:max-h-40 overflow-y-auto">
                <div 
                  v-for="(prob, index) in result.all_predictions" 
                  :key="index"
                  class="flex justify-between items-center text-xs md:text-sm"
                >
                  <span class="capitalize">{{ classNames[index] }}</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-16 md:w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        class="bg-cyan-500 h-2 rounded-full" 
                        :style="{ width: (prob * 100) + '%' }"
                      ></div>
                    </div>
                    <span class="font-semibold w-8 text-right">{{ (prob * 100).toFixed(0) }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ABCDE Rule for moles -->
        <div v-if="result.prediction === 'nv'" class="mt-6 p-4 bg-yellow-50 rounded-lg">
          <h5 class="font-semibold mb-2 text-sm md:text-base">👁️ ABCDE Rule for Mole Monitoring:</h5>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs md:text-sm">
            <div class="p-2 bg-white rounded">
              <strong class="text-cyan-700">A</strong>symmetry
            </div>
            <div class="p-2 bg-white rounded">
              <strong class="text-cyan-700">B</strong>order
            </div>
            <div class="p-2 bg-white rounded">
              <strong class="text-cyan-700">C</strong>olor
            </div>
            <div class="p-2 bg-white rounded">
              <strong class="text-cyan-700">D</strong>iameter
            </div>
            <div class="p-2 bg-white rounded md:col-span-1 col-span-2">
              <strong class="text-cyan-700">E</strong>volving
            </div>
          </div>
        </div>

        <!-- Important Disclaimer -->
        <div class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p class="text-red-700 text-xs md:text-sm font-semibold">
            ⚠️ IMPORTANT: This AI tool is for educational purposes only. 
            Always consult a healthcare professional for medical diagnosis.
          </p>
        </div>
      </div>

<!-- Enhanced Error Message with Image Preview -->
<div v-if="error" class="bg-white rounded-2xl shadow-xl p-4 md:p-8 mx-2">
  <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Analysis Results</h2>
  
  <div class="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
    <!-- Image Preview -->
    <div>
      <h3 class="font-semibold text-gray-700 mb-3 md:mb-4">Uploaded Image</h3>
      <img :src="imagePreview" class="w-full rounded-lg shadow-md max-h-64 md:max-h-80 object-cover" />
    </div>

    <!-- Error Details -->
    <div class="space-y-4 md:space-y-6">
      <h3 class="font-semibold text-gray-700 mb-3 md:mb-4">Validation Result</h3>
      
      <div class="bg-red-50 border border-red-200 rounded-xl p-4 md:p-6">
        <div class="flex items-start">
          <div class="text-xl md:text-2xl mr-3">🚫</div>
          <div>
            <p class="text-red-800 font-bold text-base md:text-lg mb-2">{{ error }}</p>
            <p v-if="errorDetails" class="text-red-700 mb-2 text-sm md:text-base">
              <span class="font-semibold">Detected:</span> {{ errorDetails }}
            </p>
            <p v-if="errorConfidence" class="text-red-600 text-xs md:text-sm mb-2">
              <span class="font-semibold">Confidence:</span> {{ errorConfidence }}
            </p>
            <p v-if="errorSuggestion" class="text-blue-700 font-medium text-sm md:text-base">
              💡 {{ errorSuggestion }}
            </p>
          </div>
        </div>
      </div>

      <!-- Helpful Tips -->
      <div class="p-4 bg-blue-50 rounded-lg">
        <h4 class="font-semibold text-blue-800 mb-2">📝 Tips for Better Results:</h4>
        <ul class="text-sm text-blue-700 space-y-1">
          <li>• Ensure good lighting on the skin area</li>
          <li>• Focus on clear, visible skin lesions</li>
          <li>• Avoid photos of animals, objects, or text</li>
          <li>• Make sure the skin is clearly visible in the image</li>
        </ul>
      </div>
    </div>
  </div>
</div>

      <!-- Loading Overlay -->
      <div v-if="loading" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-2xl p-8 text-center max-w-sm mx-4">
          <div class="text-4xl mb-4">🔬</div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Analyzing Image</h3>
          <p class="text-gray-600 mb-4">Please wait while we process your skin lesion...</p>
          <div class="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
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
    },

    getRiskClass(prediction) {
      const riskClasses = {
        'mel': 'bg-red-100 border border-red-300',
        'akiec': 'bg-orange-100 border border-orange-300', 
        'bcc': 'bg-orange-100 border border-orange-300',
        'bkl': 'bg-yellow-100 border border-yellow-300',
        'df': 'bg-blue-100 border border-blue-300',
        'nv': 'bg-green-100 border border-green-300',
        'vasc': 'bg-blue-100 border border-blue-300'
      };
      return riskClasses[prediction] || 'bg-gray-100';
    },

    getRiskTitle(prediction) {
      const titles = {
        'mel': '🚨 HIGH RISK - Melanoma Detected',
        'akiec': '⚠️ MEDIUM RISK - Pre-cancerous Lesion',
        'bcc': '⚠️ MEDIUM RISK - Skin Cancer Detected', 
        'bkl': '📝 LOW RISK - Benign Growth',
        'df': '📝 LOW RISK - Benign Growth',
        'nv': '✅ NORMAL - Common Mole',
        'vasc': '📝 LOW RISK - Vascular Lesion'
      };
      return titles[prediction] || 'Unknown Risk';
    },

    getRiskDescription(prediction) {
      const descriptions = {
        'mel': 'Melanoma is a serious form of skin cancer that requires immediate medical attention.',
        'akiec': 'Actinic keratosis can develop into skin cancer and should be evaluated by a doctor.',
        'bcc': 'Basal cell carcinoma is a common skin cancer that requires medical treatment.',
        'bkl': 'Benign keratosis-like lesions are usually harmless but should be monitored.',
        'df': 'Dermatofibroma is a benign skin growth that typically requires no treatment.',
        'nv': 'This appears to be a common mole. Monitor for any changes using the ABCDE rule.',
        'vasc': 'Vascular lesions are usually benign but should be confirmed by a doctor.'
      };
      return descriptions[prediction] || 'Consult a healthcare professional for accurate diagnosis.';
    },

    getActionRecommendation(prediction) {
      const actions = {
        'mel': '🚨 URGENT: See a dermatologist immediately',
        'akiec': '👨‍⚕️ Schedule a doctor appointment soon',
        'bcc': '👨‍⚕️ Schedule a doctor appointment soon', 
        'bkl': '👨‍⚕️ Consult doctor at next routine visit',
        'df': '👨‍⚕️ Consult doctor for confirmation',
        'nv': '✅ Self-monitor for changes',
        'vasc': '👨‍⚕️ Consult doctor for diagnosis'
      };
      return actions[prediction] || 'Consult healthcare professional';
    }
  }
}
</script>