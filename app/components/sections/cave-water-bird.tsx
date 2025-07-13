import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import Heading from "../ui/heading";

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

      <div className="h-screen">
        <motion.div
          style={{ opacity: textOneOpacity, y: textOneY }}
          className="fixed top-0 z-20 flex flex-col justify-between h-full pb-12 w-full items-center px-8"
        >
          <Heading>ЛЕГКАЯ</Heading>
          <div className="self-end max-w-4xl text-right p-4 backdrop-blur-md rounded-2xl text-white">
            <p className="font-bold text-3xl">
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
          <p className="max-w-[454px] text-lg self-start p-4 backdrop-blur-md rounded-2xl font-bold text-white">
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
          <Heading>ЖИВАЯ</Heading>

          <div className="self-start max-w-2xl text-left font-bold p-4 backdrop-blur-md rounded-2xl text-white">
            <p className=" text-3xl">
              <span className="text-5xl">TURAN</span> — это вода, которая
              сохраняет всё, чем её наделила природа
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
          <p className="max-w-2xl text-lg font-bold self-end text-right p-4 backdrop-blur-md rounded-2xl text-white">
            TURAN — вода, которую не создают, а бережно сохраняют. Без осмоса.
            Без химии. Без добавок. Только механическая очистка и природная
            формула, нетронутая временем.
          </p>
        </motion.div>
      </div>
      <div className="h-[200vh]">
        <motion.h1
          style={{ opacity: textThreeOpacity, y: textThreeY }}
          className="fixed top-0 left-1/2 -mt-10 -translate-x-1/2 text-white text-[160px] font-extrabold tracking-widest select-none pointer-events-none leading-none z-0"
        >
          СБАЛАНСИРОВАННАЯ
        </motion.h1>
        <Image
          width={100}
          height={100}
          src={"/bird.png"}
          className="absolute -bottom-44 z-10 w-full h-fit"
          alt="bird"
          unoptimized
        />
        <div className="fixed top-0 z-20 h-full pb-12 w-full px-8">
          <motion.p
            style={{ opacity: textThreeOpacity, y: textThreeY }}
            className="self-end max-w-xl font-bold text-right absolute top-1/2 -translate-y-1/2 right-8 z-10 p-4 backdrop-blur-[6px] rounded-2xl text-white text-lg"
          >
            pH — это показатель кислотно-щелочного равновесия. Вода с pH 7,5
            мягко поддерживает внутренний баланс, не вызывая ни закисления, ни
            ощелачивания. Она легко усваивается, не перегружает организм,
            способствует нормализации обменных процессов и помогает телу
            сохранять внутреннюю стабильность, особенно при умственных и
            физических нагрузках, стрессах или нарушениях питания
          </motion.p>
          <motion.p
            style={{ opacity: textThreeOpacity, y: textThreeY }}
            className="max-w-2xl self-start text-left absolute bottom-8 left-8 z-10 p-4 backdrop-blur-[6px] rounded-2xl font-bold text-white text-lg"
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
