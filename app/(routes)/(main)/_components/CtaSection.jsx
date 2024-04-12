const { Button } = require("@/components/ui/button");

const CtaSection = () => {
  return (
    <div className="bg-custom-accent-800 text-white px-16 py-36 flex flex-col items-center">
      <h1>Ready to  buy your next gift</h1>
      <Button className="mt-8 bg-custom-primary-800">Shop Now</Button>
    </div>
  );
};

export default CtaSection;
