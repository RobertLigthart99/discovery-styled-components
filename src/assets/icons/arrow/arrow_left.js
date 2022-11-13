import React from "react";

const ArrowLeft = ({ className, width, height }) => {
  return (
      <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_624_5029)">
          <path
            d="M22.6509 10.4141L22.6884 10.4224L6.62869 10.4224L11.6773 5.3132C11.9245 5.06377 12.0601 4.72586 12.0601 4.37121C12.0601 4.01656 11.9245 3.68102 11.6773 3.43099L10.8917 2.63736C10.6447 2.38792 10.3155 2.25 9.96449 2.25C9.61327 2.25 9.28391 2.38693 9.03688 2.63637L0.382639 11.3744C0.134639 11.6248 -0.000970382 11.9584 5.22758e-06 12.3132C-0.000970382 12.6701 0.134639 13.0038 0.382639 13.2538L9.03688 21.9927C9.28391 22.2419 9.61308 22.379 9.96449 22.379C10.3155 22.379 10.6447 22.2417 10.8917 21.9927L11.6773 21.199C11.9245 20.95 12.0601 20.6174 12.0601 20.2627C12.0601 19.9083 11.9245 19.5932 11.6773 19.344L6.57171 14.2063L22.6689 14.2063C23.3922 14.2063 24 13.5768 24 12.8468V11.7243C24 10.9943 23.3742 10.4141 22.6509 10.4141Z"
          />
        </g>
      </svg>
  );
};

export { ArrowLeft };
