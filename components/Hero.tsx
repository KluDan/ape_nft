import Image from "next/image";
import Link from "next/link";

import hero from "../public/images/hero_desc.png";

const Hero = () => {
  return (
    <section className="padding-container bg-primary px-[8px] pt-[36px] rounded-xl h-[500px]">
      <div className="flex flex-col items-center text-center">
        <p className="font-biro leading-[169%]">diD yOu seE iT ?</p>
        <h1 className="font-grotesk extrabold-44 mb-[8px]">YACHT APES</h1>
        <p className="font-biro leading-[169%]">Apes aRe eveRywhere</p>
        <Image src={hero} alt="NFT image" priority className="w-full h-auto" />
        {/*         <p>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </p> */}
      </div>
    </section>
  );
};

export default Hero;
