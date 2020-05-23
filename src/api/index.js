import axios from 'axios'


const url=`https://covid19.mathdro.id/api`;      



  export const  getData = async(selected) => {
    //console.log("****"+selected);
   let changeUrl=url;
if(selected){
  changeUrl=`${changeUrl}/countries/${selected}`
}

  try{
    const {data:{confirmed,deaths,recovered,lastUpdated} } = await axios.get(changeUrl); //destructuring
    const fetch={confirmed,deaths,recovered,lastUpdated}
  //  console.log(fetch);
     return fetch;
  }catch(error){
    console.log(error)
  }
}


export const  DailyData = async() => {
  try{
    const {data} = await axios.get(`${url}/daily`); //destructuring
    const requiredData= data.map((eachdata)=>({
        confirmed:eachdata.confirmed.total,
        date:eachdata.reportDate
    }))
   // console.log(data);
     return requiredData;
  }catch(error){
    console.log(error)
  }
}
export const  countries = async() => {
  try{
    const {data }= await axios.get(`${url}/countries`); //destructuring
    const allcountries=data.countries.map((item)=>item.name)
   
     return allcountries;
  }catch(error){
    console.log(error)
  }
}

export const  countriesData = async() => {
  try{
    const {data}= await axios.get(`https://corona-api.com/countries`); 

     const usefuldata=data.data.map((item) =>({
          lat:item.coordinates.latitude,
          long:item.coordinates.longitude,
          name:item.name,
          confirmed:item.latest_data.confirmed,
          recovered:item.latest_data.recovered,
          deaths:item.latest_data.deaths,
     }))
   // console.log(data.data,"dd");              //data.data because inside an data object
    return usefuldata;
  }catch(error){
    console.log(error)
  }
}





export const  DailyDataIndia = async() => {
  try{
    const {data} = await axios.get('https://api.covid19api.com/live/country/india'); //destructuring
   // console.log(data,"ddi")
    const requiredData= data.map((eachdata)=>({
        confirmed:eachdata.Confirmed,
        date:eachdata.Date,
        active:eachdata.Active,
        deaths:eachdata.Deaths,
        recovered:eachdata.Recovered
    }))
   //console.log(requiredData);
     return requiredData;
  }catch(error){
    console.log(error)
  }
}

export const  DataIndiaStates = async() => {
  try{
    const {data:{statewise}} = await axios.get(`https://api.covid19india.org/data.json`); //destructuring
    //console.log(statewise,"st");
     return statewise;
  }catch(error){
    console.log(error)
  }
}

export const  DataDistrict = async() => {
  try{
    const response = await axios.get(`https://api.covid19india.org/state_district_wise.json`); //destructuring
  //  console.log(response);
     return response;
  }catch(error){
    console.log(error)
  }
}


// export const getData =  () =>{                 //other methods to use axios
//    return axios.get(url)
//     .then(response => {
//         console.log(response.data);
//         return response.data;
    
        
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }


// export async function getData() {
  
//     let res = await axios.get(url);
  
//     let data = res.data;
//     console.log(data);
//     return data;
//   }