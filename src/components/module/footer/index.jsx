const Footer = () => {
  const linkFooter = [
    { title: "Bantuan", list: ["Pusat Bantuan"] },
    {
      title: "Pembeli",
      list: ["Cara Belanja", "Cara Trading", "Cara Pembayaran"],
    },
    {
      title: "Itemku",
      list: [
        "Tentang Itemku",
        "Itemku Blog",
        "Identitas Brand",
        "Aturan penggunaan",
        "Kebijakan Pengembalian Dana",
        "Kebijakan Privasi",
        "Karir",
      ],
    },
    {
      title: "Penjual",
      list: [
        "Cara Berjualan",
        "Cerita Penjual Sukses",
        "Pencairan Saldo",
        "Keuntungan Berjualan di Itemku",
        "Tips Berjualan",
      ],
    },
  ];
  const paymentMethods = [
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Flinkaja-sm.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Findodana.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Falfamidi.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Falfamart.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2F3-sm.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Findosat.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fxl-sm.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Ftelkomsel.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Flainnya.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fbri.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fpermata.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fmaybank.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fbni.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fmandiri.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fbca.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fqris.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fshopeepay.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fgopay.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fdana.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fovo.png&w=48&q=75",
    "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fdompetku-sm.png&w=48&q=75",
  ];
  const socialMedia = [
    "https://files.itemku.com/logo/social-media/facebook-square.svg",
    "https://files.itemku.com/logo/social-media/instagram-square.svg",
    "https://files.itemku.com/logo/social-media/youtube-square.svg",
    "https://files.itemku.com/logo/social-media/tiktok-square.svg",
    "https://files.itemku.com/logo/social-media/twitter-square.svg",
  ];
  return (
    <footer>
      <div className="fixed left-0 right-0 bottom-5 h-[35px] flex items-center justify-center rounded-md w-[90%] mx-auto bg-orange-600 text-white text-center lg:hidden">
        <button className="font-semibold">Beli</button>
      </div>
      <div className="hidden lg:px-[8%] lg:py-[3%] lg:flex gap-2 justify-between">
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 ">
          {linkFooter?.map(({ title, list }, idx) => (
            <div key={idx}>
              <p className="font-semibold text-sm">{title}</p>
              {list?.map((item) => (
                <p
                  className="text-xs leading-5 text-gray-700 cursor-pointer"
                  key={item}
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div>
          <p className="text-sm font-semibold mb-4">Metode Pembayaran</p>
          <div className="grid grid-cols-4 gap-x-8 gap-y-5">
            {paymentMethods?.map((item) => (
              <img src={item} key={item} className="w-[30px]" />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold mb-4">Ikuti Itemku</p>
          <div className="flex gap-2 mb-5">
            {socialMedia?.map((item) => (
              <img src={item} key={item} className="cursor-pointer" />
            ))}
          </div>
          <img
            src="https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Fillustration%2Fitemku%2Fhome%2Fdesktop-footer.png&w=414&q=75"
            alt=""
            className="w-[300px]"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
