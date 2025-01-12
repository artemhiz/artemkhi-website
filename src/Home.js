import './Home.css'
import eyeLight from './assets/Rays Eye Light.png'
import eyeDark from './assets/Rays Eye Dark.png'
import artemkhi from './assets/Artemkhi-memoji.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { en, ru, tr } from './Language';
import { projects } from './Projects/projects_list'
import { useEffect } from 'react'
import Mailing from './Mailing/Mailing'
// import { halloween } from './App'

export default function Home({ setContactsOpening }) {
    const latestProject = projects[0];
    const { lang } = useParams();
    const navigate = useNavigate();
    let data = {};
    switch (lang) {
        case 'tr': 
            data = { ...tr.home };
            break;
        case 'ru':
            data = { ...ru.home };
            break;
        default:
            data = { ...en.home };
            break;
    }

    function stopPropagationAndNavigate(event, link) {
        event.stopPropagation();
        navigate(link);
    }

    useEffect(() => {
        document.title = (lang === 'ru' ? 'Главная' : lang === 'tr' ? 'Anasayfa' : 'Home') + ' | Artemkhi';
    }, [lang])

    return <main className="home">
        <section id='introduction'>
            <section className={"block" + (lang === 'tr' ? " tr" : "")} id="new-life">
                <div className='lines'>
                    <div className='red'>unneccessary text</div>
                    <div className='star'>unneccessary text</div>
                    <div className='dark-color'>unneccessary text</div>
                </div>
                <h1>{data.slogan}</h1>
            </section>
            <section className='block' id='work-with-me' onClick={() => navigate(window.location.pathname + '#mail')}>
                <h4>{data.your_next}</h4>
                <button>{data.order}</button>
            </section>
            <section className='block' id='imagination'>
                <div className='top'>
                    <h4><b>{data.anything}</b></h4>
                </div>
                <img className='for-mobile light' src={eyeLight} alt=''/>
                <img className='for-mobile dark' src={eyeDark} alt=''/>
                <img className='not-for-mobile light' src={eyeLight} alt=""/>
                <img className='not-for-mobile dark' src={eyeDark} alt=""/>
                <div className='bottom'>
                    <h4>{data.you_think_and_imagine} – <b>{data.i_do}!</b></h4>
                    <p>{data.in_case}</p>
                </div>
            </section>
        </section>
        <section id='about-artemkhi'>
            <section className='block' id='main'>
                <div className='image'>
                    <img src={artemkhi} alt='Artem Khi'/>
                </div>
                <div className='text'>
                    <h3>{data.who_is}</h3>
                    <p>{data.about_text}</p>
                    <Link to={(lang ? `/${lang}` : '') + '/about'}>{data.about_button}</Link>
                </div>
            </section>
            <section className='block' id='stack' onClick={() => navigate(`${lang !== 'en' ? '/' + lang : ''}/capabilities`)}>
                <h3>{data.my_stack}</h3>
                <ul className='bubbles'>
                    <li id='html' onClick={event => stopPropagationAndNavigate(event, `${lang !== 'en' ? '/' + lang : ''}/capabilities#html`)}>HTML/CSS</li>
                    <li id='js' onClick={event => stopPropagationAndNavigate(event, `${lang !== 'en' ? '/' + lang : ''}/capabilities#javascript`)}>JavaScript</li>
                    <li id='react' onClick={event => stopPropagationAndNavigate(event, `${lang !== 'en' ? '/' + lang : ''}/capabilities#react`)}>React</li>
                    <li id='node' onClick={event => stopPropagationAndNavigate(event, `${lang !== 'en' ? '/' + lang : ''}/capabilities#node-js`)}>Node.js</li>
                    {/* <li id='redux'>Redux</li> */}
                </ul>
                <Link onClick={event => event.stopPropagation()} to={`${lang !== 'en' ? '/' + lang : ''}/capabilities#tools`}>{data.stack_button}</Link>
            </section>
            <section className='block' id='bots' onClick={() => navigate(`/${lang ? lang + '/' : ''}bots`)}>
                <h3>{data.welcome_bots}</h3>
                <button>{data.bots_more}</button>
            </section>
            <section className='block' id='portfolio' onClick={() => navigate(`${lang === 'tr' || lang === 'ru' ? '/' + lang : ''}/projects`)}>
                <div className='text'>
                    <h3>{data.previous_projects}</h3>
                    <button>{data.portfolio}</button>
                </div>
                <div className='image'>
                    <div className='main' style={{backgroundImage: `url(${latestProject.image})`}}/>
                </div>
            </section>
        </section>
        <Mailing lang={lang} setContactsOpening={setContactsOpening}/>
    </main>
}