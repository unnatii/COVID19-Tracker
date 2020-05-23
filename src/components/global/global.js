import React, { Component } from 'react';
import {Box,Graph,Selector,Map} from '../../components'
import {getData} from '../../api';      //named export , and no need to write index.js 
import styles from './global.module.css'



class Global extends Component {
   state={
       data:{},
       selected:"",
   }

   handleSelection = async (country)=>{
      this.setState({selected:country}, async () => {
       // console.log(this.state.selected, "dd");
        const fetchdata=await getData(this.state.selected);
        this.setState({data:fetchdata});
      });
      
      
   }

//WARNING! To be deprecated in React v17. Use componentDidMount instead.


     async componentDidMount() {
        const fetchdata=await getData(this.state.selected);
        this.setState({data:fetchdata});
       //
       // console.log(this.state.data,"cwm");                    //dont use any msg as will get [object object]
     
      }
   
    
    render() { 
   
        const {data}=this.state;
        return (
        <React.Fragment>

<div className={styles.main}>
<h1><strong>COVID19 Tracker</strong></h1>


<Map/>
<Box  coviddata={data}/>
            <Selector handleSelection={this.handleSelection}/>
            <Graph/>
            
</div>
     
           
        </React.Fragment>
          );
    }
}
 
export default Global;