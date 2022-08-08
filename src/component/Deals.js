
import './Deals.css'
import bannerimg from "../asstes/zero-convenience-fees.jpg"
import DiscountCard from './DiscountCard'

function Deals () {
    return (
        <div className='app deals'>
            <div className='deals-img-wrapper'>
                <img src={bannerimg} alt ="img" />
            </div>
            <div className='exclusive-deals-wrapper' >
                <h1>Exclusive <b>Deals</b></h1>
                <div>
                    <span className='exclusive-icon'><i class="fa-solid fa-less-than"></i></span>
                    <span className='exclusive-icon' ><i class="fa-solid fa-greater-than"></i></span>
                </div>
            </div>
            <div className='Deals-Discout-card-wrapper' >
                <DiscountCard/>
                <DiscountCard/>
                <DiscountCard/>
            </div>
        </div>
    )
}

export default Deals