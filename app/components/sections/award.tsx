import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Heading from "../ui/heading";
import MenuButton from "../ui/menu-button";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";

interface AwardSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function AwardSection({ scrollYProgress }: AwardSectionProps) {
  const opacity = useTransform(scrollYProgress, [0.84, 0.86], [0, 1]);
  const moveTextTitleY = useTransform(
    scrollYProgress,
    [0.84, 0.85],
    ["100%", "0%"]
  );

  const moveAwardY1 = useTransform(
    scrollYProgress,
    [0.85, 0.87, 0.88, 0.9],
    ["100%", "0%", "0%", "-100%"]
  );

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.84, 0.85, 0.87, 0.88],
    [0, 1, 1, 0]
  );

  const moveButtonsY = useTransform(
    scrollYProgress,
    [0.88, 0.91],
    ["100%", "0%"]
  );

  const opacityButtons = useTransform(scrollYProgress, [0.87, 0.89], [0, 1]);

  useAutoScrollDown(scrollYProgress, 0.8, 0.9, 12.2);

  return (
    <motion.div
      style={{ opacity }}
      className="relative top-0 h-[200vh] w-full flex items-center justify-center opacity-90 2xl"
    >
      <motion.div className="fixed left-[2.5vw] w-full z-10 top-24">
        <Heading className="!text-[8vw] p-4e !text-black">
          СЕРТИФИЦИРОВАННАЯ
        </Heading>
      </motion.div>
      <div className="fixed w-full h-screen top-0">
        <Image
          src="/bg-hero.webp"
          alt="background"
          fill
          priority
          className="object-cover object-center h-full w-full"
        />
        <Image
          src="/birds.png"
          alt="background"
          fill
          priority
          className="object-cover !top-3 2xl:!top-2 z-30"
        />
      </div>
      <motion.div className="text-right fixed top-0 translate-y-1/2 z-20 p-8 right-4 max-w-1/2 flex flex-col justify-between h-1/2">
        <motion.p
          style={{ y: moveTextTitleY }}
          className="text-lg xl:text-2xl 2xl:text-4xl font-bold mb-4 p-2 backdrop-blur-md rounded-2xl "
        >
          Вода TURAN отмечена более чем 20 республиканскими и международными
          наградами за безупречное качество,природный состав и высокие
          производственные стандарты
        </motion.p>
        <motion.div
          style={{ y: moveAwardY1, opacity: opacityText1 }}
          className="flex flex-col gap-4 relative right-80 xl:right-0"
        >
          <div className="flex items-center justify-between gap-4">
            <Image
              src="/awards/gold1.png"
              alt="background"
              height={10}
              width={10}
              priority
              className="h-32 w-20"
              unoptimized
            />
            <Image
              src="/awards/gold2.png"
              alt="background"
              height={10}
              width={10}
              priority
              className="h-32 w-20"
              unoptimized
            />
            <Image
              src="/awards/gold3.png"
              alt="background"
              height={10}
              width={10}
              priority
              className="h-32 w-20"
              unoptimized
            />
            <Image
              src="/awards/gold4.png"
              alt="background"
              height={10}
              width={10}
              priority
              className="h-28 w-28"
              unoptimized
            />
            <Image
              src="/awards/gold5.png"
              alt="background"
              height={10}
              width={10}
              priority
              className="h-28 w-28"
              unoptimized
            />
            <Image
              src="/awards/gold6.png"
              alt="background"
              height={10}
              width={10}
              priority
              className="h-28 w-28"
              unoptimized
            />
            <Image
              src="/awards/gold7.png"
              alt="background"
              height={10}
              width={10}
              priority
              className="h-28 w-28"
              unoptimized
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <Image
              src="/awards/silver1.png"
              alt="background"
              height={10}
              width={10}
              priority
              className="h-28 w-28"
              unoptimized
            />
            <Image
              src="/awards/silver2.png"
              alt="background"
              height={10}
              width={10}
              priority
              className="h-28 w-28"
              unoptimized
            />
            <Image
              src="/awards/silver3.png"
              alt="background"
              height={10}
              width={10}
              priority
              className="h-28 w-28"
              unoptimized
            />
            <Image
              src="/awards/silver4.png"
              alt="background"
              height={10}
              width={10}
              priority
              className="h-28 w-28"
              unoptimized
            />
            <Image
              src="/awards/silver5.png"
              alt="background"
              height={10}
              width={10}
              priority
              className="h-28 w-28"
              unoptimized
            />
            <Image
              src="/awards/silver6.png"
              alt="background"
              height={10}
              width={10}
              priority
              className="h-28 w-28"
              unoptimized
            />
          </div>
        </motion.div>
        <motion.p
          style={{ y: moveAwardY1, opacity: opacityText1 }}
          className="text-base xl:text-lg 2xl:text-2xl p-2 backdrop-blur-md rounded-2xl"
        >
          Вот уже несколько лет подряд TURAN получает высшую награду от Monde
          Selection — одного из самых авторитетных европейских институтов оценки
          качества. Эта независимая экспертиза проводится в Брюсселе, и включает
          слепую дегустацию, анализ состава и производственного процесса
        </motion.p>
      </motion.div>
      <motion.div
        style={{ opacity: opacityButtons, y: moveButtonsY }}
        className="text-right fixed bottom-10 h-fit z-20 p-8 right-4 w-full"
      >
        <div className="w-full flex justify-between gap-8 items-center px-8 py-2">
          <div className="flex flex-col gap-4">
            <MenuButton>АССОРТИМЕНТ</MenuButton>
            <MenuButton>ПОЛЕЗНО ЗНАТЬ</MenuButton>
          </div>
          {/* Правая колонка */}
          <div className="flex flex-col items-end gap-4">
            <MenuButton>ДОСТАВКА</MenuButton>
            <MenuButton>СОЦИАЛЬНАЯ ОТВЕТСТВЕННОСТЬ</MenuButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
