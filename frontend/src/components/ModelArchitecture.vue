<template>
  <section class="px-4 md:px-20 py-16 bg-gradient-to-br from-gray-50 to-blue-50" id="tech-stack">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-2 text-center"> Technical Architecture</h2>
      <p class="text-gray-600 mb-12 text-center">Research-grade dermatological AI system with dual-stage processing</p>

      <!-- Dual-Stage Architecture -->
      <div class="bg-white rounded-2xl p-8 mb-12 border border-blue-100">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Dual-Stage AI Pipeline</h3>
        
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <!-- Stage 1: Segmentation -->
          <div class="bg-gradient-to-br from-cyan-200 to-indigo-50 p-6 rounded-xl border border-cyan-200">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-cyan-100 p-2 rounded-lg">
                <span class="text-cyan-600 font-bold text-lg">1</span>
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
          <div class="bg-gradient-to-br from-cyan-200 to-emerald-50 p-6 rounded-xl border border-green-200">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-green-100 p-2 rounded-lg">
                <span class="text-green-600 font-bold text-lg">2</span>
              </div>
              <h4 class="text-xl font-semibold text-gray-900">Stage 2: Ensemble Classification</h4>
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="font-medium text-gray-900">EfficientNetB0 + DenseNet121</span>
              </div>
              <p class="text-gray-600 text-sm">Pre-trained CNNs with transfer learning</p>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
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
        <div class="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
          <h3 class="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span class="text-2xl"></span> Machine Learning & AI
          </h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="bg-orange-100 p-2 rounded-lg mt-1">
                <span class="text-orange-600 font-bold">TF</span>
              </div>
              <div>
                <p class="font-medium text-gray-900">TensorFlow 2.x & Keras</p>
                <p class="text-gray-600 text-sm">Deep learning framework with high-level API</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="bg-blue-100 p-2 rounded-lg mt-1">
                <span class="text-blue-600 font-bold">CV</span>
              </div>
              <div>
                <p class="font-medium text-gray-900">OpenCV + NumPy</p>
                <p class="text-gray-600 text-sm">Computer vision and numerical computing</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="bg-green-100 p-2 rounded-lg mt-1">
                <span class="text-green-600 font-bold">SK</span>
              </div>
              <div>
                <p class="font-medium text-gray-900">scikit-learn</p>
                <p class="text-gray-600 text-sm">Metrics, evaluation, and class weight balancing</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Dataset & Preprocessing -->
        <div class="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
          <h3 class="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span class="text-2xl">📊</span> Dataset & Preprocessing
          </h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="bg-purple-100 p-2 rounded-lg mt-1">
                <span class="text-purple-600 font-bold">ISIC</span>
              </div>
              <div>
                <p class="font-medium text-gray-900">ISIC 2018 Dataset</p>
                <p class="text-gray-600 text-sm">10,015 dermoscopic images across 7 disease classes</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="bg-red-100 p-2 rounded-lg mt-1">
                <span class="text-red-600 font-bold">⚖️</span>
              </div>
              <div>
                <p class="font-medium text-gray-900">Advanced Data Augmentation</p>
                <p class="text-gray-600 text-sm">Rotation (45°), flipping, zoom (40%), brightness, channel shifts</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="bg-indigo-100 p-2 rounded-lg mt-1">
                <span class="text-indigo-600 font-bold">7C</span>
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
      <div class="bg-gradient-to-r from-cyan-500 to-green-400 rounded-2xl p-8 text-white shadow-xl mb-12">
        <h3 class="text-2xl font-bold mb-8 text-center">📈 Model Performance</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">96.2%</div>
            <div class="text-blue-100 text-sm">Overall Accuracy</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">95.8%</div>
            <div class="text-blue-100 text-sm">Precision</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">94.7%</div>
            <div class="text-blue-100 text-sm">Recall</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">0.982</div>
            <div class="text-blue-100 text-sm">AUC Score</div>
          </div>
        </div>
        
        <!-- Ensemble Comparison -->
        <div class="mt-8 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <h4 class="font-semibold text-center mb-3 text-white">Ensemble Performance Comparison</h4>
          <div class="grid grid-cols-3 gap-4 text-center">
            <div>
              <div class="text-lg font-bold">EfficientNet</div>
              <div class="text-xl font-bold text-white">94.1%</div>
            </div>
            <div>
              <div class="text-lg font-bold">DenseNet</div>
              <div class="text-xl font-bold text-white">93.8%</div>
            </div>
            <div>
              <div class="text-lg font-bold text-white">Ensemble</div>
              <div class="text-xl font-bold text-white">96.2%</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Full Stack Technologies -->
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Full Stack Implementation</h3>
        
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Backend -->
          <div class="text-center">
            <div class="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <!-- Server Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16M4 6V4a2 2 0 012-2h12a2 2 0 012 2v2M4 18v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-3">Backend API</h4>
            <div class="space-y-1">
              <span class="block bg-gray-100 px-3 py-1 rounded-full text-sm">Flask</span>
              <span class="block bg-gray-100 px-3 py-1 rounded-full text-sm">Flask-CORS</span>
              <span class="block bg-gray-100 px-3 py-1 rounded-full text-sm">Pillow (PIL)</span>
            </div>
          </div>

          <!-- Frontend -->
          <div class="text-center">
            <div class="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <!-- Layout Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h4a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM15 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zM15 14a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" />
                </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-3">Frontend</h4>
            <div class="space-y-1">
              <span class="block bg-gray-100 px-3 py-1 rounded-full text-sm">Vue.js 3</span>
              <span class="block bg-gray-100 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span class="block bg-gray-100 px-3 py-1 rounded-full text-sm">Vue Router</span>
            </div>
          </div>

          <!-- Image Processing -->
          <div class="text-center">
            <div class="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <!-- Image Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11a4 4 0 118 0 4 4 0 01-8 0z" />
                </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-3">Image Pipeline</h4>
            <div class="space-y-1">
              <span class="block bg-gray-100 px-3 py-1 rounded-full text-sm">U-Net Segmentation</span>
              <span class="block bg-gray-100 px-3 py-1 rounded-full text-sm">RGB/HSV Analysis</span>
              <span class="block bg-gray-100 px-3 py-1 rounded-full text-sm">Real-time Processing</span>
            </div>
          </div>
        </div>

        <!-- Key Features -->
        <div class="mt-8 pt-6 border-t border-gray-200">
          <h4 class="font-semibold text-gray-900 mb-4 text-center">🎯 Key Technical Features</h4>
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