const Card = ({ children }) => {
  return (
    <div className="border border-gray-300 rounded-md h-[280px] w-[110px] lg:w-[160px] lg:h-[230px]">
      {children}
    </div>
  );
};
export default Card;
