import React from 'react';

const EventItem = (props) => {
        return(
            <li key={props.item.id}>
                <strong>{props.item.name}</strong><br/>
                Gdzie: {props.item.place}<br/>
                Kiedy: {props.item.date} - {props.item.time}<br />
                <button onClick={props.onDeleteClick.bind(this, props.item.id)}>Usuń</button>
            </li>
        );
};

export default EventItem