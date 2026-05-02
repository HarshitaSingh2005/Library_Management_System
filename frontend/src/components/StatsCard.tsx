import React from "react";

type Props = {
  title: string;
  value: number | string;
  color: string;
  icon: React.ReactNode;
};

const StatsCard: React.FC<Props> = ({ title, value, color, icon }) => {
  return (
    <div className="col-md-3 mb-4">
      <div
        className="p-4 rounded shadow-sm text-white d-flex align-items-center justify-content-between"
        style={{
          backgroundColor: color,
          transition: "0.3s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-5px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        <div>
          <h6 className="mb-1">{title}</h6>
          <h3 className="fw-bold">{value}</h3>
        </div>

        <div style={{ fontSize: "28px", opacity: 0.8 }}>{icon}</div>
      </div>
    </div>
  );
};

export default StatsCard;