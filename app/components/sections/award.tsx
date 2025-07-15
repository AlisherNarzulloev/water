import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Heading from "../ui/heading";
import MenuButton from "../ui/menu-button";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";

interface AwardSectionProps {
  scrollYProgress: MotionValue<number>;
}

const golds = [
  {
    url: "/awards/gold1.png",
    className: "h-32 w-20",
  },
  {
    url: "/awards/gold2.png",
    className: "h-32 w-20",
  },
  {
    url: "/awards/gold3.png",
    className: "h-32 w-20",
  },
  {
    url: "/awards/gold4.png",
    className: "h-28 w-28",
  },
  {
    url: "/awards/gold5.png",
    className: "h-28 w-28",
  },
  {
    url: "/awards/gold6.png",
    className: "h-28 w-28",
  },
  {
    url: "/awards/gold7.png",
    className: "h-28 w-28",
  },
];

const silvers = [
  {
    url: "/awards/silver5.png",
    className: "h-28 w-28",
  },
  {
    url: "/awards/silver6.png",
    className: "h-28 w-28",
  },
  {
    url: "/awards/silver1.png",
    className: "h-28 w-28",
  },
  {
    url: "/awards/silver2.png",
    className: "h-28 w-28",
  },
];

export default function AwardSection({ scrollYProgress }: AwardSectionProps) {
  const opacity = useTransform(scrollYProgress, [0.83, 0.85], [0, 1]);
  const moveTextTitleY = useTransform(
    scrollYProgress,
    [0.84, 0.85],
    ["100%", "0%"]
  );

  const moveAwardY1 = useTransform(
    scrollYProgress,
    [0.84, 0.85, 0.86, 0.87],
    ["100%", "0%", "0%", "-100%"]
  );

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.84, 0.85, 0.86, 0.87],
    [0, 1, 1, 0]
  );

  const moveAwardY2 = useTransform(
    scrollYProgress,
    [0.86, 0.88, 0.9, 0.92],
    ["100%", "0%", "0%", "-100%"]
  );

  const opacityText2 = useTransform(
    scrollYProgress,
    [0.86, 0.88, 0.9, 0.92],
    [0, 1, 1, 0]
  );

  const moveButtonsY = useTransform(
    scrollYProgress,
    [0.91, 0.92],
    ["100%", "0%"]
  );

  const opacityButtons = useTransform(scrollYProgress, [0.91, 0.92], [0, 1]);

  useAutoScrollDown(scrollYProgress, 0.8, 0.87, 12);

  return (
    <motion.div style={{ opacity }} className="relative h-[200vh] w-full">
      <motion.div className="fixed left-[2.5vw] w-full z-20 top-24">
        <Heading className="!text-[8vw]">СЕРТИФИЦИРОВАННАЯ</Heading>
      </motion.div>
      <div className="h-screen fixed top-0 w-full bg-awards z-10 " />
      <div className="h-screen fixed top-0 w-full">
        <Image
          src="/hero/bg-hero.webp"
          alt="background"
          fill
          priority
          className="object-cover w-full h-full"
        />
      </div>
      <div className="h-screen fixed top-3 z-20 w-full">
        <Image
          src="/hero/birds.png"
          alt="background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <motion.p
        style={{ y: moveTextTitleY }}
        className="title-clamp font-bold mb-4 blur-gray text-white fixed top-36 2xl:top-52 max-w-1/2 right-8 z-10 leading-[92%]"
      >
        Вода TURAN отмечена более чем 20 республиканскими и международными
        наградами за безупречное качество,природный состав и высокие
        производственные стандарты
      </motion.p>
      <motion.div
        style={{ y: moveAwardY1, opacity: opacityText1 }}
        className="flex flex-col gap-4 fixed bottom-8 right-8 z-20 items-end max-w-1/2"
      >
        <div className="flex items-center justify-between gap-4">
          {golds.map((gold, index) => (
            <Image
              key={index}
              src={gold.url as string}
              alt="background"
              height={10}
              width={10}
              priority
              className={gold.className}
              unoptimized
            />
          ))}
        </div>
        <motion.p
          style={{ y: moveAwardY1, opacity: opacityText1 }}
          className="text-clamp blur-gray text-white leading-[100%]"
        >
          Вот уже несколько лет подряд TURAN получает высшую награду от Monde
          Selection — одного из самых авторитетных европейских институтов оценки
          качества. Эта независимая экспертиза проводится в Брюсселе, и включает
          слепую дегустацию, анализ состава и производственного процесса
        </motion.p>
      </motion.div>
      <motion.div
        style={{ y: moveAwardY2, opacity: opacityText2 }}
        className="flex flex-col gap-4 fixed bottom-8 right-8 z-20 items-end max-w-1/2"
      >
        <div className="flex items-center justify-end gap-4">
          {silvers.map((silver, index) => (
            <Image
              key={index}
              src={silver.url}
              alt="background"
              height={10}
              width={10}
              priority
              className={silver.className}
              unoptimized
            />
          ))}
        </div>
        <p className="text-clamp blur-gray text-white leading-[100%]">
          TURAN — одна из немногих вод в регионе, прошедших проверку SGS
          Institut Fresenius. Это мировой эталон лабораторного контроля,
          которому доверяют более 160 лет. Институт оценивает не только воду в
          бутылке, но и весь путь от скважины до розлива:санитарные условия,
          оборудование, технологии
        </p>
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
