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
        className="relative top-0 w-full h-screen z-20 pointer-events-none snap-end  bg-nature"
        style={{ opacity, scale }}
      >
        <div className="h-full w-full bg-contain bg-center 1xl:bg-center bg-nature fixed z-0 top-0" />
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
          <div className="w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1280 170"
            >
              <path
                fill="#fff"
                d="M89.685 139V29.245H27.772V139H.652V3.406h115.896V139H89.685Zm83.607-78.03h47.586c6.481 0 11.257-1.28 14.327-3.838 3.411-3.411 5.117-7.675 5.117-12.792 0-4.605-1.536-8.443-4.606-11.513-2.729-2.388-7.248-3.582-13.559-3.582h-48.865V60.97ZM146.173 3.405h77.007c14.668 0 25.925 3.922 33.771 11.768 7.334 6.993 11.001 16.8 11.001 29.422 0 12.28-3.752 22.513-11.257 30.7-7.504 7.846-17.909 11.769-31.212 11.769h-52.191V139h-27.119V3.406ZM372.48 50.992 303.404 139h-18.421V3.406h26.863v88.008l68.821-88.008h18.676V139H372.48V50.992Zm83.643 9.977h47.586c6.481 0 11.257-1.279 14.327-3.837 3.411-3.411 5.117-7.675 5.117-12.792 0-4.605-1.535-8.443-4.605-11.513-2.729-2.388-7.249-3.582-13.56-3.582h-48.865V60.97ZM429.004 3.406h77.008c14.668 0 25.925 3.922 33.77 11.768 7.334 6.993 11.002 16.8 11.002 29.422 0 12.28-3.753 22.513-11.257 30.7-7.505 7.846-17.909 11.769-31.213 11.769h-52.191V139h-27.119V3.406Zm202.93 23.28c-12.109 0-22.258 4.18-30.445 12.537-8.016 8.357-12.024 19.103-12.024 32.236 0 13.133 4.008 23.878 12.024 32.235 8.187 8.358 18.336 12.536 30.445 12.536 12.281 0 22.429-4.178 30.445-12.536 8.187-8.357 12.28-19.102 12.28-32.235s-4.093-23.879-12.28-32.236c-8.016-8.357-18.164-12.536-30.445-12.536Zm50.145 95.684c-13.304 13.304-30.019 19.956-50.145 19.956-20.126 0-36.84-6.652-50.144-19.956-13.304-13.474-19.955-30.444-19.955-50.911 0-20.467 6.651-37.353 19.955-50.656C595.094 7.328 611.808.59 631.934.59c20.126 0 36.841 6.737 50.145 20.212 13.474 13.303 20.211 30.189 20.211 50.656s-6.737 37.437-20.211 50.911Zm128.782-8.698-27.374-67.797-27.119 67.797h54.493Zm26.863 56.029V139H729.505v30.701h-22.514v-56.029h20.211L775.044 3.15h16.885l48.098 110.522h20.211v56.029h-22.514ZM963.657 139V78.11H902V139h-27.119V3.406H902v49.12h61.657V3.407h27.119V139h-27.119ZM1073.1 43.316l-17.91 36.33h36.08l-18.17-36.33ZM1120.69 139l-16.63-33.515h-61.66L1026.29 139h-29.682L1063.13 3.406h20.21L1150.37 139h-29.68Zm97.13-54.238L1184.05 139h-31.72l35.81-56.54c-9.38-2.047-16.97-5.97-22.77-11.769-6.48-6.481-9.72-15.35-9.72-26.607 0-11.94 3.5-21.405 10.49-28.398 8.19-8.187 20.89-12.28 38.12-12.28h75.22V139h-26.87V84.762h-34.79Zm34.79-56.028h-50.91c-5.97 0-10.4 1.108-13.3 3.325-3.58 2.218-5.37 6.055-5.37 11.513 0 5.117 1.62 9.04 4.86 11.769 3.24 2.729 8.35 4.093 15.35 4.093h49.37v-30.7Z"
              />
            </svg>
          </div>
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
