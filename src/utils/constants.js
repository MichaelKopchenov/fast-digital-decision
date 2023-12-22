const ABOUT_TEXT_TITLE = 'Почему стоит выбрать нас?'


const CONTACTS = 'Контакты';
const TELEFHONE = 'Телефон:';
const NUMBER = '+7(499)322-76-68';
const EMAIL = 'E-mail:';
const EMAIL_ADDRESS = 'fdd-info@yandex.ru';

const VK = 'VK';
const WHATSAPP = "Whats'App";
const TELEGRAM = 'Telegram';

const TEAM = 'Команда';
const WORK = 'Наши работы';

const HELLO_TEXT_TITLE = 'Fast Digital';
const HELLO_TEXT_SPAN = 'Decisions';
const HELLO_TEXT_SUBTITLE = 'Быстрые цифровые решения для вашего бизнеса';

const TEAM_TEXT_ONE = 'Мы рады предложить вам услуги нашей молодой, но опытной команды разработчиков по созданию уникальных и качественных сайтов и сервисов под заказ.';

const WELCOME_TEXT_ONE = 'Добро пожаловать в мир профессиональных IT-решений!';
const WELCOME_TEXT_TWO = 'Мы — команда экспертов, готовых преобразить ваш онлайн-опыт.';
const WELCOME_TEXT_THREE = 'Наши уникальные подходы и передовые технологии обеспечат ваш бизнес надежным фундаментом в цифровом пространстве.';

const URL_VK = 'https://vk.com/';
const URL_WHATSAPP = 'https://api.whatsapp.com/send/?phone=74993227668';
const URL_TELEGRAM = 'https://t.me/FastDigitalDecisions';

const carouselText = [
  {
    title: 'Общенациональный союз некоммерческих организаций',
    text: 'Платформа для поиска кандидатов на вакансии для некоммерческой организации.',
    slide: 'Слайд-1',
    site: require('../images/Sites/OSNO.png')
  },
  {
    title: 'Научиться учиться',
    text: 'Сайт-визитка с рекомендациями по организации процесса любого обучения.',
    slide: 'Слайд-2',
    site: require('../images/Sites/how-to-learn.png')
  },
  {
    title: 'Mesto',
    text: 'Платформа для публикации фотографий с функциями регистрации, логина, постановки и снятия лайка.',
    slide: 'Слайд-3',
    site: require('../images/Sites/mesto.png')
  },
  {
    title: 'Путешествия по России',
    text: 'Сайт-визитка с описанием значимых мест России.',
    slide: 'Слайд-4',
    site: require('../images/Sites/travel.png')
  },
  {
    title: 'Movies Collection',
    text: 'Платформа для поиска трейлеров к фильмам с функциями регистрации, логина, постановки и снятия лайка и фильтром по короткометражным фильмам.',
    slide: 'Слайд-5',
    site: require('../images/Sites/movies.png')
  }
];

const staffText = [
  {
    name: 'Владислав',
    prof: 'UI/Ux designer',
    avatar: require('../images/Vlad.png')
  },
  {
    name: 'Михаил',
    prof: 'Web-developer',
    avatar: require('../images/Michael3.png')
  },
  {
    name: 'Сергей',
    prof: 'Digital marketing',
    avatar: require('../images/Sergey.png')
  },
  {
    name: 'Алексей',
    prof: 'Product/Project manager',
    avatar: require('../images/Alexey.png')
  },
];

const bannerText = [
  {
    title: 'Ваш успех — наша цель! Ваш бизнес — наше вдохновение!'
  },
  {
    title: 'Ваш успех начинается здесь!'
  },
  {
    title: 'Наши специалисты - ваша команда!'
  },
  {
    title: 'Наши работы'
  },
];

const gridText = [
  {
    title: 'Опыт и профессионализм:',
    description: 'Наша команда состоит из опытных и талантливых программистов, дизайнеров, верстальщиков и маркетологов, готовых воплотить в жизнь самые смелые идеи и решения.'
  },
  {
    title: 'Индивидуальный подход:',
    description: 'Мы всегда учитываем пожелания и требования каждого клиента, чтобы создать продукт, максимально соответствующий его потребностям и целям.'
  },
  {
    title: 'Гибкие тарифы и условия:',
    description: 'Мы предлагаем широкий спектр услуг и возможностей, а также гибкие тарифы и схемы сотрудничества, чтобы каждый клиент мог выбрать наиболее подходящий вариант.'
  },
  {
    title: 'Оперативность и качество:',
    description: 'Мы гарантируем своевременное выполнение работ и высокий уровень качества, благодаря чему ваш бизнес получит мощный инструмент для развития и роста.'
  },
  {
    title: 'Техническая поддержка:',
    description: 'После завершения проекта мы предоставляем техническую поддержку, чтобы ваш сайт или сервис функционировал без сбоев и проблем.'
  },
];

module.exports = {
  bannerText,
  gridText,
  staffText,
  carouselText,
  ABOUT_TEXT_TITLE,
  CONTACTS,
  TELEFHONE,
  NUMBER,
  EMAIL,
  EMAIL_ADDRESS,
  VK,
  WHATSAPP,
  TELEGRAM,
  TEAM,
  WORK,
  HELLO_TEXT_TITLE,
  HELLO_TEXT_SPAN,
  HELLO_TEXT_SUBTITLE,
  TEAM_TEXT_ONE,
  WELCOME_TEXT_ONE,
  WELCOME_TEXT_TWO,
  WELCOME_TEXT_THREE,
  URL_VK,
  URL_WHATSAPP,
  URL_TELEGRAM
  }