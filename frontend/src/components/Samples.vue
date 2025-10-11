<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-20 px-4">
    <div class="max-w-6xl mx-auto">
      
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sample Image Gallery</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Click any image to view full size, then click "Test This Image" to analyze it.
        </p>
      </div>

      <!-- Human Skin Samples -->
      <div class="mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Human Skin Lesion Samples</h2>
        
        <!-- Sample Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="(sample, index) in humanSamples" 
            :key="'human-' + index"
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
            @click="openModal(sample)"
          >
            <div class="relative overflow-hidden">
              <img 
                :src="sample.image" 
                :alt="sample.description"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute top-2 right-2">
                <span class="px-2 py-1 text-xs font-semibold rounded-full" :class="getRiskBadge(sample.type)">
                  {{ sample.type.toUpperCase() }}
                </span>
              </div>
            </div>
            
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-2">{{ sample.description }}</h3>
              <p class="text-sm text-gray-600 mb-3">{{ sample.details }}</p>
              
              <div class="flex justify-between items-center">
                <span class="text-xs px-2 py-1 rounded-full" :class="getRiskClass(sample.type)">
                  {{ getRiskLevel(sample.type) }}
                </span>
                <span class="text-xs text-gray-500">Click to view</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Non-Human Samples -->
      <div class="mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">🚫 Non-Human Samples (Will Be Rejected)</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="(sample, index) in nonHumanSamples" 
            :key="'nonhuman-' + index"
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-red-200"
            @click="openModal(sample)"
          >
            <div class="relative overflow-hidden">
              <img 
                :src="sample.image" 
                :alt="sample.description"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute top-2 right-2">
                <span class="px-2 py-1 text-xs font-semibold rounded-full bg-red-500 text-white">
                  REJECTED
                </span>
              </div>
            </div>
            
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-2">{{ sample.description }}</h3>
              <p class="text-sm text-gray-600 mb-3">{{ sample.details }}</p>
              
              <div class="flex justify-between items-center">
                <span class="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700">
                  Invalid Content
                </span>
                <span class="text-xs text-gray-500">Click to view</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Image Modal -->
      <div v-if="selectedSample" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" @click="closeModal">
        <div class="max-w-4xl max-h-full bg-white rounded-2xl overflow-hidden" @click.stop>
          <!-- Modal Header -->
          <div class="flex justify-between items-center p-6 border-b">
            <div>
              <h3 class="text-xl font-bold text-gray-800">{{ selectedSample.description }}</h3>
              <p class="text-gray-600">{{ selectedSample.details }}</p>
              <span class="inline-block mt-2 px-3 py-1 text-sm rounded-full" :class="getRiskBadge(selectedSample.type)">
                {{ getRiskLevel(selectedSample.type) }}
              </span>
            </div>
            <button @click="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl">
              ×
            </button>
          </div>
          
          <!-- Full Size Image -->
          <div class="p-6 max-h-[70vh] overflow-auto">
            <img 
              :src="selectedSample.image" 
              :alt="selectedSample.description"
              class="w-full h-auto max-w-full object-contain rounded-lg"
            />
          </div>
          
          <!-- Modal Actions -->
          <div class="p-6 border-t bg-gray-50 flex justify-between items-center">
            <button 
              @click="closeModal"
              class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              Close Preview
            </button>
            <button 
              @click="useSample(selectedSample)"
              class="px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition"
            >
              🧪 Test This Image
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Ready to Test Your Own Images?</h3>
        <p class="text-gray-600 mb-6">Upload your own skin images for AI-powered analysis</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/check" class="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition">
            🧪 Go to Skin Analyzer
          </router-link>
          <router-link to="/" class="border border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition">
            🏠 Back to Home
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Samples',
  data() {
    return {
      selectedSample: null, // For modal
      
      // 4 samples for each of the 7 classes + 4 non-human samples
      humanSamples: [
        // MEL - Melanoma (4 samples)
        {
          image: new URL('@/assets/samples/mel-1.jpg', import.meta.url).href,
          description: 'Malignant Melanoma',
          details: 'Asymmetric lesion with irregular borders',
          type: 'mel'
        },
        {
          image: new URL('@/assets/samples/mel-2.jpg', import.meta.url).href,
          description: 'Advanced Melanoma', 
          details: 'Large diameter with color variation',
          type: 'mel'
        },
        {
          image: new URL('@/assets/samples/mel-3.jpg', import.meta.url).href,
          description: 'Early Melanoma',
          details: 'Small evolving lesion',
          type: 'mel'
        },
        {
          image: new URL('@/assets/samples/mel-4.jpg', import.meta.url).href,
          description: 'Nodular Melanoma',
          details: 'Raised dark lesion',
          type: 'mel'
        },

        // BCC - Basal Cell Carcinoma (4 samples)
        {
          image: new URL('@/assets/samples/bcc-1.jpg', import.meta.url).href,
          description: 'Basal Cell Carcinoma',
          details: 'Pearly nodule appearance',
          type: 'bcc'
        },
        {
          image: new URL('@/assets/samples/bcc-2.jpg', import.meta.url).href,
          description: 'Pigmented BCC',
          details: 'Dark pigmented lesion',
          type: 'bcc'
        },
        {
          image: new URL('@/assets/samples/bcc-3.jpg', import.meta.url).href,
          description: 'Superficial BCC', 
          details: 'Red patch with border',
          type: 'bcc'
        },
        {
          image: new URL('@/assets/samples/bcc-4.jpg', import.meta.url).href,
          description: 'Ulcerated BCC',
          details: 'Lesion with ulceration',
          type: 'bcc'
        },

        // AKIEC - Actinic Keratosis (4 samples)
        {
          image: new URL('@/assets/samples/akiec-1.jpg', import.meta.url).href,
          description: 'Actinic Keratosis',
          details: 'Rough, scaly patch',
          type: 'akiec'
        },
        {
          image: new URL('@/assets/samples/akiec-2.jpg', import.meta.url).href,
          description: 'Hypertrophic AK',
          details: 'Thickened elevated lesion',
          type: 'akiec'
        },
        {
          image: new URL('@/assets/samples/akiec-3.jpg', import.meta.url).href,
          description: 'Pigmented AK',
          details: 'Brown-colored patch',
          type: 'akiec'
        },
        {
          image: new URL('@/assets/samples/akiec-4.jpg', import.meta.url).href,
          description: 'Advanced AK',
          details: 'Well-defined plaque',
          type: 'akiec'
        },

        // BKL - Benign Keratosis (4 samples)
        {
          image: new URL('@/assets/samples/bkl-1.jpg', import.meta.url).href,
          description: 'Seborrheic Keratosis',
          details: 'Waxy stuck-on appearance',
          type: 'bkl'
        },
        {
          image: new URL('@/assets/samples/bkl-2.jpg', import.meta.url).href,
          description: 'Pigmented BKL',
          details: 'Dark brown rough surface',
          type: 'bkl'
        },
        {
          image: new URL('@/assets/samples/bkl-3.jpg', import.meta.url).href,
          description: 'Stucco Keratosis',
          details: 'Multiple small lesions',
          type: 'bkl'
        },
        {
          image: new URL('@/assets/samples/bkl-4.jpg', import.meta.url).href,
          description: 'Irritated BKL',
          details: 'Inflamed benign lesion',
          type: 'bkl'
        },

        // NV - Melanocytic Nevi (4 samples)
        {
          image: new URL('@/assets/samples/nv-1.jpg', import.meta.url).href,
          description: 'Common Mole',
          details: 'Symmetrical even borders',
          type: 'nv'
        },
        {
          image: new URL('@/assets/samples/nv-2.jpg', import.meta.url).href,
          description: 'Junctional Nevus',
          details: 'Flat brown lesion',
          type: 'nv'
        },
        {
          image: new URL('@/assets/samples/nv-3.jpg', import.meta.url).href,
          description: 'Compound Nevus',
          details: 'Slightly raised lesion',
          type: 'nv'
        },
        {
          image: new URL('@/assets/samples/nv-4.jpg', import.meta.url).href,
          description: 'Dermal Nevus',
          details: 'Skin-colored raised',
          type: 'nv'
        },

        // DF - Dermatofibroma (4 samples)
        {
          image: new URL('@/assets/samples/df-1.jpg', import.meta.url).href,
          description: 'Dermatofibroma',
          details: 'Firm button-like nodule',
          type: 'df'
        },
        {
          image: new URL('@/assets/samples/df-2.jpg', import.meta.url).href,
          description: 'Pigmented DF',
          details: 'Brown fibrous nodule',
          type: 'df'
        },
        {
          image: new URL('@/assets/samples/df-3.jpg', import.meta.url).href,
          description: 'Multiple DFs',
          details: 'Cluster of nodules',
          type: 'df'
        },
        {
          image: new URL('@/assets/samples/df-4.jpg', import.meta.url).href,
          description: 'Large Dermatofibroma',
          details: 'Significant growth',
          type: 'df'
        },

        // VASC - Vascular Lesions (4 samples)
        {
          image: new URL('@/assets/samples/vasc-1.jpg', import.meta.url).href,
          description: 'Cherry Angioma',
          details: 'Bright red papule',
          type: 'vasc'
        },
        {
          image: new URL('@/assets/samples/vasc-2.jpg', import.meta.url).href,
          description: 'Spider Angioma',
          details: 'Central red with vessels',
          type: 'vasc'
        },
        {
          image: new URL('@/assets/samples/vasc-3.jpg', import.meta.url).href,
          description: 'Venous Lake',
          details: 'Blue-purple papule',
          type: 'vasc'
        },
        {
          image: new URL('@/assets/samples/vasc-4.jpg', import.meta.url).href,
          description: 'Pyogenic Granuloma',
          details: 'Rapid vascular growth',
          type: 'vasc'
        }
      ],

      nonHumanSamples: [
        {
          image: new URL('@/assets/samples/pet-1.jpg', import.meta.url).href,
          description: 'Dog Fur',
          details: 'Canine animal fur with distinctive hair patterns and texture',
          type: 'animal'
        },
        {
          image: new URL('@/assets/samples/cats.jpg', import.meta.url).href,
          description: 'Cat Fur',
          details: 'Feline coat with striped markings and soft hair texture',
          type: 'animal'
        },
        {
          image: new URL('@/assets/samples/object-1.jpg', import.meta.url).href,
          description: 'Wooden Table Surface',
          details: 'Natural wood grain patterns and furniture texture',
          type: 'object'
        },
        {
          image: new URL('@/assets/samples/object-2.jpg', import.meta.url).href,
          description: 'Black Desktop Computer',
          details: 'Electronic device with smooth plastic/metal surface',
          type: 'text'
        }
      ]
    }
  },
  methods: {
    openModal(sample) {
      this.selectedSample = sample;
    },

    closeModal() {
      this.selectedSample = null;
    },

    useSample(sample) {
      // Store sample and navigate to analyzer
      localStorage.setItem('selectedSample', JSON.stringify(sample));
      this.$router.push('/check');
    },

    getRiskBadge(type) {
      const badges = {
        'mel': 'bg-red-500 text-white',
        'bcc': 'bg-orange-500 text-white',
        'akiec': 'bg-orange-500 text-white',
        'bkl': 'bg-yellow-500 text-white',
        'nv': 'bg-green-500 text-white',
        'df': 'bg-blue-500 text-white',
        'vasc': 'bg-blue-500 text-white'
      };
      return badges[type] || 'bg-gray-500 text-white';
    },

    getRiskClass(type) {
      const classes = {
        'mel': 'bg-red-100 text-red-700',
        'bcc': 'bg-orange-100 text-orange-700',
        'akiec': 'bg-orange-100 text-orange-700',
        'bkl': 'bg-yellow-100 text-yellow-700',
        'nv': 'bg-green-100 text-green-700',
        'df': 'bg-blue-100 text-blue-700',
        'vasc': 'bg-blue-100 text-blue-700'
      };
      return classes[type] || 'bg-gray-100 text-gray-700';
    },

    getRiskLevel(type) {
      const levels = {
        'mel': 'HIGH RISK',
        'bcc': 'MEDIUM RISK',
        'akiec': 'MEDIUM RISK',
        'bkl': 'LOW RISK',
        'nv': 'NORMAL',
        'df': 'LOW RISK',
        'vasc': 'LOW RISK'
      };
      return levels[type] || 'UNKNOWN';
    }
  }
}
</script>