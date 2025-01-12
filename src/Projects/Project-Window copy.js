import { useState } from "react";
import { en, ru, tr } from "../Language";

export default function ProjectWindow({ item, setItem, lang }) {
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

    return <section className={("project") + (!item ? " closed" : "")}>
        <section className="window" style={{ boxShadow: `0px 0px 20px ${item && (item.color !== '#ffffff' ? item.color : 'black')}`, backgroundColor: `0px 0px 20px ${item && (item.color !== '#ffffff' ? item.color : 'black')}` }}>
            {
                item && <>
                <button className="back" onClick={() => setItem()} style={{ color: item.color !== '#ffffff' && item.color !== '#000000' && item.color }}>{'< ' + data.back}</button>
                {item.forStudy && <p className="for-study">{data.educational}</p>}
                <img src={item.image} alt={item.id} onClick={() => window.open(item.link)} onMouseEnter={() => setImageHovering(true)} onMouseLeave={() => setImageHovering(false)} style={{ borderColor: item.color !== '#ffffff' ? item.color : 'black', boxShadow: imageHovering ? `0px 0px 10px 10px ${item.color !== '#ffffff' ? item.color : 'black'}` : 'none' }}/>
                <h1 className="title" style={{ color: item.color !== '#ffffff' && item.color !== '#000000' && item.color }}>{lang === 'tr' ? item.title.turkish : lang === 'ru' ? item.title.russian : item.title.english}</h1>
                <p className="description">{lang === 'tr' ? item.description.turkish : lang === 'ru' ? item.description.russian : item.description.english}</p>
                <p className="used">
                    <span className="tools" style={{ color: item.color !== '#ffffff' && item.color !== '#000000'  && item.color }}>
                    {item.tools.map((tool, index) => {
                        return <>{tool !== 'Authorization' && tool !== 'Database' ? tool : tool === 'Authorization' ? data.authorization : data.database}{index === item.tools.length - 2 ? <span className="separator">{data.and}</span> : index !== item.tools.length - 1 ? <span className="separator">, </span> : <></> }</>
                    })}
                    </span>
                    {item.tools.length > 1 ? data.were : data.was} {data.used}
                </p>
                <button className="to-site" onClick={() => window.open(item.link)} style={{ backgroundColor: item.color, border: item.color === '#ffffff' ? '1px solid black' : 'none', color: item.textColor }}>{data.to_the_site}</button>
                </>
            }
        </section>
    </section>
}