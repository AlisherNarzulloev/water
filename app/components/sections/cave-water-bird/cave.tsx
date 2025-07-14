import { motion, MotionValue, useTransform } from "framer-motion";
import Heading from "../../ui/heading";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";

interface CaveSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function CaveSection({ scrollYProgress }: CaveSectionProps) {
  const opacity = useTransform(scrollYProgress, [0.25, 0.29, 0.35], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0.27, 0.29, 0.35], [100, 0, -100]);

  useAutoScrollDown(scrollYProgress, 0.16, 0.3, 4);

  return (
    <>
      <motion.div
        style={{ opacity, y }}
        className="fixed top-0 xl:-top-12 1xl:top-0 2xl:-top-14 flex flex-col justify-between h-full pb-12 w-full items-center px-8"
      >
        <Heading>ЛЕГКАЯ</Heading>
      </motion.div>
      <motion.div
        style={{ opacity, y }}
        className="self-end fixed top-1/2 -translate-y-1/2 right-8 max-w-2/3 xl:max-w-3/5 text-right p-4 backdrop-blur-md rounded-2xl text-white -mt-24 xl:-mt-0"
      >
        <p className="font-bold text-xl xl:text-3xl 2xl:text-5xl">
          Природная минеральная вода TURAN добывается из источника Бұқпа на
          месторождении Кусколь - одном из 5 редких источников легкой воды на
          планете
        </p>
        <p className="text-lg xl:text-xl 2xl:text-3xl mt-4">
          И в этом коротком списке он занимает уверенную вторую позицию. Легче
          воды TURAN только талые воды ледников Антарктики. Но в отличие от
          лидера списка TURAN доступен всем желающим.
        </p>
      </motion.div>

      <motion.p
        style={{ opacity, y }}
        className="fixed bottom-14 left-8 max-w-3/5 xl:max-w-2/3 text-base xl:text-lx 2xl:text-3xl self-start p-4 backdrop-blur-md rounded-2xl font-bold text-white"
      >
        Легкая вода — это научный термин, описывающий воду с низким содержанием
        дейтерия (тяжелого водорода). Она не создаётся искусственно, а
        добывается в местах с особой геологией и экологической чистотой.
        Исследования доказали её уникальный оздоровительный эффект, включая
        омоложение и продление жизни.
      </motion.p>
    </>
  );
}
