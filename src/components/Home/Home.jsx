import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';
import'./Home.css'
import { info } from 'autoprefixer';
const Home = ({setSpentTime,handleBookTitle,id}) => {
    const [infos, setInfos] =useState([]);
    useEffect(()=>{
        fetch('fakeData.json').then(res=>res.json()).then(data=>setInfos(data))
    },[])
   
    return (
        <div>
            {
                
            infos.map((info)=><SingleCart info= {info} key={info.id} setSpentTime={setSpentTime} handleBookTitle={handleBookTitle} id={info.id} ></SingleCart>)
            }
         
        
        </div>
    );
};

export default Home;