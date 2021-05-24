import React from 'react';

import './styles/Blog.css';
import './styles/Blog-desktop.css';
import ness from '../img/ness3.jpg';
import user_img from '../img/main2.png';

class Blog extends React.Component {
    state = {
        isLoved: false,
        nLikes: 0
    }

    toggleHeart = () => {
        this.setState({
            isLoved: !this.state.isLoved,
            nLikes: this.state.isLoved ? 0 : 1
        });
    }

    render() {
        const isLoved = this.state.isLoved;
        const nLikes = this.state.nLikes;
        return (
            <div className="blogContainer">
                <section className="blogContainer__banner">
                    <div onClick={this.toggleHeart} className="blogContainer__banner-likes">
                        <span className={`blogContainer__banner-likes-hearth ${isLoved ? "isLoved animated-like" : ""}`}></span>
                        <span className="blogContainer__banner-likes-counter">{nLikes}</span>
                    </div>
                    <div className="blogContainer__banner-info">
                        <h3>Ego & Earthbound</h3>
                        <div className="blogContainer__banner-info-user">
                            <div>
                                <img src={user_img} alt="blog user creator image"/>
                            </div>                        
                            <p className="blogContainer__banner-info-user-name">Moisés Valles</p>
                            <p className="blogContainer__banner-info-user-date">1 month ago</p>
                        </div>
                    </div>
                </section>
                <section className="blogContainer__content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum odit possimus reprehenderit, sed maiores dolor, dignissimos veritatis quaerat numquam vitae amet esse impedit optio voluptatibus assumenda illo! Voluptatem, non. Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Repellendus quisquam excepturi, sint exercitationem corrupti placeat praesentium optio reiciendis suscipit ut neque non hic delectus dolores ex, dolorem ab dolor dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit odio mollitia quo reprehenderit quidem praesentium ut pariatur est fugiat nobis. Harum ad soluta eos modi recusandae illum earum voluptatem iusto.</p> <br />
                    <img src={ness} alt="imagen de ness" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt non dolor facilis sit. Assumenda aliquam ex aperiam aut vitae tempora vel numquam ipsa culpa! Tempora fugit maiores numquam ut!lorem.10 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam suscipit dicta eos, quisquam odit sed labore culpa expedita provident voluptatibus optio tempora vitae facere tempore ducimus. Culpa officiis cumque facere.</p>
                </section>
            </div>
        )
    }
}

export default Blog;