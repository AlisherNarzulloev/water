import Image from "next/image";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";

interface KazakhSectionProps {
  scrollYProgress: MotionValue<number>;
}

const features = [
  {
    value: "Источник",
    label:
      "Природный, глубинный, расположен в заповедной зоне Кокшетауской возвышенности.",
  },
  {
    value: "Розлив",
    label:
      "На собственном заводе, оснащенном самыми современными автоматизированными линиями розлива от ведущих мировых производителей: Krones, Sidel, FBT, KHS, общей производственной мощностью более 70 000 бутылок в час.",
  },
  {
    value: "Упаковка",
    label:
      "Даже РЕТ преформы (заготовки для бутылок), которые все закупают у поставщиков, мы производим сами, здесь же на заводе.",
  },
];

export default function KazakhSection({ scrollYProgress }: KazakhSectionProps) {
  const textBuildingY = useTransform(
    scrollYProgress,
    [0.61, 0.63, 0.65, 0.67],
    ["200%", "-10%", "-10%", "-200%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0.55, 0.6, 0.64, 0.67],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0.5, 0.51, 0.6, 0.61],
    [0, 5, 3, 1]
  );

  const x = useTransform(
    scrollYProgress,
    [0.5, 0.51, 0.6],
    ["-100%", "-100%", "0%"]
  );

  const y = useTransform(
    scrollYProgress,
    [0.5, 0.51, 0.6],
    ["100%", "100%", "0%"]
  );

  useAutoScrollDown(scrollYProgress, 0.49, 0.6, 8.9);

  return (
    <div className="h-screen relative top-0 z-20">
      <motion.div
        style={{ scale, y, x, opacity }}
        className="h-screen w-full fixed top-0 z-10"
      >
        <Image
          src={"/kazakh_back.webp"}
          width={100}
          height={100}
          alt="building"
          className="w-full h-screen object-cover"
          unoptimized
        />
      </motion.div>
      <motion.div
        style={{ scale, y, x, opacity }}
        className="h-screen fixed top-0 z-20 w-full"
      >
        <Image
          src={"/kazakh_building.webp"}
          width={100}
          height={100}
          alt="building"
          className="w-full h-screen object-cover"
          unoptimized
        />
      </motion.div>
      <motion.div
        style={{ y: textBuildingY, opacity }}
        className="fixed top-24 z-10 flex flex-col justify-between h-full w-full items-center px-8"
      >
        <div className="flex flex-col items-start leading-none -mt-8 xl:-mt-0">
          <h1 className="text-white text-[10vw] font-extrabold tracking-widest select-none pointer-events-none leading-none -ml-5 xl:-ml-7 2xl:-ml-10">
            100%
          </h1>
          <h1 className="text-white text-[11vw] font-extrabold tracking-widest select-none pointer-events-none leading-none -mt-10 xl:-mt-14 2xl:-mt-20">
            КАЗАХСТАНСКАЯ
          </h1>
        </div>
      </motion.div>
      <div className="h-screen w-full">
        <motion.div
          style={{ y: textBuildingY }}
          className="fixed -bottom-20 z-[99] h-full pb-12 w-full items-center px-8 text-white"
        >
          <div className="self-end max-w-3/5 absolute top-1/2 -translate-y-1/2 left-4 xl:left-8 p-4 backdrop-blur-[6px] rounded-2xl -mt-16 xl:mt-7">
            <p className="font-bold text-lg xl:text-3xl">
              Локальность как принцип. Независимость как выбор. TURAN — это не
              просто вода с казахстанским адресом на этикетке. Это продукт, в
              котором всё, без исключений, — казахстанского происхождения. Не на
              бумаге, а на деле: от источникаи производственной цепочки до
              упаковки.
            </p>
            <p className="text-base xl:text-xl 2xl:text-2xl mt-4">
              И в этом коротком списке он занимает уверенную вторую позицию.
              Легче воды TURAN только талые воды ледников Антарктики. Но в
              отличие от лидера списка TURAN доступен всем желающим.
            </p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full px-8 grid grid-cols-3 gap-4 xl:gap-8 z-30">
            {features.map((f) => (
              <div
                key={f.value}
                className="px-8 py-4 flex flex-col items-center text-white backdrop-blur-sm rounded-2xl"
              >
                <span className="text-xl xl:text-3xl 2xl:text-6xl font-bold">
                  {f.value}
                </span>
                <span className="text-base xl:text-lg 2xl:text-2xl opacity-80 text-center font-medium leading-tight">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
