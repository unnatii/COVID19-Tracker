import React ,{useState,useEffect}from 'react';
import {countries} from '../../../api'
import styles from './selector.module.css'
import cx from 'classnames';



const Selector = ({handleSelection}) => {
    const [country,setcountry] =useState([]);

    useEffect(()=>{
        const fetchapi=async ()=>{
            const apidata=await countries();
        setcountry(apidata);
        
        }
        fetchapi();
        //console.log(country);
    },[setcountry]);                          //provide second parameter otherwise it will run endlessly

    const options=country.length?(country.map((name,i)=> (<option key={i} value={name}>{name}</option>))):null;
   //console.log(country);
    return (
        <form>
            <div className={cx("form-group",styles.formstyle)} >
    <select className="form-control" onChange={(e)=> { //console.log(e.target.value, "value"); 
                                                      handleSelection(e.target.value)}}>
        <option value="" > Global</option>
    {options}
  </select>
  </div>
  </form>);
}
 
export default Selector;