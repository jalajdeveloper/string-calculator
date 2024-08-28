import React, { useState } from 'react';
import { add } from '../utils/stringCalculator';

const StringCalculator: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<number | string | null>(null);

    const handleCalculate = () => {
        try {
            const calculationResult = add(input);
            setResult(calculationResult);
        } catch (error) {
            // Type assertion for error as Error
            if (error instanceof Error) {
                setResult(error.message);
            } else {
                setResult('An unknown error occurred');
            }
        }
    };

    return (
        <div>
            <h1>String Calculator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter numbers"
                style={{ padding: '8px', width: '200px', marginBottom: '10px' }}
            />
            <button onClick={handleCalculate} style={{ padding: '8px 16px', marginLeft: '10px' }}>
                Calculate
            </button>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
};

export default StringCalculator;
