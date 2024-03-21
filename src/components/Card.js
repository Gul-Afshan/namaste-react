import { RESTURANT_LOGO } from "../utils/constants"
const Card =(props)=>{
    const{resdata} = props
    const {name,costForTwo,avgRatingString,cuisines, cloudinaryImageId} = resdata?.info
    return(
       <div className="card-container">
          <img className="telogy-logo" 
          src={RESTURANT_LOGO+ cloudinaryImageId}/>
          <h3>{name}</h3>
          <h3>{costForTwo}</h3>
          <h3>{avgRatingString}</h3>
          <h3>{resdata.info.sla.deliveryTime}</h3>
          <h4>{cuisines.join(" , ")}</h4>
       </div>
    )
 
 }

 export default Card;