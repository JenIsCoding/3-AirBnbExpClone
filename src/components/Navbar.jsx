import airbnbLogo from '../assets/AirbnbLogo.png'

function Navbar() {

    return (
      <div className="nav-bar">
        <img src={airbnbLogo} alt="Logo AirBnB" className="logo"/>
      </div>
    )
  }
  
  export default Navbar