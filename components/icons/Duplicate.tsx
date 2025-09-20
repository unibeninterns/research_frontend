const Duplicate = ({ size = 12, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      {...props}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.84961 4.15039V10.0996H1.90039V4.15039H7.84961Z"
        fill="#800080"
        stroke="#800080"
        stroke-width="0.8"
      />
    </svg>
  );
};
export default Duplicate;
