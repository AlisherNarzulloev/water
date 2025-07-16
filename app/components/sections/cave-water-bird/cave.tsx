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
      <div className="fixed z-20 inset-0 p-20 h-full w-full">
        <motion.h1
          style={{ opacity: titleOpacity }}
          className="fixed left-1/2 top-10 -translate-x-1/2 w-full px-20"
        >
          <div className="w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1280 211"
            >
              <path
                fill="#fff"
                d="M176.135 211 110.479 60.588 46.017 211H.257L94.96.105h31.435L221.895 211h-45.76Zm54.875 0V.105h169.512v40.19H272.791v38.597h77.594v40.19h-77.594v51.729H408.48V211H231.01ZM482.841 40.294V211h-42.179V.105H606.99v40.19H482.841ZM785.636 211 710.43 106.746l-36.211 30.64V211h-41.781V.105h41.781v87.143L775.688.105h55.31l-89.531 78.787L836.569 211h-50.933ZM958.617 62.18l-27.854 56.504h56.106L958.617 62.18ZM1032.63 211l-25.87-52.127h-95.893L885.798 211H839.64L943.098.105h31.436L1078.79 211h-46.16Zm151.07-84.358L1131.18 211h-49.35l55.71-87.939c-14.59-3.184-26.39-9.285-35.41-18.304-10.08-10.08-15.12-23.875-15.12-41.384 0-18.569 5.43-33.292 16.31-44.168 12.73-12.734 32.5-19.1 59.29-19.1h116.99V211h-41.78v-84.358h-54.12Zm54.12-87.143h-79.19c-9.28 0-16.18 1.724-20.69 5.172-5.57 3.449-8.36 9.418-8.36 17.907 0 7.958 2.52 14.06 7.56 18.304 5.04 4.244 13 6.366 23.88 6.366h76.8v-47.75Z"
              />
            </svg>
          </div>
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
