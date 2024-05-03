import imgToko from "../../../../assets/detail-product/toko-img.webp";
import tierToko from "../../../../assets/detail-product/tier-toko.svg";
const ContainerStore = () => {
   return (
      <div className="border-t border-b border-gray-300 py-5">
         <p>Toko</p>
         <div className="flex items-center">
            <img src={imgToko} alt="" className="rounded-full mr-3" />
            <div className="flex w-full flex-col">
               <div className="flex">
                  <img src={tierToko} alt="" className="max-w-6 max-h-6" />
                  <p className="mx-2">Kevin Store 4.8</p>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="#ffff00"
                     className="w-6 h-6">
                     <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                     />
                  </svg>
                  <p className="mx-1">4.8/5.0</p>
               </div>
               <p>Aktif 21 Maret yang lalu</p>
            </div>
         </div>
      </div>
   );
};

export default ContainerStore;
