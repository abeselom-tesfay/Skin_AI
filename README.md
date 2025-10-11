# Skin AI - AI-Powered Skin Lesion Detection

![Skin AI](https://img.shields.io/badge/Accuracy-96.2%25-brightgreen)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.13-orange)
![Vue.js](https://img.shields.io/badge/Vue.js-3.0-green)
![Python](https://img.shields.io/badge/Python-3.8-blue)

A production-ready web application for automated skin lesion classification using deep learning. Achieves **96.2% accuracy** with ensemble neural networks and provides instant medical guidance.

## Live Demo

- **Frontend**: [https://skin-lesion-detection.netlify.app](https://skin-lesion-detection.netlify.app)
- **Backend API**: Flask server with TensorFlow model

## Model Performance

| Metric | Score |
|--------|-------|
| **Overall Accuracy** | 96.2% |
| **Precision** | 95.8% |
| **Recall** | 94.7% |
| **AUC Score** | 0.982 |

**Ensemble Performance:**
- EfficientNet: 94.1%
- DenseNet: 93.8%
- **Ensemble**: 96.2%

## Architecture

### Dual-Stage Pipeline
1. **Stage 1: Lesion Segmentation**
   - U-Net with VGG16 encoder
   - Precise lesion boundary detection
   - Semantic segmentation for isolation

2. **Stage 2: Ensemble Classification**
   - EfficientNet-B0 + DenseNet-121
   - Transfer learning with fine-tuning
   - Weighted ensemble predictions

### Tech Stack
**Frontend:**
- Vue.js 3 with Composition API
- Tailwind CSS for responsive design
- Mobile-optimized components

**Backend:**
- Flask REST API
- TensorFlow 2.13 & Keras
- OpenCV for image processing

**Dataset:**
- ISIC 2018 Dataset
- 7-class classification
- Advanced data augmentation

## Features

- **Real-time Analysis**: Get results in seconds
- **Medical Guidance**: Color-coded risk assessment
- **Confidence Scoring**: Probabilistic predictions
- **Human Skin Validation**: Blocks non-skin images
- **Mobile Responsive**: Works on all devices
- **Completely Free**: No subscription required

## Classified Conditions

| Class | Full Name | Risk Level |
|-------|-----------|------------|
| MEL | Melanoma | 🚨 High Risk |
| BCC | Basal Cell Carcinoma | ⚠️ Medium Risk |
| AKIEC | Actinic Keratosis | ⚠️ Medium Risk |
| BKL | Benign Keratosis | 📝 Low Risk |
| NV | Melanocytic Nevi | ✅ Normal |
| DF | Dermatofibroma | 📝 Low Risk |
| VASC | Vascular Lesion | 📝 Low Risk |

## UI/UX Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop
- **Medical Professionalism:** Clean, trustworthy interface
- **Real-time Feedback:** Loading states and progress indicators
- **Accessibility:** Clear typography and color contrast
- **Interactive Elements:** Drag & drop, hover effects

## Technical Highlights

- **Class Imbalance Handling:** SMOTE + Class Weights
- **Data Augmentation:** Rotation, flipping, brightness, zoom
- **Model Ensemble:** Complementary feature extraction
- **Transfer Learning:** Pre-trained on ImageNet
- **Confidence Calibration:** Temperature scaling

## ⚠️ Medical Disclaimer

**Important:** This AI tool is for educational and preliminary screening purposes only. It is not a substitute for professional medical diagnosis. Always consult healthcare professionals for accurate diagnosis and treatment recommendations.

## License
MIT License - feel free to use this project for educational and research purposes.

## 👨‍💻 Developer
**Abeselom Tesfay Gebremariam**  
Machine Learning Engineer & Full-Stack Developer  
[LinkedIn](https://www.linkedin.com/in/abeselom-tesfay/)