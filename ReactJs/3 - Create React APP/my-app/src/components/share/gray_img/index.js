import React from 'react';
import './style.css'


function GrayImg(props) {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img className={props.gray ? 'gray-img' : 'color-img'} src={props.img_url}></img>
    );

}
export default GrayImg;


