import React, { useState } from 'react';

const Button =()=>{
    let value = 'follow'
   const [followButton, followState] = useState(false);

   if (followButton) {
       value = 'following'
       
   }

    return (
      
        <button className='follow--button' onClick = {()=>{followState(!followButton)}}>
           {value}
        </button>

    )
}

export{
    Button
}