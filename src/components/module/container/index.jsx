import ContainerDesciptions from "./container-desc";
import ContainerDetail from "./container-detail";
import ContainerHeader from "./container-header";
import ContainerStore from "./container-store";

const Container = () => {
   return (
      <div className="bg-white py-[150px] px-5">
         <ContainerHeader />
         <ContainerDetail />
         <ContainerDesciptions />
         <ContainerStore/>
      </div>
   );
};
export default Container;
