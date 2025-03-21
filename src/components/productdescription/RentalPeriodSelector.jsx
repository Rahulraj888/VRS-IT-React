// src/components/RentalPeriodSelector.jsx
import React from 'react';

export default function RentalPeriodSelector({ selectedPeriod, onPeriodChange }) {
  const options = ["1 Week", "15 Days", "1 Month", "3 Months"];
  return (
    <div className="rental-period">
      <h5>
        Rental Period: <span id="selected-period">{selectedPeriod}</span>
      </h5>
      <div className="btn-group" role="group">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`btn btn-outline-primary rental-option ${selectedPeriod === option ? 'active' : ''}`}
            onClick={() => onPeriodChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
