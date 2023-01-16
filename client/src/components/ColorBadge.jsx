import React from "react";

const ColorBadge = ({ colorType }) => {
  const checkColor = (colorType) => {
    switch (colorType) {
      case "primary":
        return "bg-teal-400";

      case "secondary":
        return "bg-secondary";

      case "info":
        return "bg-info";
      case "warning":
        return "bg-warning";
      default:
        break;
    }
  };

  return (
    <div
      className={`w-6 h-6 cursor-pointer rounded-full ${checkColor(colorType)}`}
    ></div>
  );
};

export default ColorBadge;
