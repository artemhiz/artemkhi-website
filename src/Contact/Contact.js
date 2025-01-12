import './Contact.css';
import telegram from '../assets/social/telegram.png';
import whatsapp from '../assets/social/whatsapp.png';
import email from '../assets/social/mail.png';
import github from '../assets/social/github.png';
import linkedin from '../assets/social/linkedin.png';
import instagram from '../assets/social/instagram.png';
import channel from '../assets/social/megaphone.png';

import telegramDark from '../assets/social/telegram-dark.png';
import whatsappDark from '../assets/social/whatsapp-dark.png';
import emailDark from '../assets/social/mail-dark.png';
import githubDark from '../assets/social/github-dark.png';
import linkedinDark from '../assets/social/linkedin-dark.png';
import instagramDark from '../assets/social/instagram-dark.png';
import channelDark from '../assets/social/megaphone-dark.png';

import x from '../assets/x.png';
import xDark from '../assets/x-dark.png';

export default function Contact({ lang, isOpened, setOpening }) {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // let data = {};
    // switch (lang) {
    //     case 'tr': 
    //         data = { ...tr.mailing };
    //         break;
    //     case 'ru':
    //         data = { ...ru.mailing };
    //         break;
    //     default:
    //         data = { ...en.mailing };
    //         break;
    // }

    return <section className={"contact" + (isOpened ? "" : " closed")} onClick={() => setOpening(false)}>
        <div className="list">
            <button onClick={() => window.open('https://t.me/artemkhi')}>
                <img src={!dark ? telegram : telegramDark} alt=''/>
                Telegram
            </button>
            <button onClick={() => window.open('https://wa.me/79188590229')}>
                <img src={!dark ? whatsapp : whatsappDark} alt=''/>
                WhatsApp
            </button>
            <button onClick={() => window.location.replace('mailto:artemkhi.me@gmail.com')}>
                <img src={!dark ? email : emailDark} alt=''/>
                {lang === 'tr' ? 'E-posta' : lang === 'ru' ? 'Эл. почта' : 'Email'}
            </button>
            <hr/>
            <button onClick={() => window.open('https://github.com/artemhiz')}>
                <img src={!dark ? github : githubDark} alt=''/>
                GitHub
            </button>
            <button onClick={() => window.open('https://www.linkedin.com/in/artem-khizhniak-2ab451263/')}>
                <img src={!dark ? linkedin : linkedinDark} alt=''/>
                LinkedIn
            </button>
            {
                lang !== 'ru' ?
                <button onClick={() => window.open('https://www.instagram.com/artemkhi.me')}>
                    <img src={!dark ? instagram : instagramDark} alt=''/>
                    Instagram
                </button>
                :
                <button onClick={() => window.open('https://t.me/artemkhi_me')}>
                    <img src={!dark ? channel : channelDark} alt=''/>
                    Tg-канал
                </button>
            }
        </div>
        <div className='close-bg'>
            <button className='for-mobile close'>
                <img src={!dark? x : xDark} alt=''/>
                {lang === 'tr' ? 'Kapat' : lang === 'ru' ? 'Закрыть' : 'Close'}
            </button>
        </div>
    </section>
}