import React,{useState,useEffect} from 'react';
import {DataDistrict} from '../../../api'
const Dtable = () => {
    const [districtinfo,setinfo]=useState([]);
    useEffect(()=>{
        const dis=async()=>{
            const data=await DataDistrict();
            setinfo(data.data);
        }
        dis();
        
    },[]);
    //const ar=Object.entries(districtinfo).map(([key,val]) => (val));
   //const ar=Object.keys(districtinfo).map((keyName) => (districtinfo[keyName]));
    // const row=Object.keys(districtinfo).map((keyName, i) => (
                        

    //     <tr><td key={i}>{districtinfo[keyName].statecode}</td></tr>
        
            
    // ))

    const a=Object.entries(districtinfo).map(([key,val]) => {
           return  Object.keys(val).map((keyName)=>{
               //console.log(val[keyName]);
                return Object.entries(val[keyName]).map(([k,v]) => {
                    return <tr><td>{key}</td>
                    <td>{k}</td>
                    <td>{v.confirmed}</td>
                    <td>{v.active}</td>
                    <td>{v.recovered}</td>
                    <td>{v.deceased}</td>
                    </tr>
                });
            })


    });




    return (
         <table>
        <thead>
          <tr>
            <th>State</th>
            <th>District</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
            
          </tr>
        </thead>
        <tbody>
   
           {a}
        </tbody>
      </table>
      );
}
 
export default Dtable;