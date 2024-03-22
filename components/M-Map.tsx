"use client";
import { MIND_MAP } from "@/constants";

import Card from "./MindCard";

const MindMap = () => {
  return (
    <section className="padding-container pt-[60px] md:pt-[80px] xl:pt-[120px] text-white">
      <h2 className="font-grotesk extrabold-44-91 md:extrabold-80 xl:extrabold-160 text-center mb-[24px] md:mb-[40px] xl:mb-[80px]">
        MIND map
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        {MIND_MAP.map((card) => (
          <li key={card.id}>
            <Card cardInfo={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MindMap;
{
  /*       <CldImage
        width="960"
        height="600"
        src="https://res.cloudinary.com/deaqxnkxr/image/upload/v1711117188/APE%20NFT/about_img_toht5f.png"
        sizes="100vw"
        alt="Description of my image"
      /> */
}
