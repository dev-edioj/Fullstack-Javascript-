/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './style.css'
import GrayImg from '../share/gray_img';
import DescriptionWithLink from '../share/DescriptionWithLink';

async function getSatellites(id){
let response = await fetch(`http://localhost:3000/api/${id}.json`)
let data = await response.json();
return data
}

class Planet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            satellites: []
        }
    }

    componentDidMount(){
        getSatellites(this.props.id).then(data => {
            this.setState(state => ({
                satellites: data['satellites']
            }))
        })
    }
    render(){
        let title;
        if(this.props.title_with_underline)
        title = <h4
        r><u>{this.props.name}</u></h4>
        else
        title = <h4>{this.props.name}</h4>
        return (
            
            <div onClick={() => this.props.clickOnPlanet(this.props.name)}>
            {title}
            <h3>{this.props.name}</h3>
            <DescriptionWithLink description={this.props.description} link={this.props.link}/>
            <GrayImg img_url={this.props.img_url} gray={this.props.gray}/>
            <h4>Satélites</h4>
            <ul>
            {this.state.satellites.map((satellites, index)=>
            <li key={index}>{satellites.name}</li>
            )}
            </ul>
            
            <hr/>
            </div>
        )}
    
    }

export default Planet;
