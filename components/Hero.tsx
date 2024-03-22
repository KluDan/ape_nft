import Image from "next/image";
import Link from "next/link";

import hero from "../public/images/hero_desc.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="padding-container bg-primary px-[8px] pt-[36px] rounded-xl h-[auto] pb-[19px] md:pb-0 md:h-[421px] xl:h-[677px] xl:pt-[65px]"
    >
      <div className="flex flex-col items-center text-center md:items-start md:relative md:h-full">
        <p className="font-biro leading-[169%] md:leading-[165%] md:mt-[88px] md:text-[20px] xl:mt-[132px] xl:text-[24px] xl:leading-[167%]">
          diD yOu seE iT ?
        </p>
        <h1
          className="font-grotesk extrabold-44 tracking-normal mb-[8px] md:mb-[16px] uppercase md:extrabold-92 md:w-full md:flex md:justify-between tracking-[0.012em]
        xl:extrabold-164 xl:tracking-normal xl:mb-[30px]"
        >
          <span>YACHT</span> <span> APES</span>
        </h1>
        <p className="font-biro leading-[169%] md:leading-[165%] md:text-[20px] xl:text-[24px] xl:leading-[167%] xl:ml-[11%]">
          Apes aRe eveRywhere
        </p>
        <Image
          src={hero}
          alt="NFT image"
          priority
          className="w-full h-auto md:w-[283px] md:h-[386px] md:absolute md:bottom-0 md:right-[29.4%] z-0
          xl:w-[463px] xl:h-[612px] xl:right-[30.2%]"
        />
        <div className="md:absolute md:flex md:flex-col-reverse md:bottom-[35px] md:right-0 md:w-[190px] md:gap-4 xl:w-[337px] xl:bottom-[81px]">
          <Link
            href="/"
            className="block w-full rounded-lg py-[11px] bg-opacityBlack backdrop-blur-md  extrabold-16 font-grotesk uppercase text-textBlack mb-3 md:mb-0 xl:extrabold-28 xl:py-[18px]"
          >
            meet apes
          </Link>
          <p className="font-messina uppercase regular-12 text-textBlack md:text-justify md:indent-[44.2%] xl:regular-16 xl:indent-[25%]">
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
