import React, { Component } from 'react';

import Character from '../components/Character/Character';

import './styles/Home.css';
import './styles/Home-tablet.css';
import './styles/Home-desktop.css';
import wallpaper2 from '../img/wallpaper2.jpg';
// import ness from '../img/ness3.jpg';
class Home extends Component {
    state = {
        characters: [
            {
                id: 1,
                name: 'Ness',
                description: 'Ness (ネス, Ness) is the silent main protagonist of EarthBound, He greatly enjoys baseball; not only are most of his weapons various types of baseball bats, but he can also equip several baseball caps'
            },
            {
                id: 2,
                name: 'Paula',
                description: "Paula Jones is the first to join Ness, and the only female member of Ness's team. She usually uses frying pans as her primary weapon, along with many powerful PSI powers."
            },
            {
                id: 3,
                name: 'Jeff',
                description: 'Jeff Andonuts is the only permanent party member who is unable to use PSI abilities. To compensate for that, he can repair broken objects to turn into useful machines and weapons for battle'
            },
            {
                id: 4,
                name: 'Poo',
                description: "Poo has a wide variety of offensive and defensive PSI, along with being decent at attack and defense, and has a noticeable resistance to PSI Fire and PSI Freeze."
            }
        ]
    }
    render() {
        return (
            <div className="homeContainer">
                <div className="homeContainer__welcome">
                    <img src={wallpaper2} alt="This is the cover image of the webpage" />
                    <h1>Welcome to the Earthbound fan page</h1>
                    <p>Intergalactic terror strikes the small town of Onett as a blazing extraterrestrial object crashes in the night! The Earth now faces imminent destruction by the universal evil threat, Giygas.</p>
                </div>
                <h1>Main Characters</h1>
                <div className="homeContainer__characters-box">
                    {this.state.characters.map((char) => {
                        return (
                            <Character key={char.id} id={char.id} name={char.name} description={char.description} />
                        )
                    })}
                </div>                
            </div>
        )
    }
}

export default Home;