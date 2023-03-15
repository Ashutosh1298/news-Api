 
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function App() {

  const[data,setData]=useState([])
const getNews=()=>{
  axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d844ea55fd3d4242884e39f2051dec0d")
.then((response)=>{
// console.log(response)
setData(response.data.articles)
})
}

  return (
    <>
    <div className="container my-3">
      <button className=' btn btn-primary' onClick={getNews}> Fetch News</button>
 
   </div>

 <div className='container'>
  <div className='row'>
   {
    data.map((value)=>
    {
      return(

        <div className='col-3'>

        <div className="card" style={{width: "18rem"}}>
      <img src={value.urlToImage} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{value.title} </h5>
        <p className="card-text"> {value.description} </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    
    
    
    
        </div>

      );
    })
   }


  </div>
 </div>

</>
);
}

export default App;
