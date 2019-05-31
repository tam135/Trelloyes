import React from 'react';
import Card from './Card'
import './List.css'

function List(props) {
  return (
    <section className='List'>
        <header class="List-header">
            {props.header}
        </header>
        <div class="List-cards">
            {props.cards.map((card) => 
                <Card
                key = {card.id}
                title = {card.title}
                content = {card.content}
                />
            )}
            <button type="button">
                  + Add Random card
            </button>
        </div>
    </section>
  );
}

export default List;