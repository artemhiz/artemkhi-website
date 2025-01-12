import { useState } from "react";
import { en, ru, tr } from "../Language";
import './Projects.css';
import { useNavigate } from "react-router-dom";

export default function ProjectWindow({ item, lang }) {
    let data;
    switch (lang) {
        case 'tr':
            data = { ...tr.projects };
            break;
        case 'ru':
            data = { ...ru.projects };
            break;
        default:
            data = { ...en.projects };
            break;
    }
    const [imageHovering, setImageHovering] = useState(false);
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const navigate = useNavigate();

    return <section className={("project") + (!item ? " closed" : "")}>
        <section
        className="window"
        style={{
            boxShadow: `0px 0px 20px ${item ? !dark ? (item.color !== '#ffffff' ? item.color : 'black') : (item.color !== '#000000') ? item.color : 'white' : 'auto'}`,
            backgroundColor: `0px 0px 20px ${item ? !dark ? (item.color !== '#ffffff' ? item.color : 'black') : (item.color !== '#000000') ? item.color : 'white' : 'auto'}`
            }}
        >
            {
                item && <>
                <div className="heading">
                    <button
                    className="back"
                    onClick={() => navigate(`${lang ? '/' + lang : ''}/projects`)}
                    style={{ color: !dark ? item.color !== '#ffffff' ? item.color : 'black' : item.color !== '#000000' ? item.color : 'white' }}
                    >
                        {'< '}
                        <span>
                            {data.back}
                        </span>
                    </button>
                </div>
                <div className="body">
                    <div className="text">
                        <div>
                            <h3
                            className="title"
                            style={{
                                color: !dark ? item.color !== '#ffffff' ? item.color : 'black' : item.color !== '#000000' ? item.color : 'white'
                            }}
                            >
                                {
                                    lang === 'tr' ? item.title.turkish :
                                    lang === 'ru' ? item.title.russian : 
                                    item.title.english
                                }
                            </h3>
                            {
                                item.forStudy &&
                                <p className="for-study">
                                    {data.educational}
                                </p>
                            }

                        </div>
                        <div className="not-for-mobile">
                            <p className="description">
                                {
                                    lang === 'tr' ? item.description.turkish :
                                    lang === 'ru' ? item.description.russian :
                                    item.description.english
                                }
                            </p>
                            {
                                item.duration &&
                                <p className="duration">
                                    {
                                        lang === 'ru' ?
                                        <>Этот {item.type === 'bot' ? 'бот' : 'сайт'} был сделан за <span style={{ color: item.color !== '#ffffff' && item.color !== '#000000'  && item.color }}>{item.duration.russian}!</span></>
                                        : lang === 'tr' ?
                                        <>Bu {item.type === 'bot' ? 'bot' : 'web sitesi'} <span style={{ color: item.color !== '#ffffff' && item.color !== '#000000'  && item.color }}>{item.duration.turkish}</span> içinde yapıldı!</>
                                        : 
                                        <>This {item.type} has been done in <span style={{ color: item.color !== '#ffffff' && item.color !== '#000000'  && item.color }}>{item.duration.english}!</span></>
                                    }
                                </p>
                            }
                            <p className="used">
                                <span className="tools" style={{ color: item.color !== '#ffffff' && item.color !== '#000000'  && item.color }}>
                                {item.tools.map((tool, index) => {
                                    return <span key={index}>{tool !== 'Authorization' && tool !== 'Database' ? tool : tool === 'Authorization' ? data.authorization : data.database}{index === item.tools.length - 2 ? <span className="separator">{data.and}</span> : index !== item.tools.length - 1 ? <span className="separator">, </span> : <></> }</span>
                                })}
                                </span>
                                {item.tools.length > 1 ? data.were : data.was} {data.used}
                            </p>
                        </div>
                    </div>
                    <div className="image">
                        <img
                        src={item.image}
                        alt={item.id}
                        onClick={() => window.open(item.link)}
                        onMouseEnter={() => setImageHovering(true)}
                        onMouseLeave={() => setImageHovering(false)}
                        style={{ borderColor: !dark && item.color !== '#ffffff' ? item.color : item.color !== '#000000' ? item.color : 'white', boxShadow: imageHovering ? `0px 0px 10px 10px ${!dark ? item.color !== '#ffffff' ? item.color : 'black' : item.color !== '#000000' ? item.color : 'white'}` : 'none' }}
                        />

                        <button
                        className="to-site"
                        onClick={() => window.open(item.link)}
                        style={{
                            backgroundColor: item.color,
                            border: item.color === '#000000' || item.color === '#ffffff' ? dark ? '1px solid white' : '1px solid black' : 'none', 
                            color: item.textColor,
                        }}
                        >
                            {item.type === 'bot' ? data.to_the_bot : data.to_the_site}
                        </button>
                        
                        <div className="for-mobile">
                            <p className="description">
                                {
                                    lang === 'tr' ? item.description.turkish :
                                    lang === 'ru' ? item.description.russian :
                                    item.description.english
                                }
                            </p>
                            {
                                item.duration &&
                                <p className="duration">
                                    {
                                        lang === 'ru' ?
                                        <>Этот {item.type === 'bot' ? 'бот' : 'сайт'} был сделан за <span style={{ color: item.color !== '#ffffff' && item.color !== '#000000'  && item.color }}>{item.duration.russian}!</span></>
                                        : lang === 'tr' ?
                                        <>Bu {item.type === 'bot' ? 'bot' : 'web sitesi'} <span style={{ color: item.color !== '#ffffff' && item.color !== '#000000'  && item.color }}>{item.duration.turkish}</span> içinde yapıldı!</>
                                        : 
                                        <>This {item.type} has been done in <span style={{ color: item.color !== '#ffffff' && item.color !== '#000000'  && item.color }}>{item.duration.english}!</span></>
                                    }
                                </p>
                            }
                            <p className="used">
                                <span className="tools" style={{ color: item.color !== '#ffffff' && item.color !== '#000000'  && item.color }}>
                                {item.tools.map((tool, index) => {
                                    return <span key={index}>{tool !== 'Authorization' && tool !== 'Database' ? tool : tool === 'Authorization' ? data.authorization : data.database}{index === item.tools.length - 2 ? <span className="separator">{data.and}</span> : index !== item.tools.length - 1 ? <span className="separator">, </span> : <></> }</span>
                                })}
                                </span>
                                {item.tools.length > 1 ? data.were : data.was} {data.used}
                            </p>
                        </div>
                    </div>
                </div>
                </>
            }
        </section>
    </section>
}