<template>
  <section class="px-4 md:px-20 py-16 bg-gray-50">
    <h1 class="text-4xl mt-10 font-bold text-center mb-10 text-gray-900">Frequently Asked Questions</h1>

    <div class="max-w-4xl mx-auto space-y-4">
      <div 
        v-for="(item, index) in faqs" 
        :key="index" 
        class="bg-white rounded-lg shadow p-4 cursor-pointer"
        @click="toggle(index)"
      >
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-medium text-gray-800">{{ item.question }}</h2>
          <span class="text-gray-500">
            <svg 
              v-if="activeIndex === index" 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6 transform rotate-180 transition-transform duration-300" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <svg 
              v-else 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6 transition-transform duration-300" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        <p v-if="activeIndex === index" class="mt-2 text-gray-600">{{ item.answer }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: 'What AI technology powers Skin AI?',
    answer: 'Skin AI uses an ensemble deep learning architecture combining EfficientNet-B0 and DenseNet-121 convolutional neural networks, achieving 96.2% accuracy on the ISIC 2018 dataset with dual-stage segmentation and classification pipeline.'
  },
  {
    question: 'How does the image processing work?',
    answer: 'Images undergo U-Net segmentation for lesion isolation, followed by feature extraction and ensemble classification. The system processes RGB/HSV color spaces and uses advanced data augmentation techniques for robust performance.'
  },
  {
    question: 'What is the technical accuracy of the model?',
    answer: 'Our ensemble model achieves 96.2% overall accuracy, 95.8% precision, 94.7% recall, and 0.982 AUC score, outperforming individual models (EfficientNet: 94.1%, DenseNet: 93.8%).'
  },
  {
    question: 'What dataset was used for training?',
    answer: 'The model was trained on the ISIC 2018 dataset containing 10,015 dermatoscopic images across 7 disease classes (akiec, bcc, bkl, df, mel, nv, vasc) with class balancing and heavy data augmentation.'
  },
  {
    question: 'Is this a medical diagnostic tool?',
    answer: 'No, Skin AI is an educational and research tool for academic purposes. It demonstrates AI capabilities in medical image analysis but should not replace professional medical diagnosis. Always consult healthcare professionals.'
  },
  {
    question: 'What technical stack is used?',
    answer: 'Backend: Flask API with TensorFlow 2.x. Frontend: Vue.js 3 with Tailwind CSS. Image Processing: OpenCV, Pillow. Machine Learning: Keras, scikit-learn, NumPy for numerical computing.'
  },
  {
    question: 'How are predictions made in real-time?',
    answer: 'The Flask backend processes uploaded images through the trained ensemble model, returning confidence scores and probabilities for all 7 classes within seconds via RESTful API endpoints.'
  },
  {
    question: 'Is the source code available?',
    answer: 'Yes, both the machine learning model and web application are open source. You can explore the code on GitHub to understand the implementation details and architecture.'
  },
  {
    question: 'What medical validation does Skin AI have?',
    answer: 'The project is clinically reviewed and supervised by dermatology professionals, ensuring the AI model addresses clinically relevant features and maintains medical accuracy in its predictions.'
  },
  {
    question: 'Can I integrate Skin AI into other applications?',
    answer: 'Yes, the Flask API provides RESTful endpoints for easy integration. The modular architecture allows for deployment in various healthcare and research applications.'
  }
]

const activeIndex = ref(null)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

