import React, { useState } from "react";

import { MedicineForm } from "../src/components/medicine-form/medicine-form.component";
import { MedicineRecordsList } from "../src/components/medicine-records-list/medicine-records-list.component";
import { Navbar } from "../src/components/navbar/navbar.component";

//import logo from "./assets/baby-journal-logo.png";

import "./App.css";

function App() {
  const [recordsList, setRecordsList] = useState([]);

  const deleteRecord = (uuid) => {
    const updatedRecords = recordsList.filter((record) => record.uuid !== uuid);
    setRecordsList(updatedRecords);
  };

  return (
    <div className="App">
      <Navbar />
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
