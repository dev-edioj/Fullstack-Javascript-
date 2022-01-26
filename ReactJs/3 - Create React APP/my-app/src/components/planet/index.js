/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState, useEffect } from 'react';
import './style.css';
import GrayImg from '../share/gray_img';
import DescriptionWithLink from '../share/DescriptionWithLink';
import Form from './form';

import { useParams } from 'react-router-dom' 

async function getPlanet(id){
let response = await fetch(`http://localhost:3000/api/${id}.json`)
let data = await response.json();
return data
}



const Planet = () => {
    const [satellites, setSatellites] = useState([]);

    const [planet, setPlanet] = useState({});

    let { id } = useParams();


    useEffect(()=>{
        getPlanet(id).then(data => {
            setSatellites(data['satellites']);
            setPlanet(data['data']);
        })
    })

    const addSatellite = (new_satellites) => {
        setSatellites([...satellites, new_satellites])
    }
    
        
    let title;
    if(planet.title_with_underline)
    title = <h4><u>{planet.name}</u></h4>
    else
    title = <h4>{planet.name}</h4>

        return (
            
            <div>
            {title}
            <h4>{planet.name}</h4>
            <DescriptionWithLink description={planet.description} link={planet.link}/>
            <GrayImg img_url={planet.img_url} gray={planet.gray}/>
            <h4>Satélites</h4>
            <hr/>
            <Form addSatellite={addSatellite}/>
            <ul>
            {satellites.map((satellites, index)=>
            <li key={index}>{satellites.name}</li>
            )}
            </ul>
            
            <hr/>
            </div>
        )
}

export default Planet;

