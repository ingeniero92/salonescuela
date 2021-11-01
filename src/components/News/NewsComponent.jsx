import React from 'react';
import { observer } from "mobx-react";

import { useAppStore } from "../../providers/StoreRootProvider";
import LadderTextComponent from '../UI/LadderTextComponent';

const NewsComponent = observer(() => {  

    const appStore = useAppStore(); 

    return(
        Object.values(appStore.news).length > 0 &&
            <section className="section news" id="news">
                <span className="title">Noticias</span>            
                    {Object.values(appStore.news).map( (value, index) => (
                        <div key={index} className="new">
                            <span className="text date">{value.date}</span>
                            <LadderTextComponent firstText={value.title} secondText={value.description} img={value.img !== undefined ? "img/news/" + value.img : undefined}/>
                            { value.url !== undefined && value.url.trim() !== "" && <a href={value.url} target="blank" className="newsLink">{value.link}</a> }
                        </div>
                    ))}            
            </section>
    );
    
});

export default NewsComponent;