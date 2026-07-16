export interface NavLink {
  label: string
  href: string
}

export interface StatItem {
  index: string
  label: string
}

export interface ImpactCard {
  title: string
  accentClass: string
  icon: "close" | "check"
  iconClass: string
  items: string[]
}

export interface SolutionItem {
  code: string
  title: string
  description?: string
  image?: string
}

export interface ProcessStep {
  index: string
  title: string
  description: string
}

export interface AnatomyFeature {
  icon: string
  title: string
  description: string
  delayClass: string
  lineDelay: string
}

export interface ProjectItem {
  city: string
  title: string
  image: string
  alt: string
}

export interface FaqItem {
  question: string
  answer: string
}

export const navigationLinks: NavLink[] = [
  { label: "Продукция", href: "#solutions" },
  { label: "Процесс", href: "#process" },
  { label: "Проекты", href: "#projects" },
  { label: "Технология", href: "#anatomy" },
  { label: "Контакты", href: "#contact" },
]

export const heroStats: StatItem[] = [
  { index: "01 //", label: "Собственное производство" },
  { index: "02 //", label: "Проектирование под зал" },
  { index: "03 //", label: "Монтаж под ключ" },
  { index: "04 //", label: "Сделано в России" },
]

export const impactCards: ImpactCard[] = [
  {
    title: "До установки",
    accentClass: "bg-outline",
    icon: "close",
    iconClass: "text-outline",
    items: [
      "Потеря акустической энергии в сценической коробке и слабый вынос звука в зал.",
      "Музыкантам сложнее слышать друг друга и удерживать ансамбль.",
      "Звучание в зрительном зале становится менее плотным и менее управляемым.",
    ],
  },
  {
    title: "С акустической раковиной",
    accentClass: "bg-[#D97706]",
    icon: "check",
    iconClass: "text-[#D97706]",
    items: [
      "Равномерное распределение и направленное отражение звука в зал.",
      "Комфортный баланс ранних отражений для уверенной игры музыкантов.",
      "Более плотное, читаемое и тембрально насыщенное концертное звучание.",
    ],
  },
]

export const featuredSolution: SolutionItem = {
  code: "SYS.01",
  title: "Акустические раковины",
  description:
    "Модульные конструкции для филармоний и крупных концертных залов с индивидуальным расчетом геометрии.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuACW6cE1ALHEUMldZFyjwKGqGWSNJylr2c0LLdgRfIaKDXqMQzD7NHCFmY7MT3s3MESl5ijqqmdmUdSBAlmOqxkJnmTG2kPJC-6Nh-d0FBGqc4owZ4VtFBbC1ixIzjt0XfpcIelhyvPl1DR7Wm4mxv6W7IgKVRaxnk1dVwSII6Dh2H1XKQXOpWpNkY2992xuUZDz8HAP-5S7xAs4B1Hy38akk5vlfS0lkeMGe7SayUO0ccqUPqWSn8",
}

export const compactSolutions: SolutionItem[] = [
  {
    code: "SYS.02",
    title: "Телескопические панели",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClgrugiLZ6RHCFiodWyxnax_ywBfomO9tzayU1Lqph7VxE70o7lzT5p9fV7inXprLB8MIMqBbmHKfvZ9BCsQ7GHpexnYxqWYnkadQlThViWSb6T9YKDSUG3EGTljzt0pd058mAWS4WBHk4fSDHcuSU-81cTgBOeO7ujpL_C69uyV1WmO4csPz9Ea6E-yTIGcr8ZKnkRUCo0-79ULP0M1Poe7MFo0ndNxEnB4qBRpVcQon3mx_Ew30",
    description:
      "Системы для быстрой трансформации сцены и настройки ранних отражений под разные сценарии.",
  },
  {
    code: "SYS.03",
    title: "Портативные решения",
    description:
      "Мобильные экраны и модули для выездных сцен, репетиционных пространств и многофункциональных залов.",
  },
]

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Заявка",
    description: "Первичное обсуждение задачи и сбор исходных данных по площадке.",
  },
  {
    index: "02",
    title: "Изучение помещения",
    description: "Выезд инженеров, акустические измерения и анализ текущего состояния зала.",
  },
  {
    index: "03",
    title: "Акустический расчет",
    description: "Компьютерное моделирование и расчет геометрии будущей системы.",
  },
  {
    index: "04",
    title: "Проектирование",
    description: "Разработка КД, узлов, механизмов и сценариев монтажа.",
  },
  {
    index: "05",
    title: "Производство",
    description: "Изготовление конструкций на собственном производстве с контролем качества.",
  },
  {
    index: "06",
    title: "Доставка и монтаж",
    description: "Транспортировка, сборка и интеграция системы на объекте заказчика.",
  },
  {
    index: "07",
    title: "Настройка",
    description: "Финальная акустическая юстировка и передача рабочей конфигурации команде зала.",
  },
  {
    index: "08",
    title: "Гарантия",
    description: "Сервисное сопровождение, инструкции и гарантийная поддержка после запуска.",
  },
]

export const anatomyFeatures: AnatomyFeature[] = [
  {
    icon: "layers",
    title: "Многослойная структура",
    description:
      "Чередование отражающих и поглощающих материалов формирует нужное время реверберации и читаемость звучания.",
    delayClass: "delay-100",
    lineDelay: "200ms",
  },
  {
    icon: "architecture",
    title: "Алюминиевый каркас",
    description:
      "Жесткий и легкий каркас обеспечивает стабильность конструкции при бережной нагрузке на механику сцены.",
    delayClass: "delay-300",
    lineDelay: "400ms",
  },
  {
    icon: "tune",
    title: "Телескопический механизм",
    description:
      "Прецизионные направляющие помогают быстро трансформировать сцену без лишнего шума и люфтов.",
    delayClass: "delay-500",
    lineDelay: "0ms",
  },
]

export const projects: ProjectItem[] = [
  {
    city: "г. Москва",
    title: "Государственная филармония",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnZByvRCA6cBA_oZjLdtfl3J6SLb2u9selYJrjqiQjfqashwKtP6xpnah4S7-I3tI7lZZExmlk874djLLSVazCFLdbFy8pfppnEcflItjy0_JiUkHf4JsezDYden6GY8hFT39AYb5tzyxdhzYv13YJiVfU_hiRuz4IhYmGfmB-MJHmKinMauHoIcGaF9PGkZKYRsh4AHU9Kx6WjVpqOTIMdsYjVM5jzrk5CZCzOaNWobMTk86_xSc",
    alt: "Новая акустическая раковина на сцене классического зала в Москве.",
  },
  {
    city: "г. Санкт-Петербург",
    title: "Центр современного искусства",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIiMKbtHlo0CxGH8VopHCCbDHuRoxMWv6D40j9Ft7EjREt6gXuMlPRrLAvehOblHx91hCNsusYkQt2TSayd-tBivwiR4KhDWYXmhv2YGCpFnfWEQByiPJBOoZkOqe_gI-3ILUQOiXnqVXF1L-lERtX2My9GBqzoWH4AzzR4xtymfzf91BgUYA6ua9mpr0WDUkyWPzc1Uzt_ACm_AT1itXcpH9FlFEAvk8eVWk08f5SU8TD-rzvec0",
    alt: "Современный зал с модульными акустическими панелями на сцене.",
  },
  {
    city: "г. Казань",
    title: "Консерватория им. Жиганова",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAu9NwBPkS9YlAFbgKcYVG6ljXTOySl65K847fNpBIlraXs15Uq5vV_Z-gyZ8VXP9hU5FNYsH4OWWgUvpBtnj2DYUot0ty5rSkfJbzauQgyDz-LdRjndwoOjCtaAVM_IOJwV-I-GRsu0bwbhEg4y2xrKXung3H4Y60Zy2gxX2_iQqEaX6_gW-ouvFojLdLzRFWqQP_Q5ttmBL6yBLukW65NJgOtzbJzIxEKVMY1eD0WqYzMFCGby5E",
    alt: "Портативные акустические экраны в репетиционном пространстве консерватории.",
  },
]

export const faqItems: FaqItem[] = [
  {
    question: "Каковы средние сроки производства?",
    answer:
      "Полный цикл от утверждения чертежей до финального монтажа обычно занимает около трех месяцев. Точный срок зависит от масштаба и сложности системы.",
  },
  {
    question: "Можно ли монтировать систему на действующей сцене?",
    answer:
      "Да. Мы проектируем решения с учетом существующей площадки и планируем монтажные работы в технологические окна, чтобы не мешать репетициям и концертам.",
  },
  {
    question: "Делаете ли вы конструкции нестандартных размеров?",
    answer:
      "Да, каждая акустическая система рассчитывается индивидуально под конкретный зал, его архитектуру и акустические особенности.",
  },
  {
    question: "Какие материалы используются для панелей?",
    answer:
      "Мы применяем алюминиевые несущие элементы, специализированную фанеру, шпонированный MDF и профессиональные звукопоглощающие компоненты с учетом требований пожарной безопасности.",
  },
]

export const footerColumns = [
  [
    { label: "Каталог решений", href: "#solutions" },
    { label: "Технические характеристики", href: "#anatomy" },
  ],
  [
    { label: "Акустическая физика", href: "#impact" },
    { label: "Производственный процесс", href: "#process" },
  ],
  [
    { label: "Политика конфиденциальности", href: "#contact" },
    { label: "Условия сотрудничества", href: "#contact" },
  ],
]

export const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA11Uqd9R4bFuTA1q-gqQ4G4z7QijgBSEo2GinC3DAnSpwiHEuhcaJ8VKKPxKzksT5k4KxDLum1h-bM-qYgkI0tuLn3FLg4duYO2G3EQwLxF5VpIkmu_9QkOqBd3kGSU1EM5Cyk5_M7Pl3ngmgcqmKVCzmMvELG_wMtzITem16ChktGHB9dkp9oPKkoO8hmAKKjbFWLtwhhZhY7IaCzWRHYoFMxnyxtZZRZAuYL2k-HNLJ9r1Ek8xA"

export const anatomyImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3XAV5P-lr9jEV-WA1oJ0qBaFktHr-cmuzyqe_ZqCYGIIkOKgiSQ578yxuCY1tkI56mnUkDsNXwhIeI69mPqQFoPtZg6pi0g_Fq1T5O0gUrbPIcVbg8Yf0En9I7pySIdUMmce9Q32kuVIHlBTeKttSSZs5C754AW6dpNhQtvRki1BtZT15436XZHAVxHoIYgPNNbqF66DWIv3JRS1qE-UNTsoeHWSwqaqRbPKc44epSV800zzZgsU"
