import React,{useState,useEffect} from "react";
import axios from "axios";
//access data from .env
console.log("Client-id",process.env.REACT_APP_CLIENT_ID)
const SearchBar = ({setInfo}) => {
    
    useEffect(()=>{
       getImages()
    },[]);

    let [search,setSearch]=useState("");
    
    async function getImages(){
    try{
       let request=await axios.get("https://api.unsplash.com/search/photos",{
        params:{
            query:search || "nature",
        },
        headers:{
            Authorization:`Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
        }
       });
       console.log(request.data.results)
       setInfo(request.data.results)
    }
    catch(e){
        console.log(e);
    }
}

    return (<div> 
        <input type="text" placeholder="Search..." 
        onChange={(e)=>setSearch(e.target.value)} 
        value={search}/>
        <button onClick={getImages}>Search</button>
    </div>)
}

export default SearchBar;