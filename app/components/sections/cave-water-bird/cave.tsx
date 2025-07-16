import { motion, MotionValue, useTransform } from "framer-motion";
import { ScrollStep } from "../../ui/scroll-step";
import { createScrollBlocks } from "@/app/utils/createScrollBlock";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";

interface CaveSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function CaveSection({ scrollYProgress }: CaveSectionProps) {
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.07, 0.1, 0.17, 0.2],
    [0, 1, 1, 0]
  );

  useAutoScrollDown(scrollYProgress, 0.07, 0.12, 1.8);
  useAutoScrollDown(scrollYProgress, 0.13, 0.17, 2.7);

  const blocks = createScrollBlocks(0.08, 0.03, [
    {
      left: (
        <div className="text-white blur-blue p-4 leading-tight">
          <p className="title-clamp">
            Природная минеральная вода TURAN добывается из источника Бұқпа на
            месторождении Кусколь — одном из 5 редких источников легкой воды на
            планете
          </p>
          <p className="text-clamp">
            И в этом коротком списке он занимает уверенную вторую позицию. Легче
            воды TURAN только талые воды ледников Антарктики. Но в отличие от
            лидера списка TURAN доступен всем желающим.
          </p>
        </div>
      ),
      right: (
        <p className="text-white text-clamp blur-blue p-4 leading-tight">
          Легкая вода — это научный термин, описывающий воду с низким
          содержанием дейтерия (тяжелого водорода). Она не создаётся
          искусственно, а добывается в местах с особой геологией и экологической
          чистотой. Исследования доказали её уникальный оздоровительный эффект,
          включая омоложение и продление жизни.
        </p>
      ),
      reverse: true,
    },
    {
      left: (
        <div className="text-white blur-blue p-4 leading-tight">
          <p className="title-clamp">Лёгкая вода:</p>
          <p className="text-clamp">
            - Помогает клеткам вырабатывать больше энергии. <br />
            - Активизирует естественные защитные силы. <br />
            - Улучшает обмен веществ. <br />- Замедляет старение на клеточном
            уровне.
          </p>
        </div>
      ),
      right: (
        <p className="text-white text-clamp blur-blue p-4 leading-tight">
          Венгерский учёный Габор Шомлай подтвердил: лёгкая вода способна
          замедлить метастазирование, восстанавливая защитные функции организма.
          Это научно подтверждённая истина, ведь её структура максимально
          приближена к межклеточной жидкости человека. Регулярное употребление
          лёгкой воды — это ясность ума, лёгкость в теле и накопительный эффект
          оздоровления.
        </p>
      ),
    },
  ]);

  return (
    <section className="relative w-full h-screen">
      <div className="fixed z-20 inset-0 p-20 2xl:px-40 h-full w-full">
        <motion.h1
          style={{ opacity: titleOpacity }}
          className="text-[20vw] font-extrabold text-white leading-none text-center fixed  -top-10 z-10 left-1/2 -translate-x-1/2"
        >
          ЛЕГКАЯ
        </motion.h1>
        <div className="relative h-full w-full">
          <ScrollStep
            key={0}
            progress={scrollYProgress}
            range={blocks[0].range}
            left={blocks[0].right}
            right={blocks[0].left}
            leftAlign="bottom" // левый — внизу
            rightAlign="center" // правый — по центру
          />
          <ScrollStep
            key={1}
            progress={scrollYProgress}
            range={blocks[1].range}
            left={blocks[1].left}
            right={blocks[1].right}
            leftAlign="center" // левый — по центру
            rightAlign="bottom" // правый — внизу
          />
        </div>
      </div>
    </section>
  );
}
