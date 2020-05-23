import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card';
import cx from 'classnames';
import styles from './Box.module.css'


const Box = ({coviddata}) => {
  
 

const{confirmed,recovered,deaths} =coviddata
// if({}){                                          //empty object is true value
//   //console.log(coviddata)
//   console.log(true);
// }else{                       
//   console.log(false);
// }


if(confirmed){
  //console.log(confirmed);

  return ( <div className={cx("container",styles.card)}>
  <div className="row">
 
    <div className={cx("col-sm-3",styles.confirmed)} >
      <Card  title="Infected" number={confirmed.value} definition="Number of people infected from covid19"/>
    </div>
    <div className={cx("col-sm-3",styles.recovered)} >
    <Card title="Recovered" number={recovered.value} definition="Number of people recovered from covid19"/>
    </div>
    <div className={cx("col-sm-3",styles.deaths)} >
    <Card title="Deceased" number={deaths.value}  definition="Number of people died from covid19"/>
    </div>
    
  </div>
</div>);
}
return (<div className={cx("container",styles.card)} >
 <div className="row">

   <div className="col-sm-3" style={{margin:'20px 50px 20px 65px'}}>
     <Card  title="Infected" number="Loading.." definition="Loading.."/>
   </div>
   <div className="col-sm-3" style={{margin:'20px 50px 20px 10px'}}>
   <Card title="Recovered" number="Loading.." definition="Loading.."/>
   </div>
   <div className="col-sm-3" style={{margin:'20px 0 20px 10px'}}>
   <Card title="Deceased" number="Loading.." definition="Loading.."/>
   </div>
   
 </div>
</div>);
   
}
 
export default Box;