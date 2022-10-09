export default function Icon({ path, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      width="40"
      height="40"
    >
      <path d={path} fill={color} />
    </svg>
  );
}
