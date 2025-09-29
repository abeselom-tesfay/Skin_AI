<template>
  <section class="px-4 md:px-20 py-16 bg-gray-50" id="methodology">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Technical Architecture</h2>
      <p class="text-gray-600 mb-12">Dual-stage deep learning pipeline for clinical-grade skin lesion analysis</p>

      <!-- Dual-Stage Architecture -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-12">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center"> Dual-Stage Pipeline Architecture</h3>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Stage 1: Segmentation -->
          <div class="border-2 border-blue-200 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-blue-100 p-2 rounded-lg">
                <span class="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h4 class="text-xl font-semibold text-gray-900">Stage 1: Lesion Segmentation</h4>
            </div>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div class="bg-purple-100 p-2 rounded-lg mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900">U-Net with VGG16 Encoder</p>
                  <p class="text-gray-600 text-sm">Encoder-decoder architecture with skip connections for precise lesion boundary detection</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="bg-green-100 p-2 rounded-lg mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900">Semantic Segmentation</p>
                  <p class="text-gray-600 text-sm">Pixel-wise classification to isolate lesions from healthy skin</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Stage 2: Classification -->
          <div class="border-2 border-green-200 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-green-100 p-2 rounded-lg">
                <span class="text-green-600 font-bold text-lg">2</span>
              </div>
              <h4 class="text-xl font-semibold text-gray-900">Stage 2: Ensemble Classification</h4>
            </div>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div class="bg-orange-100 p-2 rounded-lg mt-1">
                  <span class="text-orange-600 font-bold">E</span>
                </div>
                <div>
                  <p class="font-medium text-gray-900">EfficientNetB0</p>
                  <p class="text-gray-600 text-sm">Compound scaling for optimal parameter efficiency</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="bg-red-100 p-2 rounded-lg mt-1">
                  <span class="text-red-600 font-bold">D</span>
                </div>
                <div>
                  <p class="font-medium text-gray-900">DenseNet121</p>
                  <p class="text-gray-600 text-sm">Dense connections for improved gradient flow and feature reuse</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="bg-indigo-100 p-2 rounded-lg mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900">Model Ensemble</p>
                  <p class="text-gray-600 text-sm">Weighted averaging of predictions for robust classification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dataset & Preprocessing -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">📊 Research Datasets</h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <div class="bg-blue-100 p-2 rounded-lg mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900">ISIC 2018 Challenge Dataset</p>
                <p class="text-gray-600 text-sm">2,594 images across 7 disease classes with segmentation masks</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="bg-green-100 p-2 rounded-lg mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900">HAM10000 Extension</p>
                <p class="text-gray-600 text-sm">10,015 dermatoscopic images for enhanced model generalization</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">⚙️ Advanced Preprocessing</h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <div class="bg-purple-100 p-2 rounded-lg mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900">Heavy Data Augmentation</p>
                <p class="text-gray-600 text-sm">Rotation, flipping, zoom, brightness adjustment, elastic transformations</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="bg-red-100 p-2 rounded-lg mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900">Class Balancing</p>
                <p class="text-gray-600 text-sm">Strategic oversampling & sklearn compute_class_weight for minority classes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Performance Metrics -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-12">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">📈 Model Performance Metrics</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600">96.2%</div>
            <div class="text-gray-600 text-sm mt-2">Overall Accuracy</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-green-600">95.8%</div>
            <div class="text-gray-600 text-sm mt-2">Precision</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-purple-600">94.7%</div>
            <div class="text-gray-600 text-sm mt-2">Recall</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-orange-600">0.982</div>
            <div class="text-gray-600 text-sm mt-2">AUC Score</div>
          </div>
        </div>
        
        <!-- Architecture Comparison -->
        <div class="mt-8">
          <p class="text-gray-700 text-center mb-4 font-medium">Ensemble vs Individual Model Performance</p>
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div class="p-3 bg-white rounded-lg shadow-sm">
                <div class="font-bold text-gray-900">U-Net + VGG16</div>
                <div class="text-blue-600 font-semibold">94.8% Dice Score</div>
                <div class="text-gray-500 text-sm">Segmentation</div>
              </div>
              <div class="p-3 bg-white rounded-lg shadow-sm">
                <div class="font-bold text-gray-900">EfficientNetB0</div>
                <div class="text-green-600 font-semibold">94.1% Accuracy</div>
                <div class="text-gray-500 text-sm">Classification</div>
              </div>
              <div class="p-3 bg-white rounded-lg shadow-sm">
                <div class="font-bold text-gray-900">DenseNet121</div>
                <div class="text-purple-600 font-semibold">93.8% Accuracy</div>
                <div class="text-gray-500 text-sm">Classification</div>
              </div>
              <div class="p-3 bg-blue-50 rounded-lg shadow-sm border-2 border-blue-200">
                <div class="font-bold text-gray-900">Ensemble</div>
                <div class="text-red-600 font-semibold">96.2% Accuracy</div>
                <div class="text-gray-500 text-sm">Final System</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technical Stack -->
      <div class="mt-12">
        <h3 class="text-xl font-semibold text-gray-900 mb-6">🛠️ Full Technical Stack</h3>
        
        <div class="space-y-6">
          <!-- ML & AI -->
          <div>
            <h4 class="font-semibold text-gray-700 mb-3">🤖 Machine Learning & AI</h4>
            <div class="flex flex-wrap gap-2">
              <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">TensorFlow 2.x</span>
              <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Keras</span>
              <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">U-Net + VGG16</span>
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">EfficientNetB0</span>
              <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">DenseNet121</span>
              <span class="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">OpenCV</span>
              <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">scikit-learn</span>
            </div>
          </div>

          <!-- Backend -->
          <div>
            <h4 class="font-semibold text-gray-700 mb-3">⚡ Backend API</h4>
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Flask</span>
              <span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Flask-CORS</span>
              <span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Pillow (PIL)</span>
              <span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Werkzeug</span>
            </div>
          </div>

          <!-- Frontend -->
          <div>
            <h4 class="font-semibold text-gray-700 mb-3">🎨 Frontend</h4>
            <div class="flex flex-wrap gap-2">
              <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Vue.js 3</span>
              <span class="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript ES6+</span>
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Fetch API</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Add to your existing script
const performanceMetrics = {
  accuracy: 96.2,
  precision: 95.8,
  recall: 94.7,
  auc: 0.982
};

const techStack = [
  'PyTorch', 'TensorFlow', 'OpenCV', 'scikit-learn', 
  'Vue.js', 'FastAPI', 'Docker', 'Google Cloud'
];
</script>