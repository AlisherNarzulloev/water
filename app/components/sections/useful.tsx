import { MotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";

interface UsefulSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function UsefulSection({ scrollYProgress }: UsefulSectionProps) {
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.57, 0.67, 0.69],
    [0, 1, 1, 0]
  );
  const imageOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.57, 0.67, 0.69],
    [0, 1, 1, 0]
  );
  const imageX = useTransform(
    scrollYProgress,
    [0.55, 0.57, 0.67, 0.69],
    ["-100%", "-30%", "-30%", "-100%"]
  );

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.55, 0.57, 0.58, 0.6],
    [0, 1, 1, 0]
  );
  const yText1 = useTransform(
    scrollYProgress,
    [0.55, 0.57, 0.58, 0.6],
    ["100%", "0%", "0%", "-100%"]
  );

  const opacityText2 = useTransform(
    scrollYProgress,
    [0.59, 0.61, 0.62, 0.64],
    [0, 1, 1, 0]
  );
  const yText2 = useTransform(
    scrollYProgress,
    [0.59, 0.61, 0.62, 0.64],
    ["100%", "0%", "0%", "-100%"]
  );

  const opacityText3 = useTransform(
    scrollYProgress,
    [0.63, 0.65, 0.67, 0.69],
    [0, 1, 1, 0]
  );
  const yText3 = useTransform(
    scrollYProgress,
    [0.63, 0.65, 0.67, 0.69],
    ["100%", "0%", "0%", "-100%"]
  );

  const opacityTitle2 = useTransform(
    scrollYProgress,
    [0.59, 0.61, 0.67, 0.69],
    [0, 1, 1, 0]
  );
  const yTitle2 = useTransform(
    scrollYProgress,
    [0.59, 0.61, 0.67, 0.69],
    ["100%", "0%", "0%", "-100%"]
  );

  useAutoScrollDown(scrollYProgress, 0.54, 0.57, 9.2);
  useAutoScrollDown(scrollYProgress, 0.58, 0.61, 9.9);
  useAutoScrollDown(scrollYProgress, 0.62, 0.65, 10.7);

  return (
    <section className="relative h-screen w-full">
      <div className="fixed top-0 w-full">
        <motion.div
          style={{ opacity: titleOpacity }}
          className="w-full px-20 fixed z-10 left-1/2 -translate-x-1/2 top-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1281 165"
            fill="none"
          >
            <path
              fill="#fff"
              d="M103.735 161V33.704H31.927V161H.474V3.735h134.417V161h-31.156ZM239.872 30.737c-14.045 0-25.815 4.847-35.311 14.54-9.297 9.693-13.946 22.155-13.946 37.387s4.649 27.695 13.946 37.388c9.496 9.693 21.266 14.539 35.311 14.539 14.243 0 26.013-4.846 35.31-14.539 9.495-9.693 14.243-22.156 14.243-37.388s-4.748-27.694-14.243-37.387c-9.297-9.693-21.067-14.54-35.31-14.54Zm58.158 110.976c-15.43 15.43-34.816 23.144-58.158 23.144-23.343 0-42.729-7.714-58.159-23.144-15.429-15.628-23.144-35.311-23.144-59.049s7.715-43.322 23.144-58.751C197.143 8.285 216.529.47 239.872.47c23.342 0 42.728 7.814 58.158 23.442 15.628 15.43 23.441 35.013 23.441 58.751s-7.813 43.421-23.441 59.049ZM447.691 161l-48.96-112.162L350.662 161h-34.124L387.159 3.735h23.442L481.815 161h-34.124Zm40.921 0V3.735h126.405v29.97h-95.249v28.782h57.861v29.97h-57.861v38.574h101.184V161h-132.34Zm141.798-23.145 18.1-26.408c8.506 7.517 18.298 13.254 29.376 17.21 11.275 4.154 23.046 6.231 35.31 6.231 11.671 0 20.771-1.78 27.299-5.341 7.913-4.154 11.869-10.385 11.869-18.694 0-5.539-2.868-9.989-8.605-13.352-5.935-3.166-17.408-4.748-34.42-4.748h-19.584V62.19h24.035c12.067 0 19.979-.89 23.738-2.67 5.736-2.374 8.605-6.133 8.605-11.276 0-1.978-.396-3.758-1.187-5.341-.594-1.582-1.879-2.967-3.858-4.154-1.78-1.385-2.868-2.077-3.264-2.077-.197-.198-1.285-.791-3.264-1.78-6.527-2.572-14.737-3.858-24.628-3.858-11.275 0-21.661 1.681-31.156 5.044-8.704 3.165-17.012 7.715-24.925 13.65l-18.397-24.629c10.089-7.319 21.364-13.253 33.827-17.803C682.337 2.746 696.777.47 712.603.47c19.584 0 35.409 3.759 47.476 11.276 13.254 9.297 19.881 21.265 19.881 35.904 0 14.242-5.539 23.54-16.617 27.892 6.132 2.967 11.078 7.022 14.836 12.166 4.352 5.736 6.528 12.957 6.528 21.661 0 17.21-5.737 30.464-17.21 39.761-12.66 10.484-30.859 15.726-54.598 15.726-18.001 0-34.519-2.67-49.553-8.011-12.067-4.55-23.046-10.88-32.936-18.991ZM914.682 161V90.38h-71.51V161h-31.453V3.735h31.453v56.972h71.51V3.735h31.453V161h-31.453ZM1041.62 50.024l-20.77 42.135h41.84l-21.07-42.135ZM1096.81 161l-19.29-38.871h-71.51L987.32 161H952.9l77.15-157.265h23.44L1131.23 161h-34.42Zm112.66-62.906L1170.3 161h-36.8l41.55-65.576c-10.88-2.374-19.69-6.924-26.41-13.65-7.52-7.517-11.28-17.803-11.28-30.86 0-13.847 4.06-24.826 12.17-32.936 9.49-9.495 24.23-14.243 44.21-14.243h87.24V161h-31.16V98.094h-40.35Zm40.35-64.983h-59.05c-6.92 0-12.06 1.286-15.43 3.858-4.15 2.571-6.23 7.022-6.23 13.352 0 5.935 1.88 10.485 5.64 13.65 3.76 3.165 9.69 4.747 17.8 4.747h57.27V33.111Z"
            />
          </svg>
        </motion.div>
        <motion.p
          style={{ opacity: opacityTitle2, y: yTitle2 }}
          className="title-clamp blur-gray fixed top-1/3 -translate-y-1/3 text-white mx-20 right-0"
        >
          Что делает воду TURAN полезной?
        </motion.p>
        <div className="fixed z-20 inset-0 p-20 h-full w-full">
          <motion.div
            style={{ opacity: opacityText1, y: yText1 }}
            className="text-white flex flex-col items-end text-right h-full leading-tight justify-end w-full"
          >
            <div className="flex flex-col items-end max-w-full 1xl:max-w-1/2 2xl:max-w-2/3 justify-between h-2/3 gap-4">
              <div className=" blur-gray">
                <p className="title-clamp">
                  TURAN — это тонкая, незаметная,но ежедневная поддержка
                  организма
                </p>
                <p className="text-clamp">
                  Она содержит комплекс жизненно важных минералов, без которых
                  наше тело не может функционировать полноценно. Они не
                  добавлены извне и не подогнаны под норму. Это натуральный
                  природный состав: ровно столько, сколько нужно, чтобы
                  поддерживать здоровье, не перегружая организм. Именно поэтому
                  воду TURAN можно и нужно пить каждый день
                </p>
              </div>
              <p className="text-clamp blur-gray">
                Минерализация 0,2 - 0,47 г/дм³ — это физиологическая норма, при
                которой вода не только утоляет жажду, но и работает на вас:
                помогает клеткам, сосудам, нервной системе, костям, обмену
                веществ
              </p>
            </div>
          </motion.div>
        </div>

        <div className="fixed z-20 inset-0 p-20 h-full w-full">
          <motion.div
            style={{ opacity: opacityText2, y: yText2 }}
            className="text-white flex flex-col items-end text-right h-full leading-tight justify-end w-full"
          >
            <div className="flex flex-col items-end max-w-full 2xl:max-w-2/3 justify-end h-2/3 gap-4">
              <div className="blur-gray text-right flex flex-col gap-4 max-w-2/3">
                <div>
                  <p className="title-clamp">Кальций</p>
                  <p className="text-clamp">
                    Поддерживает здоровье сердца, укрепляет кости и зубы,
                    регулирует работу сосудов и свертываемость крови. Его
                    регулярное поступление помогает в профилактике остеопороза и
                    играет важную роль в иммунной защите организма
                  </p>
                </div>
                <div>
                  <p className="title-clamp">Магний</p>
                  <p className="text-clamp">
                    Магний Влияет на сотни процессов в организме — от усвоения
                    белков до нормальной работы нервной системы. Снижает уровень
                    холестерина, уменьшает нервное напряжение, помогает избежать
                    судорог и нарушений сердечного ритма
                  </p>
                </div>
                <div>
                  <p className="title-clamp">Гидрокарбонаты</p>
                  <p className="text-clamp">
                    Отвечают за кислотно-щелочное равновесие организма. Они
                    улучшают пищеварение, снижают избыточную кислотность
                    желудочного сока и способствуют мягкому выводу продуктов
                    обмена веществ
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="fixed z-20 inset-0 p-20 h-full w-full">
          <motion.div
            style={{ opacity: opacityText3, y: yText3 }}
            className="text-white flex flex-col items-end text-right h-full leading-tight justify-end w-full"
          >
            <div className="flex flex-col items-end max-w-full 2xl:max-w-2/3 justify-end h-2/3 gap-4">
              <div className="blur-gray text-right flex flex-col gap-4 max-w-2/3">
                <div>
                  <p className="title-clamp">Калий и натрий</p>
                  <p className="text-clamp">
                    Эти элементы работают в паре: регулируют водно-солевой
                    баланс, поддерживают сердечный ритм, участвуют в передаче
                    нервных сигналов и обеспечивают здоровую работу мышц. Их
                    дефицит может вызывать слабость, обезвоживание и сбои в
                    работе сердца.
                  </p>
                </div>
                <div>
                  <p className="title-clamp">Фтор</p>
                  <p className="text-clamp">
                    Укрепляет эмаль зубов, кости, участвует в обмене кальция и
                    фосфора. Обладает антибактериальными свойствами,
                    поддерживает здоровье полости рта и способствует выведению
                    тяжёлых металлов из организма.
                  </p>
                </div>
                <div>
                  <p className="title-clamp">Йод</p>
                  <p className="text-clamp">
                    Важнейший микроэлемент для щитовидной железы. Участвует в
                    выработке гормонов, влияющих на метаболизм, уровень энергии,
                    концентрацию и развитие мозга.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: imageOpacity }}
          className="fixed inset-0 -z-10"
        >
          <Image
            fill
            src="/useful/bg-cloud.webp"
            alt="useful background"
            className="object-cover"
            unoptimized
          />
        </motion.div>

        <motion.div
          style={{ opacity: imageOpacity, x: imageX }}
          className="fixed inset-0 left-0 w-full -z-10"
        >
          <Image
            fill
            src="/useful/poleznaya_girl.webp"
            alt="girl"
            className="object-contain object-center"
            unoptimized
          />
        </motion.div>
      </div>
    </section>
  );
}
