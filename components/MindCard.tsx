import { Arrow } from "@/public/icons";

interface CardProps {
  description: string;
  title: string;
  id: number;
}

const Card: React.FC<{ cardInfo: CardProps }> = ({ cardInfo }) => {
  const { description, title, id } = cardInfo;
  return (
    <article
      className={`flex flex-col justify-between h-[242px] xl:h-[480px] text-white rounded-xl py-[24px] px-[12px] md:rounded-2xl md:px-[24px] xl:rounded-3xl ${
        id === 3 ? "bg-primary" : "bg-textBlack"
      }`}
    >
      <span className="font-messina regular-12 xl:regular-24 pb-[10px] overflow-ellipsis md:w-[128px] xl:w-[228px] md:ml-auto">
        {id === 3 ? (
          <Arrow className="ml-auto w-[24px] xl:w-[40px]" />
        ) : (
          description
        )}
      </span>
      <h3 className="font-grotesk extrabold-32 xl:extrabold-64">{title}</h3>
    </article>
  );
};

export default Card;
/*       className={`flex flex-col justify-between h-[242px] xl:h-[480px] text-white rounded-xl py-[24px] px-[12px] md:rounded-2xl md:px-[24px] xl:rounded-3xl ${
        text ? "bg-textBlack" : "bg-primary"
      }`} */
