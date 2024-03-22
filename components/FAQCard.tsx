"use client";
import { useState } from "react";

interface CardProps {
  answer: string;
  question: string;
  id: number;
}

const FAQCard: React.FC<{ cardInfo: CardProps }> = ({ cardInfo }) => {
  const { answer, question, id } = cardInfo;
  const [isActive, setIsActive] = useState(id === 1);

  const toggleOpen = () => {
    setIsActive(!isActive);
  };
  return (
    <article className="flex gap-[8px]">
      <span className="font-biro text-primary font-[12px] leading-[167%]">{`[${id}]`}</span>

      <div className="flex flex-col gap-[10px]">
        <button
          className="font-grotesk extrabold-20 text-left"
          onClick={toggleOpen}
        >
          {question}
        </button>
        {isActive && <p className="font-messina regular-12">{answer}</p>}
      </div>
    </article>
  );
};

export default FAQCard;
