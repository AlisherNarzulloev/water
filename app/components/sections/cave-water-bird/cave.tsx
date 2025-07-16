import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import { useState } from "react";

interface CaveSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function CaveSection({ scrollYProgress }: CaveSectionProps) {
  const [showBlock1, setShowBlock1] = useState(false);
  const [showBlock2, setShowBlock2] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowBlock1(v > 0.25 && v < 0.3);
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowBlock2(v > 0.3 && v < 0.35);
  });
  const opacityTitle = useTransform(
    scrollYProgress,
    [0.26, 0.29, 0.35, 0.35],
    [0, 1, 1, 0]
  );

  const textY1 = useTransform(
    scrollYProgress,
    [0.25, 0.26, 0.29, 0.31],
    [100, 0, 0, -100]
  );
  const opacityText1 = useTransform(
    scrollYProgress,
    [0.25, 0.26, 0.29, 0.3],
    [0, 1, 1, 0]
  );

  const textY2 = useTransform(
    scrollYProgress,
    [0.29, 0.31, 0.33, 0.35],
    [100, 0, 0, -100]
  );
  const opacityText2 = useTransform(
    scrollYProgress,
    [0.29, 0.31, 0.33, 0.35],
    [0, 1, 1, 0]
  );

  useAutoScrollDown(scrollYProgress, 0.16, 0.3, 4);
  useAutoScrollDown(scrollYProgress, 0.29, 0.32, 4.5);

  return (
    <div className="h-full relative w-full">
      <div className="fixed bottom-20 h-screen w-full flex flex-col justify-end px-20">
        <motion.div
          style={{ opacity: opacityTitle }}
          className="text-center w-full -translate-y-0 2xl:-translate-y-20 flex justify-center px-20"
        >
          <p className="text-white text-[22vw] font-extrabold tracking-widest select-none pointer-events-none leading-none">
            ЛЕГКАЯ
          </p>
        </motion.div>
        <AnimatePresence>
          {showBlock1 && (
            <motion.div
              style={{ opacity: opacityText1, y: textY1 }}
              className="flex flex-col items-end h-full gap-8 justify-between w-full"
            >
              <div className="self-end mt-4 max-w-4/5 xl:max-w-3/4 text-right blur-blue text-white">
                <p className="font-bold title-clamp">
                  Природная минеральная вода TURAN добывается из источника Бұқпа
                  на месторождении Кусколь - одном из 5 редких источников легкой
                  воды на планете
                </p>
                <p className="text-clamp mt-4 ">
                  И в этом коротком списке он занимает уверенную вторую позицию.
                  Легче воды TURAN только талые воды ледников Антарктики. Но в
                  отличие от лидера списка TURAN доступен всем желающим.
                </p>
              </div>
              <p className="max-w-4/5 xl:max-w-2/3 text-clamp self-start blur-blue font-bold text-white">
                Легкая вода — это научный термин, описывающий воду с низким
                содержанием дейтерия (тяжелого водорода). Она не создаётся
                искусственно, а добывается в местах с особой геологией и
                экологической чистотой. Исследования доказали её уникальный
                оздоровительный эффект, включая омоложение и продление жизни.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showBlock2 && (
            <motion.div
              style={{ opacity: opacityText2, y: textY2 }}
              className="flex items-end 2xl:flex-col h-full gap-8 justify-end w-full"
            >
              <div className="w-full 2xl:w-1/2 h-fit blur-blue 2xl:self-start text-white">
                <p className="font-bold title-clamp">Лёгкая вода:</p>
                <p className="text-clamp mt-4 ">
                  - Помогает клеткам вырабатывать больше энергии. В митохондриях
                  снижается тормозящий эффект тяжёлых молекул. В результате чего
                  организм быстрее восстанавливается, дольше остаётся бодрым и
                  устойчивым к нагрузкам. <br /> - Помогает активизировать
                  естественные защитные силы. Организм лучше справляется со
                  стрессами, вирусами и воспалениями. <br /> - Улучшает обмен
                  веществ - ускоряет ключевые биохимические процессы. Это
                  помогает телу эффективнее усваивать питательные вещества,
                  избавляться от токсинов и поддерживать баланс.
                  <br /> - Замедляет старение на клеточном уровне. Защищает ДНК
                  и способствует обновлению клеток. Это помогает дольше
                  сохранять внутреннюю молодость и стабильность работы органов и
                  систем.
                </p>
              </div>
              <p className="w-full 2xl:w-1/2 h-fit text-clamp blur-blue font-bold text-white">
                Венгерский ученый Габор Шомлай подтвердил: лёгкая вода способна
                замедлить метастазирование, восстанавливая защитные функции
                организма. И это не просто слова, это научно подтвержденная
                истина, скрытая в самой структуре воды - легкая вода с уровнем
                дейтерия ниже 135 ppm, редка и особо ценна, ведь её структура
                максимально приближена к межклеточной жидкости нашего организма.
                Лёгкая вода — это не лекарство, а природная поддержка организма.
                Она работает мягко, но эффективно, помогая телу включать
                собственные ресурсы. Ее регулярное употребление имеет
                накопительный эффект — улучшение самочувствия, ясность ума и
                лёгкость в теле становятся естественной нормой.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
