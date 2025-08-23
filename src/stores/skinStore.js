import { defineStore } from 'pinia'
import axios from 'axios'

export const useSkinStore = defineStore('skin', {
  state: () => ({
    image: null,
    prediction: null,
    loading: false,
    error: null,
    heatmap: null,
    recommendations: null
  }),
  actions: {
    setImage(file) {
      this.image = file
      this.prediction = null
      this.error = null
      this.heatmap = null
      this.recommendations = null
    },
    async predict() {
      if (!this.image) return
      this.loading = true
      this.error = null

      try {
        const formData = new FormData()
        formData.append('file', this.image)

        const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })

        this.prediction = {
          label: response.data.class,
          confidence: (response.data.probability * 100).toFixed(2) + '%',
          probabilities: response.data.probabilities,
        }
        this.heatmap = response.data.heatmap

        // Map treatment recommendations
        const treatmentMap = {
          MEL: 'Consult a dermatologist immediately; possible melanoma.',
          NV: 'Monitor the mole; usually benign.',
          BCC: 'Schedule a dermatologist visit; basal cell carcinoma.',
          AKIEC: 'Apply recommended topical treatments and follow up.',
          BKL: 'Usually benign; regular skin check advised.',
          DF: 'Monitor growth; dermatology consult if necessary.',
          VASC: 'Usually benign; observe for changes.'
        }

        this.recommendations = treatmentMap[this.prediction.label] || 'No recommendation available.'

      } catch (err) {
        this.error = 'Prediction failed. Please try again.'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    clear() {
      this.image = null
      this.prediction = null
      this.heatmap = null
      this.error = null
      this.recommendations = null
    }
  }
})
