import Image from "next/image";

const OurStorySection = () => {
  return (
    <div className="px-16 py-16 flex justify-between items-center gap-40  text-custom-text-50">
      <div>
        <h1>Our Story</h1>
        <span className="mt-6 ml-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
          tempor orci dapibus ultrices in iaculis nunc. Purus non enim praesent
          elementum facilisis leo. Urna et pharetra pharetra massa massa
          ultricies mi quis. Hac habitasse platea dictumst vestibulum rhoncus
          est pellentesque. Id leo in vitae turpis massa sed elementum.
          Tincidunt dui ut ornare lectus sit amet est. Eu non diam phasellus
          vestibulum lorem sed risus ultricies. Accumsan in nisl nisi
          scelerisque eu ultrices vitae. Porttitor massa id neque aliquam
          vestibulum. Lobortis scelerisque fermentum dui faucibus in ornare.
          Praesent tristique magna sit amet purus gravida quis blandit.
          Scelerisque eu ultrices vitae auctor eu augue. Quam quisque id diam
          vel quam elementum. Nunc scelerisque viverra mauris in. Pretium lectus
          quam id leo in vitae turpis massa sed. Elit eget gravida cum sociis
          natoque penatibus et magnis dis.
        </span>
      </div>
      <Image
        src="\OurStoryImage.svg"
        alt="Our Story Image"
        width={500}
        height={500}
      />
    </div>
  );
};

export default OurStorySection;
