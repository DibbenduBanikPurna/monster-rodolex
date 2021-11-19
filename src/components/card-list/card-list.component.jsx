import React from 'react'
import Card from '../card/card.component';
import './card-list.styles.css'
const CardList=props=>(
    <div className='Card-List'>
        {props.monsters.map(monsters=>(
          <Card key={monsters.id} monsters={monsters}/>
        ))}  
    </div>
)
export default CardList;