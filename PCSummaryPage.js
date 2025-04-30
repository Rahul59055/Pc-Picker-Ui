import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PCSummaryPage() {
  const { state } = useLocation();
  const nav = useNavigate();

  if (!state?.components || !state?.selections) {
    nav("/builder", { replace: true });
    return null;
  }

  const { components, selections } = state;

  return (
    <div className="summary-container">
      <h2>Your PC Configuration</h2>
      <div className="summary-card">
        {components.map((c) => (
          <div className="summary-item" key={c.id}>
            <img src={c.image} alt={c.name} className="summary-image" />
            <div className="summary-details">
              <h3>{c.name}</h3>
              <p>{selections[c.id]}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={() => nav("/builder")}>
        Edit Configuration
      </button>
    </div>
  );
}
