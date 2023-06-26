import React from "react";
import { MedicineRecordCard } from "../medicine-record-card/medicine-record-card.component";

import "./medicine-records-list.styles.scss";

export const MedicineRecordsList = ({
  recordsList,
  deleteRecord,
  setRecordsList,
}) => {
  return (
    <div className="medicine-records-list-container">
      <ul>
        {recordsList.map((record) => (
          <MedicineRecordCard
            key={record.uuid}
            record={record}
            deleteRecord={deleteRecord}
            setRecordsList={setRecordsList} // Pass the setRecordsList function as prop
          />
        ))}
      </ul>
    </div>
  );
};

export default MedicineRecordsList;
