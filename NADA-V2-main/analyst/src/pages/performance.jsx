import React, { useState } from 'react';
import axios from 'axios';

const PerformanceAnalyzer = () => {
    const [confidenceLevel, setConfidenceLevel] = useState(10);
    const [results, setResults] = useState(null);

    const analyzePerformance = async () => {
        try {
            const response = await axios.post('http://localhost:5000/analyze', { confidenceLevel });
            setResults(response.data.results);
        } catch (error) {
            console.error('Error analyzing performance:', error);
        }
    };

    return (
        <div>
            <h1>Performance Analyzer</h1>
            <input
                type="number"
                value={confidenceLevel}
                onChange={(e) => setConfidenceLevel(e.target.value)}
                placeholder="Confidence Level"
            />
            <button onClick={analyzePerformance}>Analyze</button>

            {results && (
                <div>
                    <h2>Results</h2>
                    {Object.entries(results).map(([swimmer, metrics]) => (
                        <div key={swimmer}>
                            <h3>{swimmer}</h3>
                            <p>Risk Score: {metrics['Risk Score (%)']}%</p>
                            <p>Flagged Parameters: {metrics['Flagged Parameters'].join(', ') || 'None'}</p>
                            <h4>Performance Improvement:</h4>
                            <ul>
                                {Object.entries(metrics['Performance Improvement (%)']).map(([param, improvement]) => (
                                    <li key={param}>{param}: {improvement}%</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PerformanceAnalyzer;
