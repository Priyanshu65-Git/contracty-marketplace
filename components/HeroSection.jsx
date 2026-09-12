import Contractor from "@/models/Contractor";
import ContractorSearchForm from "./ContractorSearchForm";

const HeroSection = () => {
  return (
    <section className="w-full  border-slate-500 bg-white text-black p-4">
      <h1 className="text-5xl text-center text-[#071426] font-extrabold capitalize mt-8">
        Find the Right Contractor for Your Next Project
      </h1>
      <p className="text-gray-500 text-center my-4">
        Discover trusted professionals, compare their services, and get your project started with confidence.
      </p>
      {/*! Contractor Search Form */}
      <ContractorSearchForm />
    </section>
  );
};

export default HeroSection;
