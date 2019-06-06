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
                id={card.id}
                title = {card.title}
                content = {card.content}
                onClickDelete={props.onClickDelete}
                />
            )}
            <button
               type="button"
               className = 'List-add-button'
               onClick={() => props.onClickAdd(props.id)}>
                + Add Random card
            </button>
        </div>
    </section>
  );
}

List.defaultProps = {
  onClickAdd: () => { },
}

export default List;