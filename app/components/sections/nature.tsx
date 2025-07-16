import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Curtains from "./curtains";

const features = [
  { value: "15 тыс", label: "лет возраст источника" },
  { value: "104 м", label: "глубина водозабора" },
  { value: "800 млн", label: "лет возраст пород" },
  { value: "1991 год", label: "основания производства" },
];

interface NatureSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function NatureSection({ scrollYProgress }: NatureSectionProps) {
  const opacity = useTransform(
    scrollYProgress,
    [0.02, 0.05, 0.06, 0.07],
    [0, 1, 1, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.02], [0.9, 1]);
  const y = useTransform(
    scrollYProgress,
    [0.02, 0.05, 0.07, 0.12],
    ["100%", "0%", "0%", "-100%"]
  );

  useAutoScrollDown(scrollYProgress, 0, 0.07, 0.81);

  return (
    <section className="relative h-full">
      <Curtains progress={scrollYProgress} />

      <motion.section
        className="relative top-0 w-full h-screen z-20 pointer-events-none snap-end"
        style={{ opacity, scale }}
      >
        <div className="h-full w-full bg-contain bg-center 1xl:bg-center bg-nature fixed z-0 left-0 top-0" />
        <div className="fixed top-1/2 left-1/2 -translate-1/2">
          <Image
            src="/nature/turan-text.png"
            alt="Turan Water"
            width={100}
            height={100}
            className="mb-4 h-44 w-44 xl:w-72 xl:h-72 1xl:h-44 1xl:w-44 2xl:h-64 2xl:w-64 object-cover"
            priority
          />
        </div>
        <motion.div
          style={{ y, opacity }}
          className="h-full w-full flex flex-col justify-between fixed top-0 left-0 gap-8 p-20"
        >
          <h1 className="text-white text-[14.5vw] xl:text-[15vw] 2xl:text-[16vw] font-extrabold tracking-wider select-none pointer-events-none leading-none flex justify-between w-full text-center xl:-translate-y-20">
            ПРИРОДНАЯ
          </h1>
          <div className="grow flex justify-between">
            <p className="title-clamp max-w-1/3 h-fit text-white blur-gray font-bold !leading-none">
              TURAN — это природная минеральная вода, рожденная из глубин веков.
            </p>

            <p className="text-right font-bold text-clamp self-end max-w-1/3 text-white blur-gray !leading-none">
              Она берет свое начало в заповедной зоне Кокшетауской
              возвышенности, где на глубине более 100 метров скрыт реликтовый
              источник, сформированный более 15 000 лет назад талыми водами
              Валдайского ледника. Проходя через древние породы, возраст которых
              исчисляется сотнями миллионов лет, вода насыщается природными
              минералами и сохраняет свою первозданную чистоту. Без
              искусственных добавок, без внешнего воздействия — только идеальный
              баланс, созданный самой природой.
            </p>
          </div>
          <div className="relative w-full grid grid-cols-4 z-30 gap-8">
            {features.map((f) => (
              <div
                key={f.value}
                className="px-8 py-4 flex flex-col items-center text-white blur-gray text-center"
              >
                <span className="title-clamp font-bold">{f.value}</span>
                <span className="text-clamp opacity-80 !leading-none">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </section>
  );
}
