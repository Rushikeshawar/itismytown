import React from "react";
import businessOwnerIcon from "../asses/business_owner_icon.png";
import shopperIcon from "../asses/shopper_icon.png";
import senderIcon from "../asses/sender_icon.png";
import transporterIcon from "../asses/transporter_icon.png";
import courierIcon from "../asses/courier_icon.png";

const roleIcons = {
  "Business Owner": businessOwnerIcon,
  "Shopper": shopperIcon,
  "Sender": senderIcon,
  "Transporter": transporterIcon,
  "Courier": courierIcon,
};

function RoleCard({ role, selected, onClick }) {
  const icon = roleIcons[role];

  return (
    <div
      onClick={() => onClick(role)}
      className={`
        cursor-pointer rounded-2xl bg-white transition-all duration-200
        flex flex-col items-center justify-center gap-2.5
        p-4 sm:p-5
        w-full
        sm:w-[160px] md:w-[185px] lg:w-[211px]
        h-[140px] sm:h-[160px] lg:h-[182px]
        ${selected
          ? "outline outline-2 outline-green-900"
          : "outline outline-2 outline-neutral-100"
        }
      `}
      style={{ boxShadow: "0px 5px 45px 0px rgba(183,183,183,0.12)" }}
    >
      {/* Icon Circle */}
      <div
        className={`
          rounded-full flex items-center justify-center overflow-hidden flex-shrink-0
          w-14 h-14 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px]
          transition-all duration-200
          ${selected ? "bg-green-900 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" : "bg-white"}
        `}
      >
        <img
          src={icon}
          alt={role}
          className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain transition-all duration-200"
          style={{ filter: selected ? "brightness(0) invert(1)" : "none" }}
        />
      </div>

      {/* Label */}
      <span
        className="text-black font-medium text-center leading-snug font-['Inter_Tight'] text-xs sm:text-[13px]"
      >
        {role}
      </span>
    </div>
  );
}
export default RoleCard;