import { useEffect, useState } from "react";
import { en, ru, tr } from "./Language";
import { useNavigate } from "react-router-dom";
import cv from './assets/Artem Khi CV November.pdf';

export default function Footer({ lang }) {
    const navigate = useNavigate();
    let data = {};
    switch (lang) {
        case 'tr': 
            data = { ...tr.footer };
            break;
        case 'ru':
            data = { ...ru.footer };
            break;
        default:
            data = { ...en.footer };
            break;
    }

    const [languageSelectorOpened, setLanguageSelectorOpening] = useState(false);

    useEffect(() => {
        const handleScroll = (event) => {
            setLanguageSelectorOpening(false);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        }, []);

    function setLanguage(language) {
        localStorage.setItem('ArtemkhiLanguage', JSON.stringify(language));
        switch (language) {
            case 'ru':
                window.location.pathname = '/ru';
                break;
            case 'tr':
                window.location.pathname = '/tr';
                break;
            default:
                window.location.pathname = '/';
        }
        setLanguageSelectorOpening(false);
    }

    return <footer>
        <div className="left">
            <button onClick={() => navigate(`${lang !== 'en' ? '/' + lang : ''}/about`)}>{data.about}</button>
            {/* <button onClick={() => navigate(`${lang !== 'en' ? '/' + lang : ''}/projects`)}>{data.projects}</button> */}
            <button onClick={() => window.open('https://github.com/artemhiz')}>{data.github}</button>
            <button onClick={() => window.open(cv)}>{data.cv}</button>
        </div>
        <div className="right">
            <div className="language-place">
                <div className={("window") + (!languageSelectorOpened ? " closed" : "")}>
                    <p>choose the language</p>
                    <div className="buttons">
                        <button onClick={() => setLanguage('ru')}>Русский<br/><span>Russian</span></button>
                        <button onClick={() => setLanguage('en')}>English</button>
                        <button onClick={() => setLanguage('tr')}>Türkçe<br/><span>Turkish</span></button>
                    </div>
                </div>
                <button className="language" onClick={() => setLanguageSelectorOpening(prev => !prev)}>{data.language_term} – {data.language}</button>
            </div>
            <p className="copyright">© {lang !== 'ru' ? 'Artem Khizhniak' : 'Артём Хижняк'}, {new Date().getFullYear()}</p>
        </div>
    </footer>
}