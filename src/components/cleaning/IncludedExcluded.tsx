import ServiceChecklist from "../ui/ServiceChecklist";

const IncludedExcluded = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Included & Excluded</h2>
      <div className="md-lg:max-w-[400px] lg-xs:max-w-[490px] lg-sm:max-w-[500px] xl:max-w-[635px]
     ">
        <ServiceChecklist />
      </div>
    </div>
  );
};

export default IncludedExcluded;