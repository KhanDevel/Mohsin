import  logo from "../asstes/home-logo.webp"
import "./header.css"
import BookingMenu from "./BookingMenu"

function Header () {

    return (
        <div>
        <div className="Header" >
            <div>
              <img alt="img" src={logo} />
            </div>
            <div>
                <span className="Header-akberbizz" >AKBER BIZZ</span>
                <span className="Header-akberbizz" >IRC AGANTS</span>
                <span className="Header-akberbizz" > <span className="header-icon-rupes" ><i class="fa-solid fa-indian-rupee-sign"></i></span>INR <span><i class="fa-solid fa-caret-down"></i></span> </span>
                <span className="Header-akberbizz" > INDIA <span><i class="fa-solid fa-caret-down"></i></span></span>
                <button className="Header-btn" > <span> <i class="fa-solid fa-user"></i></span> LOGIN/REGISTER <span className="header-btn-icon" ><i class="fa-solid fa-caret-down"></i></span> </button>
            </div>
            
        </div>
        <BookingMenu/>
        
        </div>
    )
}


export default Header