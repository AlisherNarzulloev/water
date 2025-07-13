import { motion, MotionValue, useTransform } from "framer-motion";
import Heading from "../../ui/heading";

interface CaveSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function CaveSection({ scrollYProgress }: CaveSectionProps) {
  const opacity = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.45, 0.5],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.45, 0.5],
    [100, 0, 0, -100]
  );

  return (
    <div className="h-screen">
      <motion.div
        style={{ opacity, y }}
        className="fixed top-0 z-20 flex flex-col justify-between h-full pb-12 w-full items-center px-8"
      >
        <Heading>ЛЕГКАЯ</Heading>
        <div className="self-end max-w-4xl text-right p-4 backdrop-blur-md rounded-2xl text-white">
          <p className="font-bold text-3xl">
            Природная минеральная вода TURAN добывается из источника Бұқпа на
            месторождении Кусколь - одном из 5 редких источников легкой воды на
            планете
          </p>
          <p>
            И в этом коротком списке он занимает уверенную вторую позицию. Легче
            воды TURAN только талые воды ледников Антарктики. Но в отличие от
            лидера списка TURAN доступен всем желающим.
          </p>
        </div>
        <p className="max-w-[454px] text-lg self-start p-4 backdrop-blur-md rounded-2xl font-bold text-white">
          Легкая вода — это научный термин, описывающий воду с низким
          содержанием дейтерия (тяжелого водорода). Она не создаётся
          искусственно, а добывается в местах с особой геологией и экологической
          чистотой. Исследования доказали её уникальный оздоровительный эффект,
          включая омоложение и продление жизни.
        </p>
      </motion.div>
    </div>
  );
}
