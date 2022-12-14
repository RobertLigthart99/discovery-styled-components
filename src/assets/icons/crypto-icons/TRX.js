import React from "react";

export const TRX = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="#FF0013" />
      <path
        d="M19.498 8.91855C18.8235 8.44677 18.1021 7.9438 17.3964 7.44472C17.3808 7.43302 17.3652 7.42133 17.3457 7.40963C17.2677 7.35114 17.1781 7.28876 17.0689 7.25367L17.0611 7.24977C15.174 6.79358 13.2556 6.3257 11.3997 5.87341C9.71533 5.46401 8.03485 5.05462 6.35047 4.64522C6.30758 4.63352 6.2647 4.62183 6.21791 4.61013C6.06585 4.56724 5.89039 4.52045 5.70324 4.54384C5.64865 4.55164 5.60186 4.57114 5.55897 4.59843L5.51218 4.63742C5.4381 4.7076 5.39911 4.79728 5.37962 4.84797L5.36792 4.87916V5.05852L5.37572 5.08581C6.44015 8.06856 7.53188 11.0942 8.58462 14.0224C9.39561 16.276 10.2378 18.6115 11.0605 20.9042C11.1112 21.0601 11.2554 21.1615 11.4348 21.1771H11.4738C11.6415 21.1771 11.7896 21.0952 11.8637 20.9626L14.9517 16.4593C15.7042 15.3636 16.4567 14.2641 17.2093 13.1685C17.5173 12.7201 17.8253 12.2678 18.1333 11.8194C18.6402 11.0786 19.1627 10.3144 19.6812 9.56969L19.7085 9.5307V9.48391C19.7202 9.34744 19.7241 9.06671 19.498 8.91855ZM15.8797 10.56C15.1545 10.9382 14.4137 11.3281 13.6689 11.7142C14.1017 11.2502 14.5384 10.7823 14.9712 10.3183C15.5132 9.73345 16.0785 9.1291 16.6322 8.53645L16.6439 8.52475C16.6907 8.46237 16.7492 8.40388 16.8116 8.3415C16.8544 8.29861 16.9012 8.25572 16.9441 8.20503C17.2327 8.40388 17.5251 8.60663 17.8058 8.80548C18.0086 8.94974 18.2152 9.09401 18.4258 9.23827C17.568 9.67496 16.7102 10.1234 15.8797 10.56ZM14.016 10.3729C13.4584 10.9772 12.8813 11.5972 12.3082 12.2093C11.197 10.8603 10.0623 9.49171 8.96282 8.16994C8.46375 7.56949 7.96077 6.96514 7.4617 6.36469L7.4578 6.36079C7.34473 6.23212 7.23555 6.09176 7.12638 5.95919C7.0562 5.86951 6.98212 5.78373 6.90803 5.69406C7.36032 5.81103 7.81651 5.9202 8.2649 6.02547C8.6587 6.11905 9.06809 6.21653 9.46969 6.3179C11.7311 6.86766 13.9965 7.41743 16.2579 7.96719C15.5054 8.77039 14.749 9.58528 14.016 10.3729ZM12.0547 17.9721C12.0976 17.5627 12.1444 17.1416 12.1834 16.7283C12.2185 16.3969 12.2536 16.0577 12.2887 15.734C12.3433 15.2155 12.4018 14.6774 12.4485 14.151L12.4602 14.0575C12.4992 13.7222 12.5382 13.3751 12.5616 13.0281C12.6045 13.0047 12.6513 12.9813 12.702 12.9618C12.7605 12.9345 12.819 12.9112 12.8774 12.8761C13.7781 12.4043 14.6788 11.9325 15.5834 11.4646C16.484 10.9967 17.4081 10.5133 18.3244 10.0337C17.49 11.2424 16.6517 12.4628 15.8407 13.652C15.1428 14.6696 14.4254 15.7185 13.7118 16.7517C13.4311 17.165 13.1387 17.5861 12.8618 17.9916C12.5499 18.4439 12.2302 18.9079 11.9183 19.3718C11.9573 18.904 12.0041 18.4322 12.0547 17.9721ZM6.61951 6.61423C6.56882 6.47386 6.51423 6.3296 6.46744 6.19313C7.52018 7.46422 8.58072 8.74309 9.61396 9.98299C10.1481 10.6263 10.6823 11.2658 11.2165 11.913C11.3217 12.0339 11.427 12.1625 11.5284 12.2873C11.6609 12.4472 11.7935 12.6148 11.9378 12.7747C11.891 13.1763 11.852 13.5818 11.8091 13.9717C11.7818 14.2446 11.7545 14.5176 11.7233 14.7944V14.7983C11.7116 14.9737 11.6882 15.1492 11.6687 15.3208C11.6415 15.5586 11.5791 16.0967 11.5791 16.0967L11.5752 16.124C11.505 16.9116 11.4192 17.707 11.3373 18.479C11.3022 18.7987 11.271 19.1262 11.236 19.4537C11.2165 19.3952 11.1931 19.3367 11.1736 19.2822C11.1151 19.1262 11.0566 18.9624 11.002 18.8026L10.5848 17.6446C9.26305 13.9678 7.94128 10.2949 6.61951 6.61423Z"
        fill="white"
      />
    </svg>
  );
};
