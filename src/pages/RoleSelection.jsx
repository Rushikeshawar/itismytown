import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import RoleCard from "../components/RoleCard";

const roles = ["Business Owner", "Shopper", "Sender", "Transporter", "Courier"];

function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedRole) return;
    if (selectedRole === "Courier") {
      navigate("/courier-register");
    } else {
      alert(`You selected: ${selectedRole}. Navigation for this role is not configured yet.`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main
        className="flex-1 bg-gray-50 flex flex-col justify-start items-center"
        style={{ padding: "clamp(32px, 6vw, 100px) clamp(16px, 5vw, 144px)", gap: "36px" }}
      >
        {/* Title */}
        <div className="w-full flex flex-col items-center gap-2">
          <h1
            className="text-slate-800 font-semibold text-center"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "clamp(20px, 3vw, 30px)" }}
          >
            Select Your Role
          </h1>
        </div>

        {/* Role Cards — single row, square cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {roles.map((role) => (
            <RoleCard
              key={role}
              role={role}
              selected={selectedRole === role}
              onClick={setSelectedRole}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-3 w-full" style={{ maxWidth: 400 }}>
          <button
            onClick={() => navigate("/")}
            className="flex-1 flex items-center justify-center gap-2 rounded-lg hover:opacity-90 transition-opacity"
            style={{
              padding: "12px 24px",
              outline: "1px solid #285A8C",
              color: "#285A8C",
              background: "#ffffff",
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "clamp(14px, 1.5vw, 16px)",
              border: "none",
              cursor: "pointer",
            }}
          >
            Home
          </button>
          <button
            onClick={handleContinue}
            disabled={!selectedRole}
            className="flex-1 flex items-center justify-center gap-2 rounded-lg text-white transition-opacity"
            style={{
              padding: "12px 24px",
              background: selectedRole ? "#285A8C" : "#9ca3af",
              border: "none",
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "clamp(14px, 1.5vw, 16px)",
              cursor: selectedRole ? "pointer" : "not-allowed",
              opacity: selectedRole ? 1 : 0.6,
            }}
          >
            Continue
          </button>
        </div>
      </main>
    </div>
  );
}

export default RoleSelection;