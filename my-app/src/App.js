import React, { useEffect } from "react";
//a0d5c2e6

const API_URL = 'http://www.ombdapi.com?apikey=a0d5c2e6'

const App = () =>{
const searchMovies = async(title)=>{
const response = await fetch (`${API_URL}&s=${title}`)
}
useEffect(()=>{

},[])
}

export default App;