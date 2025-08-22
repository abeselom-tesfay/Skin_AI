import { defineStore } from 'pinia'
import axios from 'axios'

export const useSkinStore = defineStore('skin', {
  state: () => ({
    image: null,
    prediction: null,
    loading: false,
    error: null,
    heatmap: null
  }),
  actions: {
    setImage(file) {
      this.image = file
      this.prediction = null
      this.error = null
      this.heatmap = null
    },
    async predict() {
      if (!this.image) return
      this.loading = true
      this.error = null

      try {
        const formData = new FormData()
        formData.append('file', this.image)

        const response = await axios.post('http://localhost:5000/predict', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })

        this.prediction = {
          label: response.data.class,
          confidence: (response.data.probability * 100).toFixed(2) + '%',
          probabilities: response.data.probabilities,
        }
        this.heatmap = response.data.heatmap
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
    }
  }
})
