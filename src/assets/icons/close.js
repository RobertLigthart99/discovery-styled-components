import React from "react";

export const Close = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.4593 1.54077C12.0521 1.13355 11.3919 1.13355 10.9847 1.54077L7.00006 5.52538L3.01545 1.54077C2.60823 1.13355 1.94799 1.13355 1.54077 1.54077C1.13355 1.94799 1.13355 2.60823 1.54077 3.01545L5.52538 7.00006L1.54077 10.9847C1.13355 11.3919 1.13355 12.0521 1.54077 12.4593C1.94799 12.8666 2.60823 12.8666 3.01545 12.4593L7.00006 8.47474L10.9847 12.4593C11.3919 12.8666 12.0521 12.8666 12.4593 12.4593C12.8666 12.0521 12.8666 11.3919 12.4593 10.9847L8.47474 7.00006L12.4593 3.01545C12.8666 2.60823 12.8666 1.94799 12.4593 1.54077Z" />
    </svg>
  );
};
