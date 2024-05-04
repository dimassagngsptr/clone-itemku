import { useState } from "react";
import tenMinute from "../../../../assets/detail-product/10menit-p.svg";
const OrderInformation = () => {
  const [count, setCount] = useState(1);
  const handleDecrement = () => {
    if (count <= 0) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="hidden lg:block lg:relative w-[300px] h-[1300px]">
      <div className="sticky top-[150px] border border-gray-300 rounded-md w-[300px] pb-4 px-2 py-1">
        <p className="font-semibold">Informasi Pesanan</p>
        <div className="flex w-full gap-10 mt-3">
          <div className="relative">
            <p className="text-sm">User ID</p>
            <input
              type="text"
              placeholder="Contoh:1234"
              className="outline-none border-b border-gray-300 w-[100px]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 absolute top-6 right-0"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="relative">
            <p className="text-sm">Zone ID</p>
            <input
              type="text"
              placeholder="Contoh:1234"
              className="outline-none border-b border-gray-300 w-[100px]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 absolute top-6 right-0"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="w-full mt-3">
          <label htmlFor="" className="text-sm">
            Catatan untuk penjual {"(Optional)"}
          </label>
          <input
            type="text"
            className="border-b border-gray-300 outline-none w-full"
          />
        </div>
        <div className="flex justify-between mt-1 border-b py-5 bg-blue">
          <div className="flex gap-4">
            <button onClick={handleDecrement}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={`${count === 0 ? "rgb(209 213 219" : "rgb(59 130 246)"}`}
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <p>{count}</p>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={`${count < 999 && "rgb(59 130 246)"}`}
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <span className="border border-black text-xs rounded-md px-2 text-green-500">
            Stok 999+
          </span>
        </div>
        <div className="border-b py-2">
          <div className="flex gap-2 mt-3">
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className="text-sm">
              Ambil Penawaran Ini
            </label>
          </div>
          <div className="flex justify-between py-2">
            <div>
              <p className="text-sm">Starlight Membership</p>
              <img src={tenMinute} alt="" className="w-16 h-10" />
            </div>
            <div className="font-exo">
              <p className="font-semibold">Rp209.900</p>
              <div className="flex items-center gap-1">
                <span className="bg-red-500 text-[10px] rounded-md py-0.5 px-0.5 text-white">
                  42%{" "}
                </span>
                <span className="line-through text-[10px] text-gray-500 bg-white">
                  Rp96.100
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex py-3 justify-between font-exo">
            <p className="text-xs">Subtotal</p>
            <p className="font-bold text-sm">Rp250.000</p>
          </div>
          <div className="flex justify-around gap-1">
            <button className="border border-main-orange text-sm px-10 rounded py-0.5">
              +Troli
            </button>
            <button className="bg-main-orange text-white text-sm px-6 rounded py-0.5">
              Beli Langsung
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
