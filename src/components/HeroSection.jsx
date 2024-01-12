import pictures from '../assets/Group77.png'

function Navbar() {

    return (
      <div className="hero-section">
        <img src={pictures} alt="Random pictures" className="rand-pictures"/>
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    )
  }
  
  export default Navbar