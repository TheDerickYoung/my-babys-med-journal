import "../medicine-record-card/medicine-record-card.styles.scss";
import { EditRecordButton } from "../edit-record-button/edit-record-button.component";
import { DeleteRecordButton } from "../delete-record-button/delete-record-button.component";

import React, { useState } from "react";

export const MedicineRecordCard = ({
  record,
  deleteRecord,
  setRecordsList,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editedMedicineType, setEditedMedicineType] = useState(
    record.medicineType
  );
  const [editedTemperature, setEditedTemperature] = useState(
    record.temperature
  );
  const [editedNotes, setEditedNotes] = useState(record.notes);

  const handleEdit = () => {
    if (editMode) {
      // Save the edits
      const editedRecord = {
        ...record,
        medicineType: editedMedicineType,
        temperature: editedTemperature,
        notes: editedNotes,
      };
      // Call a function to update the record in the parent component or perform any other necessary actions
      setRecordsList((prevRecordsList) => {
        const updatedList = prevRecordsList.map((prevRecord) =>
          prevRecord.uuid === editedRecord.uuid ? editedRecord : prevRecord
        );
        return updatedList;
      });
    }
    // Toggle the edit mode
    setEditMode(!editMode);
  };

  return (
    <div className="medicine-record-card-container">
      <ul>
        <li key={record.uuid}>
          <span className="medicine-card-span date">{record.timestamp}</span>
          <span className="medicine-card-span">
            <strong>Medicine: </strong>
            {editMode ? (
              <select
                value={editedMedicineType}
                onChange={(e) => setEditedMedicineType(e.target.value)}
              >
                <option value="Motrin">Motrin</option>
                <option value="Tylenol">Tylenol</option>
              </select>
            ) : (
              record.medicineType
            )}
          </span>
          <span className="medicine-card-span">
            <strong>Temperature: </strong>
            {editMode ? (
              <input
                type="number"
                value={editedTemperature}
                onChange={(e) => setEditedTemperature(e.target.value)}
              />
            ) : (
              `${record.temperature}°F`
            )}
          </span>
          <span className="medicine-card-span">
            <strong>Notes: </strong>
            {editMode ? (
              <textarea
                value={editedNotes}
                onChange={(e) => setEditedNotes(e.target.value)}
              />
            ) : (
              record.notes
            )}
          </span>
          <div className="record-buttons">
            <EditRecordButton editMode={editMode} handleEdit={handleEdit} />
            <DeleteRecordButton
              deleteRecord={() => deleteRecord(record.uuid)}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MedicineRecordCard;
