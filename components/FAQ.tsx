import { FAQ_Info } from "@/constants";
import FAQCard from "./FAQCard";

const FAQ = () => {
  return (
    <section className="padding-container pt-[60px] md:pt-[80px] xl:pt-[120px] text-white flex flex-col items-center">
      <h2 className="font-grotesk extrabold-44-91 md:extrabold-80 xl:extrabold-160 mb-[24px] md:mb-[40px] xl:mb-[80px]">
        faq
      </h2>
      <ul className="flex flex-col gap-[16px]">
        {FAQ_Info.map((card) => (
          <li key={card.id}>
            <FAQCard cardInfo={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
