
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import img from '../images/2.jpg';



const Header =()=>{
 let navIcon = '';
    const [icon, iconState]= useState(true);
    if (icon) {

    navIcon = <FontAwesomeIcon icon= {faBars} />
    }else{
          navIcon = <FontAwesomeIcon icon= {faTimes} />

    }
  

    return (
        <header>
        <nav>
            <section className= 'logo'>
              <h1>photoSnap</h1>
              </section>

              <ul className= 'desktop--nav'>
                  <li><a href="#">home</a></li>
                  <li><a href="#">about</a></li>
                  <li><a href="#">contact</a></li>
              </ul>

              <section className='icons'>
              <button onClick={()=>{iconState(!icon)}}>{navIcon}</button>

              </section>

        </nav>
            <section className='hero--section'>
              <section className= 'hero--img'>
              <picture>
                  <img src={img} alt=""/>
              </picture>

              </section>

              <section className= 'hero--text'>
               <h1>Lorem ipsum dolor sit</h1>
               <article>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda esse et voluptatibus tempora doloremque in, iure molestiae alias quas repellat aperiam voluptas dolorum facere doloribus odio laboriosam, repellendus ratione.</p>
               </article>

              </section>

            </section>
        </header>
    )
}

export{
    Header
}
