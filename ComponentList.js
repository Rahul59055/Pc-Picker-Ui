import React from "react";
import ComponentItem from "./ComponentItem";

function ComponentList({ components, selections, onSelectionChange }) {
  return (
    <div className="component-list">
      {components.map((component) => (
        <ComponentItem
          key={component.id}
          component={component}
          selectedValue={selections[component.id] || ""}
          onSelectionChange={(value) => onSelectionChange(component.id, value)}
        />
      ))}
    </div>
  );
}

export default ComponentList;
