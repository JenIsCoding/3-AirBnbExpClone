import star from '../assets/Star.png'

function CardsSection(props) {

  let badgeText
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if(props.location === "Online"){
    badgeText = "ONLINE"
  }

    return (
      <div className="cards-section">
        
        {badgeText && <div className="cards-badge">{badgeText}</div>}
        <img src={`src/assets/${props.img}`} alt={props.altimg} className="cards-pic"/>
        <div className="cards-data">
          <img src={star} alt="Star logo" className="star-pic"/> &#160;
          <p className="cards-review">
          {props.review} &#160;<span className="span-font">({props.number})&#160; &#8226; {props.location}</span>
          </p>
        </div>
        <p className="cards-title data">{props.title}</p>
        <p className="cards-price data"><span className="bold">From ${props.price}</span> / person</p>
      </div>
    )
  }
  
  export default CardsSection