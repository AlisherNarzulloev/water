import { motion, MotionValue } from "framer-motion";
import Image from "next/image";

const features = [
  { value: "15 тыс", label: "лет возраст источника" },
  { value: "104 м", label: "глубина водозабора" },
  { value: "800 млн", label: "лет возраст пород" },
  { value: "1991 год", label: "основания производства" },
];

interface NatureSectionProps {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
}

const NatureSection = ({ opacity, y }: NatureSectionProps) => (
  <motion.section
    className="fixed top-0 left-0 w-full h-screen z-40 pointer-events-none"
    style={{ opacity, y }}
  >
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden px-8">
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <Image
          src="/bg-nature.png"
          alt="Лесной фон"
          fill
          className="object-cover select-none pointer-events-none"
          draggable={false}
          priority
        />
      </div>
      <div className="relative z-20 flex justify-center">
        <h1 className="text-white text-[180px] md:text-[240px] font-extrabold tracking-tight select-none pointer-events-none leading-none flex justify-between w-full">
          <span className="pr-8">ПРИР</span>
          <span className="pl-8">ДНАЯ</span>
        </h1>
      </div>
      <div className="relative z-50 flex flex-row justify-between items-start h-full w-full">
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
      <div className="relative w-full grid grid-cols-4 z-30 divide-x">
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
    </div>
  </motion.section>
);

export default NatureSection;
