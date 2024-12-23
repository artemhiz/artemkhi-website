import tbc from '../assets/screenshots/tbc.png';
import nb2 from '../assets/screenshots/nbsite-2-0.png';
import istex from '../assets/screenshots/istex.png';
import artemkhiArchive from '../assets/screenshots/artemkhi-archive.png';
import nb from '../assets/screenshots/nbsite.png';
// import ufeed from '../assets/screenshots/ufeed.png';
import istexlab from '../assets/screenshots/istexlab.png';
import cookit from '../assets/screenshots/cookit.png';
import weather from '../assets/screenshots/weather.png';
import christmas from '../assets/screenshots/christmas.png';
import todos from '../assets/screenshots/todolist.png';
import furniture from '../assets/screenshots/furniture.png';

export const projects = [
    {
        id: 'tbc',
        title: {
            english: 'QR-Menu of The Burger Company',
            russian: 'QR-Меню The Burger Company',
            turkish: 'The Burger Company QR-Menüsü',
        },
        description: {
            english: 'Website representing menu of a restaurant with ability to log in to administrate menu, pricing, categories and adding new dishes.',
            russian: 'Веб-сайт представляющий меню ресторана с возможностью входа для управления меню, ценами, категориями и добавления новых блюд.',
            turkish: 'Menüyü, fiyatlandırmayı, kategorileri yönetmek ve yeni yemekler eklemek için oturum açma olanağına sahip, bir restoranın menüsünü temsil eden web sitesi.',
        },
        tools: ['HTML/CSS', 'JavaScript', 'React', 'API', 'Node.js', 'Database', 'Authorization'],
        link: 'https://the-burger-company.netlify.app',
        color: '#000000',
        textColor: 'yellow',
        image: tbc,
        forStudy: false,
    },
    {
        id: 'borisova-jurist-2',
        title: {
            english: 'Natalia Borisova\'s site update',
            russian: 'Обновление сайта Натальи Борисовой',
            turkish: 'Natalya Borisova\'nın site güncellemesi',
        },
        description: {
            english: "The update for the site of Natalia Borisova. Now there is a news feed, and also the dashboard for administrating them.",
            russian: "Обновление сайта Натальи Борисовой. Теперь на сайте есть лента новостей, а также панель администрирования для управления ими.",
            turkish: "Natalya sitesi için güncelleme. Artık sitede haberler var, ve ayrıca kontrol etmek için admin paneli.",
        },
        tools: ['HTML/CSS', 'JavaScript', 'React', 'API', 'Node.js', 'Database', 'Authorization'],
        link: 'https://borisova-jurist.ru',
        color: '#5584ac',
        textColor: '#ffffff',
        image: nb2,
        forStudy: false
    },
    // {
    //     id: 'ufeed',
    //     title: {
    //         english: 'UFeed – posts from all over the world',
    //         russian: 'UFeed – посты со всего мира',
    //         turkish: 'UFeed – bütün dünyadan postlar',
    //     },
    //     description: {
    //         english: "Authorize and write posts to be visible for everyone, or read others' posts",
    //         russian: "Авторизуйся и пиши посты, чтобы быть у всех на виду, или же читай посты других",
    //         turkish: "Herkesin gözünün önünde olmak için, üye ol ve postları yazın, ya da diğer insanların postları okuyun",
    //     },
    //     tools: ['HTML/CSS', 'JavaScript', 'React', 'API', 'Node.js', 'Database', 'Authorization'],
    //     link: 'https://magnificent-meerkat-36d224.netlify.app',
    //     color: '#4a7ba9',
    //     textColor: '#ffffff',
    //     image: ufeed,
    //     forStudy: true
    // },
    {
        id: 'istexlab',
        title: {
            english: 'Cart prototype',
            russian: 'Прототип корзины',
            turkish: 'Sepetin prototipi',
        },
        description: {
            english: 'Add and remove items from cart enjoying beautiful animations. (Based on İstEx)',
            russian: 'Добавляйте и удаляйте товары из корзины, наслаждясь красивыми анимациями. (На базе İstEx)',
            turkish: 'Sepette ürünleri ekle ve sil, ve animasyonun tadını çıkarın. (İstEx\'e dayalı)',
        },
        tools: ['HTML/CSS', 'JavaScript', 'React', 'Redux'],
        link: 'https://istexlab.netlify.app',
        color: '#EB954E',
        textColor: '#000000',
        image: istexlab,
        forStudy: true
    },
    {
        id: 'artemkhi-archive',
        title: {
            english: 'Artem Khi V1.0',
            russian: 'Artem Khi V1.0',
            turkish: 'Artem Khi V1.0',
        },
        description: {
            english: 'Archived version of Artem Khi\'s first website.',
            russian: 'Архивная версия первого сайта Artem Khi.',
            turkish: 'Artem Khi\'nin ilk web sitesinin arşivlenmiş versiyonu.',
        },
        tools: ['HTML/CSS', 'JavaScript', 'React'],
        link: 'https://artemkhi-archive.netlify.app',
        color: '#7b01f9',
        textColor: '#ffffff',
        image: artemkhiArchive,
        forStudy: false,
    },
    {
        id: 'istex',
        title: {
            english: 'İstanbul Experience',
            russian: 'İstanbul Experience',
            turkish: 'İstanbul Experience',
        },
        description: {
            english: 'Site project for a guide in Istanbul. It shows helpful information about Istanbul, interesting places and services provided by this guide and their partners.',
            russian: 'Сайт-проект для гида в Стамбуле. Отображает полезную информацию о Стамбуле, интересных местах и услугах, предоставляемых услугах гида и его партнеров.',
            turkish: 'İstanbul rehberi için bir site. Rehber ve ortakları tarafından sağlanan İstanbul, ilginç yerler ve hizmetler hakkında faydalı bilgiler görüntüler.',
        },
        tools: ['HTML/CSS', 'JavaScript'],
        link: 'http://experience.istanbul/',
        color: '#B8621B',
        textColor: '#ffffff',
        image: istex,
        forStudy: false
    },
    {
        id: 'cookit',
        title: {
            english: 'CooKit – a site with a shopping list',
            russian: 'CooKit – сайт со списком покупок',
            turkish: 'CooKit - alışveriş listesili bir site',
        },
        description: {
            english: "Site's demo with the ability to search for dishes by their name or an ingredient. Click on ingredients' list, and everything will be added to your shopping list in the screen's corner.",
            russian: 'Демо-версия сайта с возможностью поиска блюда по названию или ингредиенту. Нажмите на список ингредиентов, и он добавится в ваш список покупок в углу экрана.',
            turkish: 'Bir yemeği isme veya malzemeye göre arama özelliğine sahip sitenin demo versiyonu. Malzeme listesine tıkladığınızda ekranın köşesindeki alışveriş listenize eklenecektir.',
        },
        tools: ['HTML/CSS', 'JavaScript'],
        link: 'https://mulberry-faint-governor.glitch.me/',
        color: '#daa520',
        textColor: '#ffffff',
        image: cookit,
        forStudy: true
    },
    {
        id: 'weather',
        title: {
            english: 'Weather',
            russian: 'Погода',
            turkish: 'Hava Durumu',
        },
        description: {
            english: "Site's demo with searching for weather of world's any city.",
            russian: 'Демо-версия сайта с поиском погоды в любом городе мира. Главное – написать его название по-английски.',
            turkish: 'Dünyanın herhangi bir şehrinde hava durumu araması ile sitenin demo sürümü. Önemli olan adını İngilizce yazmaktır.'
        },
        tools: ['HTML/CSS', 'JavaScript', 'API'],
        link: 'https://reflective-guttural-cilantro.glitch.me/',
        color: '#b996ff',
        textColor: '#ffffff',
        image: weather,
        forStudy: true
    },
    {
        id: 'christmas',
        title: {
            english: 'Timer for Christmas',
            russian: 'Таймер до Рождества',
            turkish: 'Noel\'e kadar zamanlayıcı',
        },
        description: {
            english: "Site with a timer until December 25th of this year, with precious music by Mariah Carey in the background.",
            russian: 'Сайт с таймером до 25-го Декабря текущего года под прекрасное музыкальное сопровождение Мэрайи Кэри.',
            turkish: 'Mariah Carey\'nin güzel müzik eşliğinde bu yılın 25 Aralık\'ına kadar zamanlayıcılı site.',
        },
        tools: ['HTML/CSS', 'JavaScript'],
        link: 'https://holistic-young-innovation.glitch.me/',
        color: '#dc143c',
        textColor: '#ffffff',
        image: christmas,
        forStudy: true
    },
    {
        id: 'todos',
        title: {
            english: 'Todo list',
            russian: 'Сайт-список дел',
            turkish: 'Yapılacaklar listesi',
        },
        description: {
            english: "Site's demo of a todo list where you can mark todos as completed or delete them. When there are no todos you'll see a manual of the site.",
            russian: 'Демо-версия сайта-списка дел, где можно добавлять дела, отмечать их, как завершенные, и удалять. Когда на экране нет дел, автоматически показывается руководство приложения.',
            turkish: 'Vakalar ekleyebileceğiniz, tamamlandı olarak işaretleyebileceğiniz ve silebileceğiniz yapılacaklar listesi sitesinin bir demo sürümü. Ekranda vaka olmadığında, uygulama kılavuzu otomatik olarak görüntülenir.'
        },
        tools: ['HTML/CSS', 'JavaScript'],
        link: 'https://curious-sand-gander.glitch.me/',
        color: '#d2691e',
        textColor: '#ffffff',
        image: todos,
        forStudy: true
    },
    {
        id: 'borisova-jurist',
        title: {
            english: 'Natalia Borisova the lawyer',
            russian: 'Юрист Наталья Борисова',
            turkish: 'Avukat Natalya Borisova',
        },
        description: {
            english: 'Site project for Natalia Borisova (@borisova_jurist). It shows the information about services to make and some other legal information.',
            russian: 'Сайт-проект для Натальи Борисовой (@borisova_jurist). Отображает инфомацию об оказываемых услугах и дополнительную юридическую информацию.',
            turkish: 'Natalia Borisova (@borisova_jurist) için web sitesi projesi. Sağlanan hizmetler ve ek yasal bilgiler hakkında bilgi görüntüler.',
        },
        tools: ['HTML/CSS'],
        link: 'http://borisova-jurist.ru/',
        color: '#5584AC',
        textColor: '#ffffff',
        image: nb,
        forStudy: false
    },
    {
        id: 'furniture',
        title: {
            english: 'Furniture Gallery',
            russian: 'Галерея мебели',
            turkish: 'Mobilya galerisi',
        },
        description: {
            english: "Site's demo of the photos' gallery. Hover the cursor to see the full picture with additional info.",
            russian: 'Демо-версия галереи из фото. Наведите курсор, чтобы увидеть развернутое изображение с дополнительной информацией',
            turkish: 'Fotoğraf galerisinin demo versiyonu. Ek bilgilerle birlikte genişletilmiş görüntüyü görmek için üzerine gelin',
        },
        tools: ['HTML/CSS'],
        link: 'https://western-detailed-turn.glitch.me/',
        color: '#ffffff',
        textColor: '#000000',
        image: furniture,
        forStudy: true
    },
]