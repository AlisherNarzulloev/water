import Image from "next/image";
import { motion, MotionValue, useTransform } from "framer-motion";

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
  const opacityClouds = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.95, 1],
    [0, 1, 1, 0]
  );

  const moveBuildingY = useTransform(
    scrollYProgress,
    [0.8, 0.85],
    ["100%", "0%"]
  );
  const moveBuildingBackY = useTransform(
    scrollYProgress,
    [0.8, 0.85],
    ["130%", "0%"]
  );

  const opacityBackBuilding = useTransform(
    scrollYProgress,
    [0.8, 0.85],
    [0, 1]
  );

  const opacityBgSky = useTransform(scrollYProgress, [0.7, 0.75], [0, 1]);

  const textBuildingY = useTransform(
    scrollYProgress,
    [0.8, 0.9],
    ["200%", "-10%"]
  );
  return (
    <>
      <motion.div
        style={{ y: moveBuildingY }}
        className="h-screen fixed top-0 z-30 w-full"
      >
        <Image
          src={"/kazakh_building.png"}
          width={100}
          height={100}
          alt="building"
          className="w-full h-screen object-cover"
          unoptimized
        />
      </motion.div>
      <motion.div
        style={{ y: textBuildingY }}
        className="fixed top-24 z-20 flex flex-col justify-between h-full w-full items-center px-8"
      >
        <div className="flex flex-col items-start leading-none -mt-8 xl:-mt-0">
          <h1 className="text-white text-[100px] xl:text-[130px] font-extrabold tracking-widest select-none pointer-events-none leading-none -ml-5">
            100%
          </h1>
          <h1 className="text-white text-[110px] xl:text-[210px] font-extrabold tracking-widest select-none pointer-events-none leading-none -mt-10 xl:-mt-20">
            КАЗАХСТАНСКАЯ
          </h1>
        </div>
      </motion.div>
      <motion.div
        style={{ opacity: opacityBgSky }}
        className="bg-[#91afeb] h-screen w-full fixed top-0 z-10"
      ></motion.div>
      <div className="h-screen">
        <motion.div
          style={{ y: textBuildingY }}
          className="fixed -bottom-20 z-30 h-full pb-12 w-full items-center px-8 text-white"
        >
          <div className="self-end max-w-2xl absolute top-1/2 -translate-y-1/2 left-4 xl:left-8 p-4 backdrop-blur-[6px] rounded-2xl overflow-hidden -mt-16 xl:-mt-0">
            <p className="font-bold text-lg xl:text-2xl">
              Локальность как принцип. Независимость как выбор. TURAN — это не
              просто вода с казахстанским адресом на этикетке. Это продукт, в
              котором всё, без исключений, — казахстанского происхождения. Не на
              бумаге, а на деле: от источникаи производственной цепочки до
              упаковки.
            </p>
            <p>
              И в этом коротком списке он занимает уверенную вторую позицию.
              Легче воды TURAN только талые воды ледников Антарктики. Но в
              отличие от лидера списка TURAN доступен всем желающим.
            </p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full px-8 grid grid-cols-3 gap-4 xl:gap-8 z-30">
            {features.map((f) => (
              <div
                key={f.value}
                className="px-8 py-4 flex flex-col items-center text-white backdrop-blur-sm rounded-2xl overflow-hidden"
              >
                <span className="text-xl xl:text-3xl font-bold">{f.value}</span>
                <span className="text-base xl:text-lg opacity-80 text-center font-medium leading-tight">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{ y: moveBuildingBackY, opacity: opacityBackBuilding }}
        className="h-screen w-full fixed top-0 z-10 "
      >
        <Image
          src={"/kazakh_back.jpg"}
          width={100}
          height={100}
          alt="building"
          className="w-full h-screen object-cover"
          unoptimized
        />
      </motion.div>

      <motion.div
        style={{ opacity: opacityClouds }}
        className="h-[200vh] w-full fixed top-0"
      ></motion.div>
    </>
  );
}
