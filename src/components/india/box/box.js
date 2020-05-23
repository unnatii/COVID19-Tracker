import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './cards';
import cx from 'classnames';
import styles from './box.module.css'


const Ibox = ({coviddata}) => {
  
 

const{confirmed,active,recovered,deaths} =coviddata
// if({}){                                          //empty object is true value
//   //console.log(coviddata)
//   console.log(true);
// }else{                       
//   console.log(false);
// }


if(confirmed){
 // console.log(confirmed);

  return ( <div className={cx("container",styles.card)}>
  <div className="row">
 
    <div className={cx("col-sm-6",styles.confirmed)} >
      <Card  title="Confirmed" number={confirmed} />
    </div>
    <div className={cx("col-sm-6",styles.active)} >
    <Card title="Active" number={active} />
    </div>
    </div>
    <div className="row">
    <div className={cx("col-sm-6",styles.recovered)} >
    <Card title="Recovered" number={recovered}  />
    </div>
    <div className={cx("col-sm-6",styles.deaths)} >
    <Card title="Deaths" number={deaths}  />
    </div>
  </div>
</div>);
}
return (<div className={cx("container",styles.card)}>
<div className="row">

  <div className={cx("col-sm-6",styles.confirmed)} >
    <Card  title="Confirmed" number="Loading" />
  </div>
  <div className={cx("col-sm-6",styles.active)} >
  <Card title="Active" number="Loading" />
  </div>
  </div>
  <div className="row">
  <div className={cx("col-sm-6",styles.recovered)} >
  <Card title="Recovered" number="Loading"  />
  </div>
  <div className={cx("col-sm-6",styles.deaths)} >
  <Card title="Deaths" number="Loading"  />
  </div>
</div>
</div>);
   
}
 
export default Ibox;