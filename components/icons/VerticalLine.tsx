const VerticalLine = ({ size = 15, ...props }) => {
  return (
    <svg
      width="1"
      height={size}
      {...props}
      viewBox="0 0 1 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0.75" y1="15" x2="0.75" stroke="#848484" stroke-width="0.5" />
    </svg>
  );
};
export default VerticalLine;
