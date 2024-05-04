import { useState } from "react";

const Description = ({ title, description }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (open === true) {
      return setOpen(false);
    }
    setOpen(true);
  };
  console.log(open);
  return (
    <div>
      <div
        className={`w-full ${
          !open
            ? "max-h-[120px] lg:max-h-[95px] overflow-hidden transition-all"
            : "max-h-[480px]  transition-all"
        }`}
      >
        <h1 className="font-semibold lg:mb-3">{title}</h1>
        {description?.map((item, idx) => (
          <p className="mt-3 lg:mt-0 lg:text-xs" key={idx}>
            {item}
          </p>
        ))}
      </div>
      <div className="bg-white flex justify-center">
        <button onClick={handleOpen} className="text-blue-500 py-5">
          Tampilkan lebih {open ? "sedikit" : "banyak"}
        </button>
      </div>
    </div>
  );
};

const ContainerDesciptions = () => {
  const desc = [
    {
      title: "Cara Trading Top Up Diamond Mobile Legends",
      description: [
        "1.Pilihlah dagangan dan lakukan pembeliaan",
        "2.Perhatikan dagangan dari kategori Event Top Up Diamond",
        "3.Masukan informasi yang di butuhkan untuk Top-Up",
        "4.Menghindari kesalahan pengisian User ID,Pastikan kamu mengisi User ID Mobile Legends kamu dengan angka yang benar.",
        "5.Lakukan pembayaran atas pesanan kamu",
        "6.Tunggu sampai penjual memproses pesanan kamu",
        "7.Jika sudah terkirim cek kembali Diamond Mobile Legends kamu",
        "Jika sudah sesuai, klik Selesai untuk menyelesaikan pesanan kamu",
      ],
      height: "450px",
    },
    {
      title: "Deskripsi Produk",
      description: [
        "KEVIN STORE",
        "Hii MLers,",
        "Welcome To KevinStoree",
        "Cara Order??",
        "ID Nick Server (4 Angka Belakang ID)",
        "Terimakasih,,",
        "Happy Shopping 👌",
      ],
      height: "350px",
    },
  ];

  return (
    <div className="flex flex-col gap-4 mt-14">
      <div className="border border-main-blue rounded-md bg-main-blue/10 px-2 py-1 lg:py-2 lg:px-2">
        <p className="pr-10 py-1 lg:text-sm">
          Jika tidak menerima produk dalam 10 menit, kamu dapat langsung
          mengajukan pengembalian dana.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {desc?.map(({ title, description }, idx) => (
          <div key={idx}>
            <Description idx={idx} description={description} title={title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContainerDesciptions;
