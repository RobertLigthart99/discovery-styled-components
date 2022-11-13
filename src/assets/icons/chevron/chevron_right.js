import React from "react";

const ChevronRight = ({ className, width, height }) => {
  return (
    <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.0476 11.4715L8.88848 1.41968C8.65351 1.18701 8.33985 1.05882 8.0054 1.05882C7.67095 1.05882 7.35729 1.18701 7.12232 1.41968L6.37417 2.15976C5.88734 2.64201 5.88734 3.42579 6.37417 3.9073L14.905 12.3483L6.3647 20.7986C6.12973 21.0312 6 21.3414 6 21.6722C6 22.0033 6.12973 22.3134 6.3647 22.5463L7.11285 23.2862C7.34801 23.5189 7.66148 23.6471 7.99593 23.6471C8.33038 23.6471 8.64404 23.5189 8.87901 23.2862L19.0476 13.2252C19.2831 12.9917 19.4125 12.6801 19.4118 12.3488C19.4125 12.0162 19.2831 11.7048 19.0476 11.4715Z"
      />
    </svg>
  );
};

export { ChevronRight }
