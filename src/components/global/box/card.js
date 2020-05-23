import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import CountUp from  'react-countup';

const   Card = ({title,number,definition}) => {


    return ( <div className="card" >
    <div className="card-body">
<h5 className="card-title">{title}</h5>
<h6 className="card-subtitle mb-2 text-muted">{number}</h6>
<p className="card-text">{definition}</p>
    
    </div>
  </div> );
}
 
export default Card;