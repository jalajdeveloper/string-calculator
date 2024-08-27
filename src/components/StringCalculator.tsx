import React, { useState } from 'react';
import { add } from '../utils/stringCalculator';

const StringCalculator: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<number | string | null>(null);

    const handleCalculate = () => {
        try {
            const calculationResult = add(input);
            setResult(calculationResult);
        } catch (error: any) {
            setResult(error.message);
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
            />
            <button onClick={handleCalculate}>Calculate</button>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
};

export default StringCalculator;
