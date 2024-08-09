import nb2 from '../assets/screenshots/nbsite-2-0.png';
import istex from '../assets/screenshots/istex.png';
import nb from '../assets/screenshots/nbsite.png';
import ufeed from '../assets/screenshots/ufeed.png';
import istexlab from '../assets/screenshots/istexlab.png';
import cookit from '../assets/screenshots/cookit.png';
import weather from '../assets/screenshots/weather.png';
import christmas from '../assets/screenshots/christmas.png';
import todos from '../assets/screenshots/todolist.png';
import furniture from '../assets/screenshots/furniture.png';

export const projects = [
    {
        id: 'boju2',
        title: {
            english: 'Natalia Borisova\'s site update',
            russian: 'Обновление сайта Натальи Борисовой'
        },
        description: {
            english: "The update for the site of Natalia Borisova. Now there is a news feed, and also the dashboard for administrating them.",
            russian: "Обновление сайта Натальи Борисовой. Теперь на сайте есть лента новостей, а также панель администрирования для управления ими."
        },
        tools: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database', 'Authorization'],
        link: 'https://borisova-jurist.ru',
        color: '#5584ac',
        image: nb2,
        forStudy: false
    },
    {
        id: 'ufeed',
        title: {
            english: 'UFeed – posts from all over the world',
            russian: 'UFeed – посты со всего мира'
        },
        description: {
            english: "Authorize and write posts to be visible for everyone, or read others' posts",
            russian: "Авторизуйся и пиши посты, чтобы быть у всех на виду, или же читай посты других"
        },
        tools: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database', 'Authorization'],
        link: 'https://magnificent-meerkat-36d224.netlify.app',
        color: '#4a7ba9',
        image: ufeed,
        forStudy: true
    },
    {
        id: 'istexlab',
        title: {
            english: 'Cart prototype',
            russian: 'Прототип корзины'
        },
        description: {
            english: 'Add and remove items from cart enjoying beautiful animations. (Based on İstEx)',
            russian: 'Добавляйте и удаляйте товары из корзины, наслаждясь красивыми анимациями. (На базе İstEx)'
        },
        tools: ['HTML/CSS', 'JavaScript', 'React', 'Redux'],
        link: 'https://istexlab.netlify.app',
        color: '#EB954E',
        image: istexlab,
        forStudy: true
    },
    {
        id: 'istex',
        title: {
            english: 'İstanbul Experience',
            russian: 'İstanbul Experience'
        },
        description: {
            english: 'Site project for a guide in Istanbul. It shows helpful information about Istanbul, interesting places and services provided by this guide and their partners.',
            russian: 'Сайт-проект для гида в Стамбуле. Отображает полезную информацию о Стамбуле, интересных местах и услугах, предоставляемых услугах гида и его партнеров.'
        },
        tools: ['HTML/CSS', 'JavaScript'],
        link: 'http://experience.istanbul/',
        color: '#B8621B',
        image: istex,
        forStudy: false
    },
    {
        id: 'cookit',
        title: {
            english: 'CooKit – a site with a shopping list',
            russian: 'CooKit – сайт со списком покупок'
        },
        description: {
            english: "Site's demo with the ability to search for dishes by their name or an ingredient. Click on ingredients' list, and everything will be added to your shopping list in the screen's corner.",
            russian: 'Демо-версия сайта с возможностью поиска блюда по названию или ингредиенту. Нажмите на список ингредиентов, и он добавится в ваш список покупок в углу экрана.'
        },
        tools: ['HTML/CSS', 'JavaScript'],
        link: 'https://mulberry-faint-governor.glitch.me/',
        color: '#daa520',
        image: cookit,
        forStudy: true
    },
    {
        id: 'weather',
        title: {
            english: 'Weather',
            russian: 'Погода'
        },
        description: {
            english: "Site's demo with searching for weather of world's any city.",
            russian: 'Демо-версия сайта с поиском погоды в любом городе мира. Главное – написать его название по-английски.'
        },
        tools: ['HTML/CSS', 'JavaScript', 'API'],
        link: 'https://reflective-guttural-cilantro.glitch.me/',
        color: '#b996ff',
        image: weather,
        forStudy: true
    },
    {
        id: 'christmas',
        title: {
            english: 'Timer for Christmas',
            russian: 'Таймер до Рождества'
        },
        description: {
            english: "Site with a timer until December 25th of this year, with precious music by Mariah Carey in the background.",
            russian: 'Сайт с таймером до 25-го Декабря текущего года под прекрасное музыкальное сопровождение Мэрайи Кэри.'
        },
        tools: ['HTML/CSS', 'JavaScript'],
        link: 'https://holistic-young-innovation.glitch.me/',
        color: '#dc143c',
        image: christmas,
        forStudy: true
    },
    {
        id: 'todos',
        title: {
            english: 'Todo list',
            russian: 'Сайт-список дел'
        },
        description: {
            english: "Site's demo of a todo list where you can mark todos as completed or delete them. When there are no todos you'll see a manual of the site.",
            russian: 'Демо-версия сайта-списка дел, где можно добавлять дела, отмечать их, как завершенные, и удалять. Когда на экране нет дел, автоматически показывается руководство приложения.'
        },
        tools: ['HTML/CSS', 'JavaScript'],
        link: 'https://curious-sand-gander.glitch.me/',
        color: '#d2691e',
        image: todos,
        forStudy: true
    },
    {
        id: 'boju',
        title: {
            english: 'Natalia Borisova the lawyer',
            russian: 'Юрист Наталья Борисовна'
        },
        description: {
            english: 'Site project for Natalia Borisova (@borisova_jurist). It shows the information about services to make and some other legal information.',
            russian: 'Сайт-проект для Натальи Борисовой (@borisova_jurist). Отображает инфомацию об оказываемых услугах и дополнительную юридическую информацию.'
        },
        tools: ['HTML/CSS'],
        link: 'http://borisova-jurist.ru/',
        color: '#5584AC',
        image: nb,
        forStudy: false
    },
    {
        id: 'furniture',
        title: {
            english: 'Furniture Gallery',
            russian: 'Галерея мебели'
        },
        description: {
            english: "Site's demo of the photos' gallery. Hover the cursor to see the full picture with additional info.",
            russian: 'Демо-версия галереи из фото. Наведите курсор, чтобы увидеть развернутое изображение с дополнительной информацией'
        },
        tools: ['HTML/CSS'],
        link: 'https://western-detailed-turn.glitch.me/',
        color: '#ffffff',
        image: furniture,
        forStudy: true
    },
]