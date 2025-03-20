import ServiceChecklist from "../ui/ServiceChecklist";

const IncludedExcluded = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Included & Excluded</h2>
      <div className="md:w-[400px] md-lg:w-[430px] lg:w-[450px] lg-sm:w-[477px] pr-6">
        <ServiceChecklist />
      </div>
    </div>
  );
};

export default IncludedExcluded;