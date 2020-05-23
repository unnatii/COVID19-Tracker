
import React, { Component } from 'react';
import ReactMapboxGl ,{ Layer, Feature }from 'react-mapbox-gl';

import {countriesData} from '../../../api'
import Icon from './Google_Maps_pin.svg'



class Map extends Component {
    state = { 
        data:[],
        fitBounds :[
            [40, -40],
            [-90, 90]
            ]
        
     }
     
componentDidMount() {
  
        const apiget =async() =>{
            const res=await countriesData();
            this.setState({data:res},()=>{
                console.log(this.state.data);
            });
        }
        apiget();
        }
        
    render() { 
    // const maptoken = 'pk.eyJ1IjoidW5uYXRpaSIsImEiOiJja2EyNDhlazYwNnRrM3Nta2RidWNoZXNtIn0.5XXP02koxyCSKFDF0fd7Ow';
        const image = new Image(30, 30);
image.src = Icon;
const images = ['myImage', image];
        const Mapp = ReactMapboxGl({
            accessToken:'pk.eyJ1IjoidW5uYXRpaSIsImEiOiJja2EyNDhlazYwNnRrM3Nta2RidWNoZXNtIn0.5XXP02koxyCSKFDF0fd7Ow'
          });
          
          //console.log(this.state.data);


        const markers=this.state.data.map((item)=>{
          return  <Feature
          
            coordinates={[item.long,item.lat]}
            properties={{Country:item.name}}
            />
                          })

        return (  <Mapp 
            fitBounds={this.state.fitBounds}
            style="mapbox://styles/mapbox/dark-v10"
            
            containerStyle={{
              height: '350px',
              width: '990px',
              margin:'15px 0 0 60px',
              borderRadius:'10px',
              zoom:1
            }}
          >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'myImage'}} images={images}>
              {markers}
              
            </Layer>
          </Mapp> );
    }
}
 
export default Map;