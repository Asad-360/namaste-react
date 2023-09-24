import { CDN_URL } from "../utils/constants";
const RestaurantCard = (swiggyData) => {
    const {
          name,
          avgRatingString,
          cuisines,
          sla,
          cloudinaryImageId } = swiggyData?.swiggyData?.info;
    const cardImageUrl = CDN_URL + cloudinaryImageId;
    
    return (
      <div className="res-card" style={{ backgroundColor: "white" }}>
        <img
          className="res-img"
          src={cardImageUrl}
          alt="res log"
        />
        <h3 className="card-name custom-font-family">{name}</h3>
        <h4 className="card-cuisines custom-font-family">{cuisines.join(" , ")}</h4>
        <h4 className="custom-font-family">{avgRatingString} star</h4>
        <h4 className="custom-font-family">{sla.deliveryTime} minutes</h4>
      </div>
    );
  };
  export default RestaurantCard;