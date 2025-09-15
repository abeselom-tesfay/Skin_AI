from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for Vue.js frontend

# Load model
model = tf.keras.models.load_model('./models/skin_lesion_model_final.keras')
class_names = ['akiec', 'bcc', 'bkl', 'df', 'mel', 'nv', 'vasc']  # Replace with your actual class names

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    
    # Preprocess image
    image = Image.open(io.BytesIO(file.read())).convert('RGB')
    image = image.resize((224, 224))
    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0)
    
    # Predict
    predictions = model.predict(image_array)
    predicted_class = np.argmax(predictions[0])
    confidence = float(np.max(predictions[0]))
    
    return jsonify({
        'prediction': class_names[predicted_class],
        'confidence': confidence,
        'all_predictions': predictions[0].tolist()
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)