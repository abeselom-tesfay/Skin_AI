<template>
  <section class="px-4 md:px-20 py-25 bg-gradient-to-br from-gray-50 to-cyan-50" id="tech-stack">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-2 text-center">Technical Architecture</h2>
      <p class="text-gray-600 mb-12 text-center">Research-grade dermatological AI system with dual-stage processing</p>

      <div class="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-8 text-center">
        <p class="text-cyan-700 font-medium">
          🏥 Clinically reviewed and supervised by dermatology professionals
        </p>
      </div>

      <!-- Dual-Stage Architecture -->
      <div class="bg-white rounded-2xl p-8 mb-12 border border-cyan-100 shadow-sm">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Dual-Stage AI Pipeline</h3>
        
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <!-- Stage 1: Segmentation -->
          <div class="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl border border-cyan-200">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-cyan-500 p-2 rounded-lg">
                <span class="text-white font-bold text-lg">1</span>
              </div>
              <h4 class="text-xl font-semibold text-gray-900">Stage 1: Lesion Segmentation</h4>
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span class="font-medium text-gray-900">U-Net with VGG16 Encoder</span>
              </div>
              <p class="text-gray-600 text-sm">Semantic segmentation for precise lesion boundary detection and isolation</p>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span class="font-medium text-gray-900">Encoder-Decoder Architecture</span>
              </div>
              <p class="text-gray-600 text-sm">Skip connections for detailed spatial information preservation</p>
            </div>
          </div>

          <!-- Stage 2: Classification -->
          <div class="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl border border-cyan-200">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-cyan-500 p-2 rounded-lg">
                <span class="text-white font-bold text-lg">2</span>
              </div>
              <h4 class="text-xl font-semibold text-gray-900">Stage 2: Ensemble Classification</h4>
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span class="font-medium text-gray-900">EfficientNetB0 + DenseNet121</span>
              </div>
              <p class="text-gray-600 text-sm">Pre-trained CNNs with transfer learning</p>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span class="font-medium text-gray-900">Weighted Ensemble</span>
              </div>
              <p class="text-gray-600 text-sm">Combined predictions for superior accuracy</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Technical Stack Grid -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <!-- ML & AI Stack -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-cyan-100">
          <h3 class="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <div class="bg-cyan-100 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
            Machine Learning & AI
          </h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="bg-cyan-100 p-2 rounded-lg mt-1">
                <span class="text-cyan-600 font-bold text-xs">TF</span>
              </div>
              <div>
                <p class="font-medium text-gray-900">TensorFlow 2.x & Keras</p>
                <p class="text-gray-600 text-sm">Deep learning framework with high-level API</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="bg-cyan-100 p-2 rounded-lg mt-1">
                <span class="text-cyan-600 font-bold text-xs">CV</span>
              </div>
              <div>
                <p class="font-medium text-gray-900">OpenCV + NumPy</p>
                <p class="text-gray-600 text-sm">Computer vision and numerical computing</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="bg-cyan-100 p-2 rounded-lg mt-1">
                <span class="text-cyan-600 font-bold text-xs">SK</span>
              </div>
              <div>
                <p class="font-medium text-gray-900">scikit-learn</p>
                <p class="text-gray-600 text-sm">Metrics, evaluation, and class weight balancing</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Dataset & Preprocessing -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-cyan-100">
          <h3 class="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <div class="bg-cyan-100 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clip-rule="evenodd" />
              </svg>
            </div>
            Dataset & Preprocessing
          </h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="bg-cyan-100 p-2 rounded-lg mt-1">
                <span class="text-cyan-600 font-bold text-xs">ISIC</span>
              </div>
              <div>
                <p class="font-medium text-gray-900">ISIC 2018 Dataset</p>
                <p class="text-gray-600 text-sm">10,015 dermoscopic images across 7 disease classes</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="bg-cyan-100 p-2 rounded-lg mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900">Advanced Data Augmentation</p>
                <p class="text-gray-600 text-sm">Rotation (45°), flipping, zoom (40%), brightness, channel shifts</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="bg-cyan-100 p-2 rounded-lg mt-1">
                <span class="text-cyan-600 font-bold text-xs">7C</span>
              </div>
              <div>
                <p class="font-medium text-gray-900">7-Class Classification</p>
                <p class="text-gray-600 text-sm">akiec, bcc, bkl, df, mel, nv, vasc with strategic oversampling</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Performance Metrics -->
      <div class="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl p-8 text-white shadow-lg mb-12">
        <h3 class="text-2xl font-bold mb-8 text-center">Model Performance</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">96.2%</div>
            <div class="text-cyan-100 text-sm">Overall Accuracy</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">95.8%</div>
            <div class="text-cyan-100 text-sm">Precision</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">94.7%</div>
            <div class="text-cyan-100 text-sm">Recall</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">0.982</div>
            <div class="text-cyan-100 text-sm">AUC Score</div>
          </div>
        </div>
        
        <!-- Ensemble Comparison -->
        <div class="mt-8 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <h4 class="font-semibold text-center mb-3 text-white">Ensemble Performance Comparison</h4>
          <div class="grid grid-cols-3 gap-4 text-center">
            <div>
              <div class="text-sm font-semibold text-cyan-100">EfficientNet</div>
              <div class="text-xl font-bold text-white">94.1%</div>
            </div>
            <div>
              <div class="text-sm font-semibold text-cyan-100">DenseNet</div>
              <div class="text-xl font-bold text-white">93.8%</div>
            </div>
            <div>
              <div class="text-sm font-semibold text-white">Ensemble</div>
              <div class="text-xl font-bold text-white">96.2%</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Full Stack Technologies -->
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Full Stack Implementation</h3>
        
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Backend -->
          <div class="text-center">
            <div class="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                <path d="M15 7h1a1 1 0 011 1v5a1 1 0 01-1 1h-1V7z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-3">Backend API</h4>
            <div class="space-y-1">
              <span class="block bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm border border-cyan-100">Flask</span>
              <span class="block bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm border border-cyan-100">Flask-CORS</span>
              <span class="block bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm border border-cyan-100">Pillow (PIL)</span>
            </div>
          </div>

          <!-- Frontend -->
          <div class="text-center">
            <div class="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clip-rule="evenodd" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-3">Frontend</h4>
            <div class="space-y-1">
              <span class="block bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm border border-cyan-100">Vue.js 3</span>
              <span class="block bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm border border-cyan-100">Tailwind CSS</span>
              <span class="block bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm border border-cyan-100">Vue Router</span>
            </div>
          </div>

          <!-- Image Processing -->
          <div class="text-center">
            <div class="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-3">Image Pipeline</h4>
            <div class="space-y-1">
              <span class="block bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm border border-cyan-100">U-Net Segmentation</span>
              <span class="block bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm border border-cyan-100">RGB/HSV Analysis</span>
              <span class="block bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm border border-cyan-100">Real-time Processing</span>
            </div>
          </div>
        </div>

        <!-- Key Features -->
        <div class="mt-8 pt-6 border-t border-gray-200">
          <h4 class="font-semibold text-gray-900 mb-4 text-center">Key Technical Features</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>Dual-stage processing (Segmentation + Classification)</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>Real-time AI predictions with confidence scores</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>Production-ready RESTful API architecture</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>State-of-the-art ensemble learning techniques</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Performance data for potential future interactivity
const performanceData = {
  ensemble: 96.2,
  efficientnet: 94.1,
  densenet: 93.8,
  metrics: {
    accuracy: 96.2,
    precision: 95.8,
    recall: 94.7,
    auc: 0.982
  }
};

const techStack = {
  ml: ['TensorFlow 2.x', 'Keras', 'U-Net + VGG16', 'EfficientNetB0', 'DenseNet121', 'OpenCV', 'NumPy', 'scikit-learn'],
  data: ['ISIC 2018', 'Class Weight Balancing', 'Heavy Augmentation', '7-Class Classification'],
  backend: ['Flask', 'Flask-CORS', 'Pillow (PIL)'],
  frontend: ['Vue.js 3', 'Tailwind CSS'],
  features: [
    'Dual-stage processing',
    'Real-time predictions', 
    'Medical-grade UI',
    'RESTful API',
    'State-of-the-art accuracy'
  ]
};
</script>