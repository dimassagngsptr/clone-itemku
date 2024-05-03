const NavBlock = () => {
   const itemsNavBlock = [
      { icon: "🎉", title: "Mainkan Giveaway" },
      { icon: "", title: "Promo" },
      { icon: "", title: "Itemku Play" },
      { icon: "", title: "Jualan di Itemku" },
   ];
   return (
      <div className="hidden bg-main-lightgrey w-full h-8 lg:flex justify-end font-roboto">
         <div className="flex gap-8 items-center px-[8rem] py-[0.25rem] mx-[3.5rem]">
            {itemsNavBlock?.map(({ icon, title }, idx) => (
               <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                  className="text-[0.75rem] dec">
                  {icon} {title}
               </a>
            ))}
         </div>
      </div>
   );
};

export default NavBlock;
