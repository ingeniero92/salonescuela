import React from 'react';
import { observer } from "mobx-react";

import LadderTextComponent from '../UI/LadderTextComponent';

import news from '../../media/json/news.json'

const NewsComponent = observer(() => {

    return(
        Object.values(news).length > 0 &&
            <section className="section news" name="news">
                <span className="title">Noticias</span>            
                    {Object.values(news).map( (value, index) => (
                        <div key={index} className="new">
                            <span className="text date">{value.date}</span>
                            <LadderTextComponent firstText={value.title} secondText={value.description} />
                            { value.url !== undefined && value.url.trim() !== "" && <a href={value.url} target="blank" className="link">{value.link}</a> }
                        </div>
                    ))}            
            </section>
    );
    
});

export default NewsComponent;