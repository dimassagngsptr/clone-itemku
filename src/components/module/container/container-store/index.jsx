import imgToko from "../../../../assets/detail-product/toko-img.webp";
import tierToko from "../../../../assets/detail-product/tier-toko.svg";
import SlickSlider from "../slick-slider";
import "./index.css";

const Slider = ({ title, children }) => {
  return (
    <div className="mt-3 border-b border-gray-300 pb-4">
      <div className="flex justify-between my-2 pr-3">
        {title}
        <p className="text-blue-500">Lihat Semua</p>
      </div>
      {children}
    </div>
  );
};

const ContainerStore = () => {
  const settings = {
    dots: false,
    infinite: false,
    variableWidth: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const products = [
    { product_name: "17 Diamonds", stock: "999+", price: "Rp.5000" },
    { product_name: "13 Diamonds", stock: "999+", price: "Rp.5000" },
    { product_name: "17 Diamonds", stock: "999+", price: "Rp.5000" },
    { product_name: "17 Diamonds", stock: "999+", price: "Rp.5000" },
    { product_name: "17 Diamonds", stock: "999+", price: "Rp.5000" },
    { product_name: "17 Diamonds", stock: "999+", price: "Rp.5000" },
  ];
  const ulasan = [
    {
      name: "J**n",
      time: "Hari ini",
      stars: 5,
      reviews: ["Pengiriman Cepat"],
    },
    {
      name: "M**D",
      time: "Hari ini",
      stars: 5,
      reviews: [
        "Pengiriman Cepat",
        "Produk Sesuai",
        "Respon Cepat",
        "Penjual Ramah",
      ],
    },
    {
      name: "J**n",
      time: "Hari ini",
      stars: 5,
      reviews: ["Pengiriman Cepat", "Produk Sesuai"],
    },
    {
      name: "J**n",
      time: "Hari ini",
      stars: 5,
      reviews: ["Pengiriman Cepat"],
    },
    {
      name: "J**n",
      time: "Hari ini",
      stars: 5,
      reviews: [
        "Pengiriman Cepat",
        "Produk Sesuai",
        "Respon Cepat",
        "Penjual Ramah",
      ],
    },
    {
      name: "J**n",
      time: "Hari ini",
      stars: 5,
      reviews: [
        "Pengiriman Cepat",
        "Produk Sesuai",
        "Respon Cepat",
        "Penjual Ramah",
      ],
    },
  ];
  return (
    <div>
      <div className="border-t border-b border-gray-300 py-5 font-exo">
        <p className="font-semibold mb-2">Toko</p>
        <div className="flex items-center">
          <img src={imgToko} alt="" className="rounded-full mr-3" />
          <div className="flex w-full flex-col">
            <div className="flex items-center">
              <img src={tierToko} alt="" className="max-w-6 max-h-6" />
              <p className="mx-2">Kevin Store 4.8</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ef6000"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="mx-1">4.8/5.0</p>
            </div>
            <p>Aktif 21 Menit yang lalu</p>
          </div>
        </div>
      </div>
      <Slider
        title={<p className="font-semibold">Denom lainnya di toko ini</p>}
      >
        <SlickSlider settings={settings}>
          {products?.map(({ product_name, stock, price }, idx) => (
            <div className="testimoni" key={idx}>
              <div className="border border-gray-300 w-[300px] h-[120px] mx-2 py-3 px-1 font-exo">
                <p>{product_name}</p>
                <span className="border-2 border-black rounded-lg px-2  text-green-500 my-2 inline-block">
                  Stok {stock}
                </span>
                <p>{price}</p>
              </div>
            </div>
          ))}
        </SlickSlider>
      </Slider>
      <Slider
        title={
          <div className="flex gap-2 mt-2">
            <p>Ulasan Terakhir 4.9/5</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ef6000"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        }
      >
        <SlickSlider settings={settings}>
          {ulasan?.map(({ name, stars, reviews, time }, idx) => (
            <div className="testimoni" key={idx}>
              <div className="w-[300px] mx-2 py-3 px-2 font-exo">
                <div className="flex justify-between">
                  <p>{name}</p>
                  <small>{time}</small>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: stars }, (_, item) => (
                    <svg
                      key={item}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#ef6000"
                      className="w-3 h-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                {reviews?.map((item, idx) => (
                  <span
                    key={idx}
                    className="border rounded-lg inline-block text-sm py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </SlickSlider>
      </Slider>
    </div>
  );
};

export default ContainerStore;
