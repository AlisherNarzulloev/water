import Image from "next/image";
import { FC } from "react";

interface Props {}

const features = [
  { value: "15 тыс", label: "лет возраст источника" },
  { value: "104 м", label: "глубина водозабора" },
  { value: "800 млн", label: "лет возраст пород" },
  { value: "1991 год", label: "основания производства" },
];

export const Nature: FC<Props> = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden px-8">
      <Image
        src="/bg-nature.png"
        alt="Лесной фон"
        fill
        priority
        className="object-cover z-0"
      />

      <div className="relative z-20 flex justify-center">
        <h1 className="text-white text-[240px] font-extrabold tracking-tight select-none pointer-events-none leading-none flex justify-between w-full">
          <span className="pr-8">ПРИР</span>
          <span className="pl-8">ДНАЯ</span>
        </h1>
      </div>

      <div className="relative z-20 flex flex-row justify-between items-start h-full w-full">
        <div className="max-w-[600px] px-8 text-white text-4xl font-semibold">
          <p>
            TURAN — это природная минеральная вода, рожденная из глубин веков.
          </p>
        </div>

        <div className="absolute top-1/3 left-1/2 -translate-1/2">
          <Image
            src="/turan-text.png"
            alt="Turan Water"
            width={210}
            height={210}
            className="mb-4"
            priority
          />
        </div>

        <div className="self-end max-w-[380px] px-8 text-white leading-relaxed">
          <p className="text-right font-bold">
            Она берет свое начало в заповедной зоне Кокшетауской возвышенности,
            где на глубине более 100 метров скрыт реликтовый источник,
            сформированный более 15 000 лет назад талыми водами Валдайского
            ледника. Проходя через древние породы, возраст которых исчисляется
            сотнями миллионов лет, вода насыщается природными минералами и
            сохраняет свою первозданную чистоту. Без искусственных добавок, без
            внешнего воздействия — только идеальный баланс, созданный самой
            природой.
          </p>
        </div>
      </div>

      <div className="relative w-full flex justify-between z-30">
        {features.map((f) => (
          <div
            key={f.value}
            className="px-8 py-4 flex flex-col items-center text-white"
          >
            <span className="text-7xl font-bold">{f.value}</span>
            <span className="text-lg opacity-80">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Nature;
