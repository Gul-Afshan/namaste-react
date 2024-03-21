import Card from "./Card";
import {restutant} from "../utils/mockdata";
import { useState } from "react";
const Body = ()=>{
    const [restutantList, setrestutantList] = useState(restutant)
    return(
       <div className="body-container">
          <div className="filter">
            <div className="filter-btn">
                <button 
                onClick={()=>{
                    const restutantList1 = restutantList.filter((res)=>res.info.avgRating > 4)
                    setrestutantList(restutantList1)
                    console.log(restutantList1)}
                }>Top Rated Restutant</button>
            </div>
             
          </div>
          <div className="res-card">
          {/* <Card resdata={restutant[0]}/>
          <Card resdata={restutant[1]}/>
          <Card resdata={restutant[2]}/>
          <Card resdata={restutant[3]}/>
          <Card resdata={restutant[4]}/>
          <Card resdata={restutant[5]}/>
          <Card resdata={restutant[6]}/>
          <Card resdata={restutant[7]}/>
          <Card resdata={restutant[8]}/>
          <Card resdata={restutant[9]}/>
          <Card resdata={restutant[10]}/> */}
          {
             restutantList.map((reslist)=> <Card key={reslist.info.id} resdata = {reslist}/>)
          }
 
          </div>
       </div>
    );
 }

 export default Body;