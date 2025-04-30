import React, { useState } from "react";
import ComponentList from "./ComponentList";
import { useNavigate } from "react-router-dom";
const initialComponents = [
  {
    id: 1,
    name: "CPU",
    options: [
      "Intel Core i3-10100",
      "Intel Core i5-10400",
      "Intel Core i7-10700K",
      "Intel Core i9-10900K",
      "AMD Ryzen 3 3100",
      "AMD Ryzen 5 3600",
      "AMD Ryzen 7 3700X",
      "AMD Ryzen 9 3900X",
      "AMD Ryzen 9 5950X",
    ],
    image: "/images/cpu.jpg",
  },
  {
    id: 2,
    name: "GPU",
    options: [
      "NVIDIA GTX 1660 Super",
      "NVIDIA RTX 3050",
      "NVIDIA RTX 3060",
      "NVIDIA RTX 3070",
      "NVIDIA RTX 3080",
      "AMD Radeon RX 5600 XT",
      "AMD Radeon RX 5700",
      "AMD Radeon RX 6800",
      "AMD Radeon RX 6900 XT",
    ],
    image: "/images/gpu.jpg",
  },
  {
    id: 3,
    name: "RAM",
    options: [
      "8GB DDR4 2666MHz",
      "16GB DDR4 3200MHz",
      "32GB DDR4 3600MHz",
      "64GB DDR4 3200MHz",
      "128GB DDR4",
    ],
    image: "/images/ram.jpg",
  },
  {
    id: 4,
    name: "Storage",
    options: [
      "256GB SSD",
      "512GB SSD",
      "1TB SSD",
      "2TB SSD",
      "256GB NVMe SSD",
      "512GB NVMe SSD",
      "1TB NVMe SSD",
      "2TB NVMe SSD",
      "1TB HDD",
      "2TB HDD",
      "4TB HDD",
    ],
    image: "/images/storage.jpg",
  },
  {
    id: 5,
    name: "Motherboard",
    options: [
      "ASUS Prime",
      "ASUS ROG Strix",
      "MSI MPG Z490",
      "MSI MAG B550",
      "Gigabyte Aorus",
      "Gigabyte Ultra Durable",
      "ASRock B550M",
      "ASRock X570 Phantom Gaming",
    ],
    image: "/images/motherboard.jpg",
  },
  {
    id: 6,
    name: "Power Supply",
    options: [
      "500W Bronze",
      "600W Bronze",
      "650W Silver",
      "750W Gold",
      "850W Platinum",
      "1000W Platinum",
    ],
    image: "/images/psu.jpg",
  },
  {
    id: 7,
    name: "Case",
    options: [
      "Mid Tower ATX",
      "Full Tower ATX",
      "Mini Tower",
      "Cube Case",
      "Open Air Case",
    ],
    image: "/images/case.jpg",
  },
  {
    id: 8,
    name: "Cooling",
    options: [
      "Air Cooler - Low",
      "Air Cooler - High",
      "Liquid Cooler - 240mm",
      "Liquid Cooler - 360mm",
      "Custom Loop",
    ],
    image: "/images/cooling.jpg",
  },
];

export default function PCPicker() {
  const [selections, setSelections] = useState({});
  const navigate = useNavigate();

  const handleChange = (id, val) => setSelections((s) => ({ ...s, [id]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const all = initialComponents.every((c) => selections[c.id]);
    if (!all) {
      alert("Select every component!");
      return;
    }
    navigate("/summary", {
      state: { components: initialComponents, selections },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="picker-form">
      <ComponentList
        components={initialComponents}
        selections={selections}
        onSelectionChange={handleChange}
      />
      <button className="submit-button" type="submit">
        View Summary
      </button>
    </form>
  );
}
