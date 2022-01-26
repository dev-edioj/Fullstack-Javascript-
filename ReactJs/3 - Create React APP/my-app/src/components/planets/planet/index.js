/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './style.css';
import GrayImg from '../share/gray_img';
import DescriptionWithLink from '../share/DescriptionWithLink';




const Planet =(props)=> {
 
    let title;
    if(props.title_with_underline)
    title = <h4><u>{props.name}</u></h4>
    else
    title = <h4>{props.name}</h4>

        return (
            
            <div>
            {title}
            <h4>{props.name}</h4>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url} gray={props.gray}/>
            <hr/>
            </div>
        )
}

export default Planet;
