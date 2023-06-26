import React, { useState } from "react";
import { MedicineForm } from "../src/components/medicine-form/medicine-form.component";
import { MedicineRecordsList } from "../src/components/medicine-records-list/medicine-records-list.component";
import "./App.css";

function App() {
  const [recordsList, setRecordsList] = useState([]);

  const deleteRecord = (uuid) => {
    const updatedRecords = recordsList.filter((record) => record.uuid !== uuid);
    setRecordsList(updatedRecords);
  };

  return (
    <div className="App">
      <h1>My Baby's Medicine Journal</h1>
      <MedicineForm
        recordsList={recordsList}
        setRecordsList={setRecordsList}
        deleteRecord={deleteRecord}
      />

      <MedicineRecordsList
        recordsList={recordsList}
        deleteRecord={deleteRecord}
        setRecordsList={setRecordsList}
      />
    </div>
  );
}

export default App;
