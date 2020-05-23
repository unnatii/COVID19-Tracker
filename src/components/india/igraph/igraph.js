import React,{useState,useEffect} from 'react';
import {DailyDataIndia} from '../../../api'
import {Line} from 'react-chartjs-2';
import styles from './igraph.module.css'
import cx from 'classnames';
//import Moment from 'react-moment';

const Igraph = () => {
    const [dailydata,setdailydata]=useState([]);
    useEffect(() =>{
        const fetch = async () =>{
            const data=await DailyDataIndia();
           
            setdailydata(data);
           
        }
        //console.log(dailydata);
        fetch();
       
    },[setdailydata])

    const linechart=
        dailydata.length ? (
        <Line
            data={{
            labels:dailydata.map(({date})=>{
            var date_input = new Date(date);
            var day = date_input.getDay();
            var month = date_input.getMonth() + 1;
            var dd_mm = `${day}/${month}`;
            return dd_mm; 
        }),
                datasets:[{
                    label:'Confirmed',
                    data:dailydata.map(({confirmed})=>confirmed),
                
                    backgroundColor:"#D33E2E",
                    borderColor:"#D33E2E",
                    
                    fill:false,
                    
                    
                },
                {
                    label:'Active',
                    data:dailydata.map(({active})=>active),
                
                    backgroundColor:"#F82611",
                    borderColor:"#F82611",
                    
                    fill:false,
                    
                    
                },
                {
                    label:'Recovered',
                    data:dailydata.map(({recovered})=>recovered),
                
                    backgroundColor:"#73C003",
                    borderColor:"#73C003",
                    
                    fill:false,
                    
                    
                },
                {
                    label:'Deaths',
                    data:dailydata.map(({deaths})=>deaths),
                
                    backgroundColor:"black",
                    borderColor:"black",
                    
                    fill:false,
                    
                    
                }

            ]
           
           
           
            }}
            options={{ maintainAspectRatio: false ,
               
                scales: {
                    xAxes: [{
                        ticks: { display: true },
                        gridLines: {
                            display: true,
                            drawBorder: true
                            
                        }
                    }],
                    yAxes: [{
                        ticks: { display: true },
                        gridLines: {
                            display: false,
                            drawBorder: true
                        }
                    }]
                }
                
            }}        //custom size
         />):null;
    
        return ( <div className={cx(styles.igraph,styles.confirmed)}>{linechart}</div> );
}
 
export default Igraph;