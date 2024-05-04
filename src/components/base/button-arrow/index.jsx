export function SampleNextArrow(props) {
  const { onClick, isHover } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      onClick={onClick}
      stroke="currentColor"
      className={`${
        isHover === true
          ? "w-[30px] h-[30px] rounded-full absolute top-1/3 -right-4 cursor-pointer bg-gray-200 text-black shadow-lg hover:scale-110"
          : "hidden"
      }`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

export function SamplePrevArrow(props) {
  const { onClick, isHover } = props;
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${
        isHover === true
          ? "w-[30px] h-[30px] rounded-full absolute top-1/3 -left-2 z-10 cursor-pointer bg-gray-200 text-black shadow-lg hover:scale-110"
          : "hidden"
      }`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}
