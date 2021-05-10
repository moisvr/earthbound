import React from 'react';

import ness from '../../img/ness.png';
// import ness2 from '../../img/ness3.jpg';
import paula_img from '../../img/Paule_sprite.gif';
import jeff_img from '../../img/jeff.gif';
import poo_img from '../../img/poo.gif'
import './Character.css';

function Character(props) {
    let image;
    switch (props.id) {
        case 1: image = ness;
        break;

        case 2: image = paula_img;
        break;

        case 3: image = jeff_img;
        break;

        case 4: image = poo_img;
        break;
    
        default: image = paula_img;
        break;
    }
    return (
        <div className="homeContainer__characters">
            <div className="homeContainer__characters-img">
                <img src={image} alt=""/>
            </div>                    
            <div className="homeContainer__characters-info">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Character;