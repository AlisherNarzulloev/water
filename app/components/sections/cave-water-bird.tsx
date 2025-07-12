import { motion, MotionValue } from "framer-motion";
import Image from "next/image";

interface CaveWaterBirdSectionProps {
  opacity: MotionValue<number>;
  textOneOpacity: MotionValue<number>;
  textTwoOpacity: MotionValue<number>;
  textThreeOpacity: MotionValue<number>;
  textOneY: MotionValue<number>;
  textTwoY: MotionValue<number>;
  textThreeY: MotionValue<number>;
}

export default function CaveWaterBird({
  opacity,
  textOneOpacity,
  textOneY,
  textTwoOpacity,
  textTwoY,
  textThreeOpacity,
  textThreeY,
}: CaveWaterBirdSectionProps) {
  return (
    <motion.section
      className="relative top-[310vh] w-full h-[500vh] z-0 pointer-events-none overflow-hidden"
      style={{ opacity }}
    >
      <Image
        width={100}
        height={100}
        className="select-none pointer-events-none h-full w-full"
        src={"/bg-without-bird.png"}
        alt="bg-cave-water-bird"
        unoptimized
      />
      <Image
        width={100}
        height={100}
        src={"/bird.png"}
        className="absolute -bottom-44 z-10 w-full h-fit"
        alt="bird"
        unoptimized
      />
      <div className="h-screen">
        <motion.div
          style={{ opacity: textOneOpacity, y: textOneY }}
          className="fixed top-0 z-20 flex flex-col justify-between h-full pb-12 w-full items-center px-8"
        >
          <h1 className="text-white text-[180px] md:text-[400px] font-extrabold tracking-tight select-none pointer-events-none leading-none">
            ЛЕГКАЯ
          </h1>
          <div className="self-end max-w-2xl text-right">
            <p className="font-bold text-2xl">
              Природная минеральная вода TURAN добывается из источника Бұқпа на
              месторождении Кусколь - одном из 5 редких источников легкой воды
              на планете
            </p>
            <p>
              И в этом коротком списке он занимает уверенную вторую позицию.
              Легче воды TURAN только талые воды ледников Антарктики. Но в
              отличие от лидера списка TURAN доступен всем желающим.
            </p>
          </div>
          <p className="max-w-2xl self-start">
            Легкая вода — это научный термин, описывающий воду с низким
            содержанием дейтерия (тяжелого водорода). Она не создаётся
            искусственно, а добывается в местах с особой геологией и
            экологической чистотой. Исследования доказали её уникальный
            оздоровительный эффект, включая омоложение и продление жизни.
          </p>
        </motion.div>
      </div>
      <div className="h-screen">
        <motion.div
          style={{ opacity: textTwoOpacity, y: textTwoY }}
          className="fixed top-0 z-20 flex flex-col justify-between h-full pb-12 w-full items-center px-8"
        >
          <h1 className="text-white text-[180px] md:text-[400px] font-extrabold tracking-tight select-none pointer-events-none leading-none">
            ЖИВАЯ
          </h1>
          <div className="self-start max-w-2xl text-left">
            <p className="font-bold text-4xl">
              TURAN — это вода, которая сохраняет всё, чем её наделила природа
            </p>
            <p>
              Её уникальность — в абсолютной чистоте, поэтому она не требует
              глубоких вмешательств. В отличие от большинства бутилированной
              воды, TURAN не подвергается химическим манипуляциям, не проходит
              осмос (так как он вместе с обеззараживанием «убивает» и все
              полезные свойства воды), не обременена искусственной
              минерализацией. Её формула создана природой и подтверждена наукой
            </p>
          </div>
          <p className="max-w-2xl self-end text-right">
            TURAN — вода, которую не создают, а бережно сохраняют. Без осмоса.
            Без химии. Без добавок. Только механическая очистка и природная
            формула, нетронутая временем.
          </p>
        </motion.div>
      </div>
      <div className="h-screen">
        <div className="fixed top-0 flex flex-col z-10 justify-between h-full pb-12 w-full items-center px-8">
          <motion.h1
            style={{ opacity: textThreeOpacity, y: textThreeY }}
            className="text-white text-[180px] md:text-[150px] font-extrabold tracking-tight select-none pointer-events-none leading-none relative z-0"
          >
            СБАЛАНСИРОВАННАЯ
          </motion.h1>
          <motion.div
            style={{ opacity: textThreeOpacity, y: textThreeY }}
            className="self-end max-w-2xl text-right relative z-10"
          >
            <p>
              pH — это показатель кислотно-щелочного равновесия. Вода с pH 7,5
              мягко поддерживает внутренний баланс, не вызывая ни закисления, ни
              ощелачивания. Она легко усваивается, не перегружает организм,
              способствует нормализации обменных процессов и помогает телу
              сохранять внутреннюю стабильность, особенно при умственных и
              физических нагрузках, стрессах или нарушениях питания
            </p>
          </motion.div>
          <motion.p
            style={{ opacity: textThreeOpacity, y: textThreeY }}
            className="max-w-2xl self-start text-left relative z-10"
          >
            Такой уровень кислотно-щелочного баланса максимально близок к
            внутренней среде человека, особенно к плазме крови и лимфе. Это
            делает воду TURAN не просто утоляющей жажду, а физиологически
            подходящей для ежедневного употребления.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
