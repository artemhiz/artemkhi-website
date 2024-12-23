import { useParams } from 'react-router-dom';
import { en, ru, tr } from '../Language';
import './About.css';
import { useEffect } from 'react';

export default function About() {
    const { lang } = useParams();
    let data;
    switch (lang) {
        case 'tr': 
            data = { ...tr.about };
            break;
        case 'ru':
            data = { ...ru.about };
            break;
        default:
            data = { ...en.about };
            break;
    }

    useEffect(() => {
        document.title = (lang === 'tr' ? 'Hakkımda' : lang === 'ru' ? 'Обо мне' : 'About Me') + ' | Artemkhi';
    }, [lang])

    return <main className="about">
        <section className="block" id='main'>
            <div className='heading'>
                <div className='left'>
                    <div className='line red'/>
                    <div className='line star'/>
                    <div className='line dark-color'/>
                </div>
                <div className='center'>
                    <h1>{data.who_is}</h1>
                </div>
                <div className='right'>
                    <div className='line red'/>
                    <div className='line star'/>
                    <div className='line dark-color'/>
                </div>
            </div>
            <p>{data.who_description}</p>
        </section>
        <section className='block' id='education'>
            <h3>{data.education}</h3>
            <div className='card-list'>
                <div className='card' id='college'>
                    <div className='for-image'/>
                    <div className='text'>
                        <h4>{data.rksi}</h4>
                        <p className='years'>2020-2022</p>
                        <p className='description'>{data.rksi_description}</p>
                    </div>
                </div>
                <div className='card' id='can-she-code'>
                    <div className='for-image'/>
                    <div className='text'>
                        <h4>{data.can_she_code}</h4>
                        <p className='years'>2022-2024</p>
                        <p className='description'>{data.can_she_code_description}</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='block' id='lifestyle'>
            <h3>{data.lifestyle}</h3>
            <p>{data.lifestyle_1}</p>
            <p>{data.lifestyle_2}</p>
            <p>{data.lifestyle_3}</p>
            <p>{data.lifestyle_4}</p>
        </section>
    </main>
}