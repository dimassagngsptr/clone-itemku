import ContainerAdditionals from "./container-additional";
import ContainerDesciptions from "./container-desc";
import ContainerDetail from "./container-detail";
import ContainerFooter from "./container-footer";
import ContainerHeader from "./container-header";
import ContainerStore from "./container-store";
import product_1 from "../../../assets/detail-product/produk-1.webp";
import product_2 from "../../../assets/detail-product/produk-2.webp";
import product_3 from "../../../assets/detail-product/produk-3.webp";
import product_4 from "../../../assets/detail-product/produk-4.webp";
import product_5 from "../../../assets/detail-product/produk-5.webp";
import termurah_1 from "../../../assets/detail-product/termurah-1.webp";
import termurah_2 from "../../../assets/detail-product/termurah-2.webp";
import termurah_3 from "../../../assets/detail-product/termurah-3.webp";
import termurah_4 from "../../../assets/detail-product/termurah-4.webp";
import termurah_5 from "../../../assets/detail-product/termurah-5.webp";

const Container = () => {
  const product = [
    {
      img: product_1,
      sold: "21093",
      title: "Weekly Diamond Pass",
      price: "Rp75.200",
    },
    {
      img: product_2,
      sold: "21093",
      title: "596 Diamond",
      price: "Rp75.200",
    },
    {
      img: product_3,
      sold: "21093",
      title: "596 Diamond",
      price: "Rp75.200",
    },
    {
      img: product_4,
      sold: "21093",
      title: "596 Diamond",
      price: "Rp75.200",
    },
    {
      img: product_3,
      sold: "21093",
      title: "596 Diamond",
      price: "Rp75.200",
    },
    {
      img: product_5,
      sold: "21093",
      title: "596 Diamond",
      price: "Rp75.200",
    },
    {
      img: product_4,
      sold: "21093",
      title: "596 Diamond",
      price: "Rp75.200",
    },
    {
      img: product_5,
      sold: "21093",
      title: "596 Diamond",
      price: "Rp75.200",
    },
  ];
  const promo = [
    {
      img: termurah_1,
      sold: "21093",
      title: "3 Diamonds",
      price: "Rp5.200",
    },
    {
      img: termurah_2,
      sold: "21093",
      title: "5 Diamond",
      price: "Rp5.200",
    },
    {
      img: termurah_3,
      sold: "21093",
      title: "7 Diamond",
      price: "Rp5.200",
    },
    {
      img: termurah_4,
      sold: "21093",
      title: "3 Diamond",
      price: "Rp5.200",
    },
    {
      img: termurah_5,
      sold: "21093",
      title: "10 Diamond",
      price: "Rp5.200",
    },
    {
      img: termurah_1,
      sold: "21093",
      title: "8 Diamond",
      price: "Rp5.200",
    },
    {
      img: termurah_3,
      sold: "21093",
      title: "3 Diamond",
      price: "Rp5.200",
    },
    {
      img: termurah_5,
      sold: "21093",
      title: "5 Diamond",
      price: "Rp5.200",
    },
  ];
  return (
    <div className="bg-white py-[150px] px-5 container">
      <ContainerHeader />
      <div className="block lg:hidden">
        <ContainerDetail />
        <ContainerDesciptions />
        <ContainerStore />
        <ContainerAdditionals />
      </div>
      <ContainerFooter
        title={"Pengiriman Tercepat"}
        desc={
          "Produk dari penjual penjual yang memberi Garansi Pengiriman 10 menit"
        }
        items={product}
      />
      <ContainerFooter
        title={"Promo Termurah"}
        desc={"Produk Mobile Legends termurah se-Indonesia Cari disini!"}
        items={promo}
      />
    </div>
  );
};
export default Container;
