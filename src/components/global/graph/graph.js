import React,{useState,useEffect} from 'react';
import {DailyData} from '../../../api'
import {Line} from 'react-chartjs-2';
import styles from './graph.module.css'


const Graph = () => {
    const [dailydata,setdailydata]=useState([]);
    useEffect(() =>{
        const fetch = async () =>{
            const data=await DailyData();
           
            setdailydata(data);
           
        }
        //console.log(dailydata);
        fetch();
       
    },[setdailydata])

    const linechart=
        dailydata.length ? (
        <Line
            data={{
                labels:dailydata.map(({date})=>date),
                datasets:[{
                    label:'infected',
                    data:dailydata.map(({confirmed})=>confirmed),
                    fill:false
                    
                }]
           
           
           
            }}
         />):null;
    
        return ( <div className={styles.graph}>{linechart}</div> );
}
 
export default Graph;