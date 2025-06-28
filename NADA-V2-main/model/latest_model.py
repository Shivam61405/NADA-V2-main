import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os
from flask import Flask, jsonify, render_template
import io
import base64
from flask_cors import CORS
# Create the Flask app
app = Flask(__name__)
# Enable CORS for all routes
CORS(app)

# Create synthetic dataset
data = {
    'Swimmer': ['Swimmer A'] * 5 + ['Swimmer B'] * 5 + ['Swimmer C'] * 5,
    'Date': pd.date_range(start='2024-01-01', periods=5).tolist() * 3,
    'Speed (m/s)': [10, 12, 15, 16, 18, 8, 9, 11, 12, 13, 20, 22, 24, 25, 27],
    'Endurance (%)': [70, 72, 78, 80, 85, 60, 61, 64, 65, 66, 80, 83, 85, 87, 90],
    'Recovery (s)': [50, 48, 47, 45, 43, 60, 58, 55, 54, 53, 40, 38, 37, 35, 33],
    'Power (Watts)': [100, 110, 120, 125, 130, 80, 85, 90, 92, 95, 140, 145, 150, 155, 160],
    'Haemoglobin (g/dL)': [13.5, 14.0, 14.5, 15.0, 15.5, 12.5, 13.0, 13.2, 13.5, 13.8, 16.0, 16.2, 16.5, 16.8, 17.0],
    'Testosterone (ng/dL)': [400, 420, 440, 460, 480, 300, 320, 340, 360, 380, 500, 520, 540, 560, 580],
    'Blood Pressure (mmHg)': [120, 122, 125, 128, 130, 115, 118, 120, 123, 125, 130, 132, 135, 138, 140]
}
dataSet = pd.DataFrame(data)

# Function to calculate performance improvement and doping risk
def get_performance_and_risk_scores(dataSet, confidence_level):
    swimmers = dataSet['Swimmer'].unique()
    results = {}

    for swimmer in swimmers:
        athlete_data = dataSet[dataSet['Swimmer'] == swimmer]
        athlete_parameters = athlete_data.drop(['Swimmer', 'Date'], axis=1)

        # Calculate Performance Improvement
        baseline_performance = athlete_parameters.mean()
        latest_performance = athlete_parameters.iloc[-1]  # Most recent data point
        performance_improvement = ((latest_performance - baseline_performance) / baseline_performance) * 100

        # Calculate Risk Score
        parameters = athlete_parameters.columns
        flagged_parameters = []

        for parameter in parameters:
            avg = athlete_parameters[parameter].mean()
            max_val = athlete_parameters[parameter].max()
            delta = max_val - avg

            if avg != 0:
                percentage_delta = (delta / avg) * 100
            else:
                percentage_delta = 0

            if percentage_delta >= confidence_level:
                flagged_parameters.append(parameter)

        # Calculate risk score as a percentage of flagged parameters
        total_parameters = len(parameters)
        risk_score = (len(flagged_parameters) / total_parameters) * 100

        # Add performance improvement and risk score to results
        results[swimmer] = {
            'Risk Score (%)': round(risk_score, 2),
            'Flagged Parameters': flagged_parameters,
            'Performance Improvement (%)': performance_improvement.round(2).to_dict()
        }

    return results

# Function to visualize trends and return as an image
def generate_performance_plot(dataSet, swimmer):
    athlete_data = dataSet[dataSet['Swimmer'] == swimmer]
    dates = athlete_data['Date']
    parameters = athlete_data.drop(['Swimmer', 'Date'], axis=1).columns

    plt.figure(figsize=(12, 6))
    for parameter in parameters:
        plt.plot(dates, athlete_data[parameter], label=parameter)

    plt.title(f"Performance Trends for {swimmer}")
    plt.xlabel("Date")
    plt.ylabel("Values")
    plt.legend()
    plt.grid()

    # Save the plot to a BytesIO object and encode it to base64
    img_buf = io.BytesIO()
    plt.savefig(img_buf, format='png')
    img_buf.seek(0)
    img_base64 = base64.b64encode(img_buf.read()).decode('utf-8')
    plt.close()

    return img_base64

# Route to calculate and display results
@app.route('/analyze', methods=['GET','POST'])

def analyze():
    # Set confidence level
    confidence_level = 10
    print("smdjads")
    # Calculate results
    results = get_performance_and_risk_scores(dataSet, confidence_level)

    return jsonify(results)

# Route to display a performance plot for a specific swimmer
@app.route('/performance/<swimmer>', methods=['GET'])
def performance_plot(swimmer):
    # Get data for the specified swimmer
    athlete_data = dataSet[dataSet['Swimmer'] == swimmer]
    dates = athlete_data['Date'].dt.strftime('%Y-%m-%d').tolist()
    performance_data = athlete_data.drop(['Swimmer', 'Date'], axis=1).to_dict(orient='list')

    # Return data as JSON
    return jsonify({
        'swimmer': swimmer,
        'dates': dates,
        'performance_data': performance_data
    })


# Start the Flask app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
