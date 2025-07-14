import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

const features = [
  { value: "15 тыс", label: "лет возраст источника" },
  { value: "104 м", label: "глубина водозабора" },
  { value: "800 млн", label: "лет возраст пород" },
  { value: "1991 год", label: "основания производства" },
];

interface NatureSectionProps {
  scrollYProgress: MotionValue<number>;
  curtainProgress: MotionValue<number>;
}

export default function NatureSection({ scrollYProgress }: NatureSectionProps) {
  const opacity = useTransform(
    scrollYProgress,
    [0.05, 0.1, 0.15, 0.2],
    [0, 1, 1, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.05], [0.9, 1]);
  const y = useTransform(
    scrollYProgress,
    [0.05, 0.1, 0.15, 0.2],
    ["100%", "0%", "0%", "-100%"]
  );

  useAutoScrollDown(scrollYProgress, 0.02, 0.17, 2);

  return (
    <motion.section
      className="relative w-full h-screen z-40 pointer-events-none snap-end"
      style={{ opacity, scale }}
    >
      <div className="fixed top-0 w-full h-full flex flex-col justify-between overflow-hidden px-8">
        <div className="fixed top-0 inset-0 z-0 w-full h-full pointer-events-none">
          <Image
            src="/bg-nature.webp"
            alt="Лесной фон"
            fill
            className="object-contain xl:object-fit select-none pointer-events-none"
            draggable={false}
            priority
            unoptimized
          />
        </div>
        <motion.div style={{ y }} className="relative z-20 flex justify-center">
          <h1 className="text-white text-[160px] xl:text-[17vw] xl:-mt-24 font-extrabold tracking-wider select-none pointer-events-none leading-none flex justify-center gap-6 xl:gap-20 w-full">
            <span className="pr-8">ПРИР</span>
            <span className="pl-8">ДНАЯ</span>
          </h1>
        </motion.div>
        <div className="relative z-50 flex flex-row justify-between items-start h-full w-full mt-6">
          <motion.div
            style={{ y }}
            className="max-w-1/3 px-8 text-white text-xl xl:text-3xl 2xl:text-5xl p-4 backdrop-blur-[6px] rounded-2xl"
          >
            <p>
              <span className="text-2xl xl:text-5xl 2xl:text-7xl font-semibold">
                TURAN
              </span>
              — это природная минеральная вода, рожденная из глубин веков.
            </p>
          </motion.div>
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
          <motion.div
            style={{ y }}
            className="self-end text-sm xl:text-base 2xl:text-2xl max-w-1/3 px-8 text-white leading-relaxed p-4 backdrop-blur-[6px] rounded-2xl mb-8"
          >
            <p className="text-right font-bold">
              Она берет свое начало в заповедной зоне Кокшетауской
              возвышенности, где на глубине более 100 метров скрыт реликтовый
              источник, сформированный более 15 000 лет назад талыми водами
              Валдайского ледника. Проходя через древние породы, возраст которых
              исчисляется сотнями миллионов лет, вода насыщается природными
              минералами и сохраняет свою первозданную чистоту. Без
              искусственных добавок, без внешнего воздействия — только идеальный
              баланс, созданный самой природой.
            </p>
          </motion.div>
        </div>
        <motion.div
          style={{ y }}
          className="relative w-full grid grid-cols-4 z-30 gap-8 pb-4 xl:pb-10"
        >
          {features.map((f) => (
            <div
              key={f.value}
              className="px-8 py-4 flex flex-col items-center text-white p-4 backdrop-blur-[6px] rounded-2xl text-center"
            >
              <span className="text-3xl xl:text-6xl 2xl:text-7xl font-bold">
                {f.value}
              </span>
              <span className="text-base xl:text-lg 2xl:text-2xl opacity-80">
                {f.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
