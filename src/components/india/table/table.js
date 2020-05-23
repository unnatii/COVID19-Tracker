import React from 'react';
import  './table.module.css'

const Table = ({stateinfo}) => {
    //console.log(stateinfo,"api");
    const row=stateinfo.map((each)=>{
        
        //console.log(state,"**");
      return  <tr>
              <td>{each.state}</td>
              <td>{each.confirmed}</td>
              <td>{each.active}</td>
              <td>{each.recovered}</td>
              <td>{each.deaths}</td>
          </tr>

    })
    return (
         <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
      {row}
           
        </tbody>
      </table>
      );
}
 
export default Table;