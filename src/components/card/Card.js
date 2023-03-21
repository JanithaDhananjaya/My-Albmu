import React from 'react';
import './CardStyles.css';

/* This is a functional component that renders a Card */

const Card = (props) => {
    return (
        <div className="card">
            <img className='card-image' src={props.image} alt={props.title}/>
            <p className='card-title'>
                {props.title} <br/>
                <span className='card-count'>({props.count} pictures)</span>
            </p>
        </div>
    );
}

export default Card;
