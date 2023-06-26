import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./medicine-form.styles.scss";

export const MedicineForm = ({ recordsList, setRecordsList, deleteRecord }) => {
  const [recordMedicineType, setRecordMedicineType] = useState("");
  const [recordTemperature, setRecordTemperature] = useState(0);
  const [recordNotes, setRecordNotes] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (recordMedicineType === "Motrin" || recordMedicineType === "Tylenol") {
      const newRecord = {
        uuid: uuidv4(),
        medicineType: recordMedicineType,
        temperature: recordTemperature,
        notes: recordNotes,
        timestamp: new Date().toLocaleString(),
      };

      setRecordsList([...recordsList, newRecord]);

      setRecordMedicineType("");
      setRecordTemperature(0);
      setRecordNotes("");
    } else {
      alert("Invalid medicine selection");
    }
  };

  return (
    <div className="new-record-form-container">
      <form action="" className="new-record-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="medicines">Medicine Given: </label>
          <select
            name="medicines"
            id="medicines"
            value={recordMedicineType}
            onChange={(e) => setRecordMedicineType(e.target.value)}
          >
            <option value="--">--</option>
            <option value="Motrin">Motrin</option>
            <option value="Tylenol">Tylenol</option>
          </select>
          <label htmlFor="temperature" className="temp-label">
            Temperature:{" "}
          </label>
          <input
            type="number"
            step="0.1"
            min="92.0"
            max="112.0"
            name="temperature"
            placeholder="Enter temperature"
            value={recordTemperature}
            onChange={(e) => setRecordTemperature(parseFloat(e.target.value))}
          />
        </div>

        <textarea
          className="record-notes-input"
          name="notes"
          placeholder="Enter any extra notes..."
          value={recordNotes}
          onChange={(e) => setRecordNotes(e.target.value)}
        ></textarea>
        <input type="submit" value="Add Record" />
      </form>
    </div>
  );
};

export default MedicineForm;
