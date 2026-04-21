import React from "react";

const StatsCard = ({ title, value, color, icon }) => {
  return (
    <div className="col-md-3">
      <div
        className="card-modern text-white p-3"
        style={{ background: color }}
      >
        <div className="d-flex justify-content-between">
          <h6>{title}</h6>
          {icon}
        </div>
        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default StatsCard;