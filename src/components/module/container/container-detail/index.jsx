import minimalBeliSvg from "../../../../assets/detail-product/minimal-beli.svg";
import transaksiSuksesSvg from "../../../../assets/detail-product/tf-sukses.svg";
import clock from "../../../../assets/detail-product/clock.svg";
const ContainerDetail = () => {
   const items = [
      { icons: minimalBeliSvg, title: "Minimal Beli", value: "1" },
      {
         icons: transaksiSuksesSvg,
         title: "Transaksi Sukses",
         value: "11769 (99%)",
      },
      {
         icons: clock,
         title: "Rata-rata kirim",
         value: "2 Menit",
      },
   ];
   return (
      <div className="w-full flex justify-center border border-gray-300 rounded-md py-4 px-2">
         <div className="flex justify-around w-full py-2">
            {items?.map(({ icons, title, value }, idx) => (
               <div className="flex flex-col items-center" key={idx}>
                  <img src={icons} alt="" className="h-6 2-6" />
                  <p>{title}:</p>
                  <small className="font-bold text-lg">{value}</small>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ContainerDetail;
