import React from "react";
import styles from './Card.module.css'
  

function Card(props){
  
    return (
      <div className={styles.card}>
        <div className={styles.header}>{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div className='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }

  export default Card