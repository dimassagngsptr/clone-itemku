const ContainerAdditionals = () => {
  return (
    <div>
      <p className="font-semibold text-lg mb-2">
        Paket Bundling Hemat di Mobile Legends
      </p>
      <p className="text-sm">
        Produk yang tampil merupakan produk yang telah dipilih oleh itemku
      </p>
      <div className="flex gap-8 items-center">
        <div className="border w-[250px] h-[180px] rounded-md py-1 font-exo flex flex-col justify-between my-5">
          <div className="px-2">
            <p>966 Diamonds</p>
            <div className="flex gap-2 my-2">
              <p className="bg-red-500 text-white rounded px-1">7%</p>
              <span className="line-through text-gray-500">Rp.270.000</span>
            </div>
            <p className="text-red-600">Rp250.000</p>
          </div>
          <div className="w-full h-8 border-t border-gray-300 flex items-center gap-2 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(59 130 246)"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
              />
            </svg>
            <p>Kevin Store</p>
          </div>
        </div>
        <p className="text-2xl">+</p>
      </div>
      <div className="border w-[250px] h-[180px] rounded-md py-1 font-exo flex flex-col justify-between my-5">
        <div className="px-2">
          <p>Starlight Membership {"(30 Days)"}</p>
          <div className="flex gap-2 my-2">
            <p className="bg-red-500 text-white rounded px-1">42%</p>
            <span className="line-through text-gray-500">Rp.96.000</span>
          </div>
          <p className="text-red-600">Rp250.000</p>
        </div>
        <div className="w-full h-8 border-t border-gray-300 flex items-center gap-2 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="rgb(59 130 246)"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
            />
          </svg>
          <p>Wantau</p>
        </div>
      </div>
    </div>
  );
};
export default ContainerAdditionals;
