import React,{useState,useEffect} from 'react';
import {DataIndiaStates} from '../../api'; 
import {Table,Ibox,Igraph,Dtable} from '../../components'
import styles from './india.module.css'
import cx from 'classnames';
const India = () => {
    const [data,setdata]=useState([]);
    const[states,setInfo]=useState([]);

    useEffect(()=>{

        async function statesinfo(){
            const res=await DataIndiaStates();
            // setInfo(res,console.log(states));
            // setdata(res[0],console.log(data,"tt"));
              setInfo(res);
             setdata(res[0]);

        }
    
        statesinfo()
    },[data])
    return ( <div className={styles.main}>
        <h1><strong>COVID19 : India</strong></h1>
        <div className="container">
  <div className="row">
    <div className={cx("col-lg-6",styles.tablediv)}>
    <Ibox coviddata={data}/>  
    </div>
    <div className="col-lg-6">
   <Igraph/>
    </div>
  </div>
</div>
 
<Table stateinfo={states}/>
<Dtable/>
         </div> );
}
 
export default India;