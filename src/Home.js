import './Home.css'
import immersion from './assets/Rays immersion.png'
import eye from './assets/Rays eye.jpg'
import artemkhi from './assets/Artemkhi.png'
import { Link, useParams } from 'react-router-dom'
import { en, ru, tr } from './Language';
import { projects } from './Projects/projects_list'

export default function Home() {
    const latestProject = projects[0];
    const { lang } = useParams();
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

    return <main className="home">
        <section id='introduction'>
            <section className="block" id="new-life">
                <img src={immersion} alt=''/>
                <h1>{data.slogan}</h1>
            </section>
            <section className='block' id='work-with-me'>
                <h4>{data.your_next}</h4>
                <button>{data.order}</button>
            </section>
            <section className='block' id='imagination'>
                <img className='for-mobile' src={eye} alt=''/>
                <div className='top'>
                    <h4><b>{data.anything}</b></h4>
                </div>
                <img className='not-for-mobile' src={eye} alt=""/>
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
            <section className='block' id='stack'>
                <h3>{data.my_stack}</h3>
                <ul className='bubbles'>
                    <li id='html'>HTML/CSS</li>
                    <li id='js'>JavaScript</li>
                    <li id='react'>React</li>
                    <li id='node'>Node.js</li>
                    <li id='redux'>Redux</li>
                </ul>
                <Link>{data.stack_button}</Link>
            </section>
            <section className='block' id='portfolio'>
                <div className='text'>
                    <h3>{data.previous_projects}</h3>
                    <button>{data.portfolio}</button>
                </div>
                <div className='image'>
                    <div className='main' style={{backgroundImage: `url(${latestProject.image})`}}/>
                </div>
            </section>
        </section>
        {/* <h2>Как создается сайт</h2>
        <section className='stages'>
            <section className='block' id='ideas'>
                <div className='thumbnail'>
                    <img />
                </div>
                <div className='text'>
                    <h3>Идеи на бумаге</h3>
                    <p>Как только появляются первые мысли о сайте-проекте, мы начинаем размышлять о том, как он должен выглядеть, какое будет его наполнение</p>
                </div>
            </section>
        </section>
        <section className='mailing'>
            <section className='block' id='mail'>
                <div>
                    <img src={mail} alt='' />
                    <h4>Приступим?</h4>
                    <form>
                        <input name='email' type='email' placeholder='ваша эл. почта' required />
                        <input name='message' type='text' placeholder='ваша идея' required/>
                        <input name='budget' type='text' placeholder='желаемый бюджет' />
                        <button type='submit'>Давайте работать вместе</button>
                    </form>
                </div>
            </section>
        </section>
        */}
    </main>
}