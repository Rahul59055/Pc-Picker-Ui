import React from "react";

function ComponentItem({ component, selectedValue, onSelectionChange }) {
  return (
    <div className="component-item">
      <img
        src={component.image}
        alt={component.name}
        className="component-image"
      />
      <div className="component-info">
        <label>{component.name}</label>
        <select
          value={selectedValue}
          onChange={(e) => onSelectionChange(e.target.value)}
        >
          <option value="">Select {component.name}</option>
          {component.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ComponentItem;
