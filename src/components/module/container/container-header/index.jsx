import containerImg from "../../../../assets/detail-product/poster-main-web.webp";
import tenMinute from "../../../../assets/detail-product/10menit-p.svg";
import ContainerDetail from "../container-detail";
import ContainerDesciptions from "../container-desc";
import ContainerStore from "../container-store";
import OrderInformation from "../order-information";
const ContainerHeader = () => {
  return (
    <div className="block lg:relative lg:h-[1300px]">
      <p className="hidden lg:block lg:absolute -top-6 text-blue-500 text-xs px-[8%]">
        {"Beranda > Kategori > Mobile Legends > Top Up >"}{" "}
        <span className="text-black">986 Diamonds</span>
      </p>
      <div className="h-[500px] lg:flex lg:px-[8%] gap-5">
        <div>
          <img
            src={containerImg}
            alt=""
            loading="lazy"
            className="rounded-md object-cover lg:w-[350px] lg:mt-5 lg:h-[180px]"
          />
          <img
            src={containerImg}
            alt=""
            loading="lazy"
            className="rounded-md object-cover w-[60px] h-[60px] mt-4 lg:w-[50px] lg:h-[50px]"
          />
        </div>
        <div className="mt-5">
          <div className="flex lg:gap-20 justify-between lg:relative">
            <div className="flex flex-col font-exo ">
              <h1 className="font-bold text-2xl lg:text-xl">966 Diamonds</h1>
              <p className="text-main-fontlightgrey lg:text-xs">
                Mobile Legends
              </p>
              <span className="font-bold text-3xl mt-3 lg:text-2xl">
                Rp. 250.000{" "}
                <span className="font-normal text-sm text-black lg:text-xs">
                  per 1 Top Up{" "}
                </span>
              </span>
              <div className="flex gap-2 mt-2 items-center">
                <p className="bg-main-orange text-white rounded px-1 py-1.5 lg:text-xs lg:px-1 lg:py-0.5 font-semibold">
                  7%
                </p>
                <span className="text-sm line-through text-gray-400 lg:text-xs">
                  Rp.270.100
                </span>
              </div>
              <img
                src={tenMinute}
                alt=""
                className="w-[100px] h-[20px] object-contain mt-3 lg:w-[80px]"
              />
              <div className="hidden lg:block">
                <ContainerDetail />
              </div>
            </div>
            <div className="flex gap-5 lg:gap-3 lg:absolute right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 lg:w-4 lg:h-4"
              >
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
                className="w-6 h-6 lg:w-4 lg:h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
        </div>
       <OrderInformation/>
      </div>
      <div className="hidden lg:block lg:absolute w-[680px] top-[280px] left-[8%]">
        <ContainerDesciptions />
        <ContainerStore />
      </div>
    </div>
  );
};

export default ContainerHeader;
