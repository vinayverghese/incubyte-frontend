import { useState } from 'react'
import { add } from './calculator/StringCalculator'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleCalculate = () => {
    try {
      setError(null)
      const sum = add(input)
      setResult(sum)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setResult(null)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCalculate()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (!value || value.startsWith('//')) {
      setInput(value);
      return;
    }

    const filtered = value.replace(/[a-zA-Z]/g, '');
    setInput(filtered);
  };

  return (
    <div className="calculator-container">
      <h1>String Calculator</h1>
      <div className="calculator-box">
        <div className="input-section">
          <label htmlFor="numbers">Enter numbers (separated by commas or newlines):</label>
          <textarea
            id="numbers"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Example: 1,2,3&#10;Or: 1&#10;2&#10;3&#10;Or with custom delimiter: //;&#10;1;2;3"
            rows={5}
            className={error ? 'error' : ''}
          />
          {error && <div className="error-message">{error}</div>}
        </div>

        <div className="button-section">
          <button
            onClick={handleCalculate}
            disabled={!input.trim()}
            className="calculate-button"
          >
            Calculate
          </button>
          <button
            onClick={() => {
              setInput('');
              setResult(null);
              setError(null);
            }}
            disabled={!input.trim()}
            className="clear-button"
          >
            Clear
          </button>
        </div>

        {result !== null && (
          <div className="result-section">
            <h2>Result:</h2>
            <div className="result">{result}</div>
          </div>
        )}
      </div>

      <div className="instructions">
        <h3>Instructions:</h3>
        <ul>
          <li>Enter numbers separated by commas or newlines</li>
          <li>For custom delimiter, start with "//" followed by the delimiter and a newline</li>
          <li>Example: "//;\n1;2;3" will use semicolon as delimiter</li>
          <li>Negative numbers are not allowed</li>
        </ul>
      </div>
    </div>
  )
}

export default App
