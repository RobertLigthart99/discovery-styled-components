import React from "react";

const ArrowDown = ({ className, width, height }) => {
  return (
      <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_624_5029)">
          <path d="M9.8025 1.6354L9.81053 1.59904L9.81053 17.1864L4.85165 12.2863C4.60955 12.0464 4.28158 11.9147 3.93736 11.9147C3.59314 11.9147 3.26747 12.0464 3.02479 12.2863L2.2545 13.0488C2.0124 13.2885 1.87854 13.608 1.87854 13.9487C1.87854 14.2896 2.01145 14.6093 2.25355 14.849L10.7346 23.2487C10.9776 23.4895 11.3014 23.6211 11.6458 23.6201C11.9921 23.6211 12.3161 23.4895 12.5587 23.2487L21.0405 14.849C21.2824 14.6093 21.4155 14.2898 21.4155 13.9487C21.4155 13.608 21.2823 13.2885 21.0405 13.0488L20.2702 12.2863C20.0285 12.0464 19.7057 11.9147 19.3615 11.9147C19.0175 11.9147 18.7117 12.0464 18.4698 12.2863L13.4832 17.2417L13.4832 1.61798C13.4832 0.915937 12.8722 0.326007 12.1637 0.326007L11.0742 0.326007C10.3657 0.326007 9.8025 0.933361 9.8025 1.6354Z"
        />
        </g>
      </svg>
  );
};

export { ArrowDown };