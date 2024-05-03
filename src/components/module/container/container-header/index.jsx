import containerImg from "../../../../assets/detail-product/poster-main-web.webp";
import tenMinute from "../../../../assets/detail-product/10menit-p.svg";
const ContainerHeader = () => {
   return (
      <div className="h-[500px]">
         <img
            src={containerImg}
            alt=""
            loading="lazy"
            className="rounded-md object-cover"
         />
         <img
            src={containerImg}
            alt=""
            loading="lazy"
            className="rounded-md object-cover w-[60px] h-[60px] mt-4"
         />
         <div className="mt-5">
            <div className="flex justify-between">
               <div className="flex flex-col font-exo">
                  <h1 className="font-bold text-2xl">966 Diamonds</h1>
                  <p className="text-main-fontlightgrey">Mobile Legends</p>
                  <span className="font-bold text-3xl mt-3">
                     Rp. 250.000{" "}
                     <span className="font-normal text-sm text-black">
                        per 1 Top Up{" "}
                     </span>
                  </span>
                  <div className="flex gap-2 mt-2 items-center">
                     <p className="bg-main-orange text-white rounded px-1 py-1.5">
                        7%
                     </p>
                     <span className="text-sm line-through text-gray-400">
                        Rp.270.100
                     </span>
                  </div>
                  <img
                     src={tenMinute}
                     alt=""
                     className="w-[100px] h-[20px] object-contain mt-3"
                  />
               </div>
               <div className="flex gap-5">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="currentColor"
                     className="w-6 h-6">
                     <path
                        fillRule="evenodd"
                        d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                        clipRule="evenodd"
                     />
                  </svg>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                     />
                  </svg>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContainerHeader;
