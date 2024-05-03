const Card = ({ children }) => {
  return (
    <div className="border border-gray-300 rounded-md h-[280px] w-[110px]">
      {children}
    </div>
  );
};
export default Card;
