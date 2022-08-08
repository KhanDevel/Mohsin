
import { useState } from 'react'
import './blueLine.css'

function BlueLine () {
    const [angleRotaion,setAngleRotaion] = useState(false)

     
    return (
        <>
           <div className='BlueLineWraper' >
                <div className='blueLine' >
                    <h4>WWw.Akbertravle.com ?why <span><i class="fa-solid fa-angle-down"></i></span></h4>
                    <h4>Relible trevel compney <span><i class="fa-solid fa-angle-up"></i></span></h4>
                    <h4>Assured Lowest price <span><i class="fa-solid fa-angle-up"></i></span></h4>
                    <h4>Book in Advance save more <span><i class="fa-solid fa-angle-up"></i></span></h4>
                </div>
                <div className={angleRotaion?"iconAngleDown":"iconAngleDown1"}  onClick={()=>{setAngleRotaion(!angleRotaion)}} >
                   <span><i class="fa-solid fa-angle-down"></i></span>
                </div>
           </div>


            <div className='Akebercom' style={{display:angleRotaion?"none" :""}} >
                <h3>www.Akbertravle.com</h3>
                <p>At Akbar Travels we believe in making sure our customers have a hassle free and enjoyable time on their trips and travels. Our website caters to every need a traveler might come across. Whether its comparing rates for various fares or hotels, or booking transports and transfers, organizing meeting, conferences, events etc., or just going on a tour or planning a holiday, we at Akbar Travels have you covered. So now you dont need to go over numerous websites to get the lowest fares and services. You can do it all in one place!</p>
                <h3>www.Akbertravle.com/ar</h3>
                <p>
                Akbar Travels of India is India's largest travel agency in terms of IATA registered branches, employee strength, and commercial turnover. The evolution from a small travel agency specializing in Gulf traffic to a well-diversified company providing a comprehensive range of travel services was absolutely astonishing. Kerala, a state in southern India, was the starting point for our expansion. We also have offices in every major city in India. With more than 60 branches worldwide, we have developed a successful global network. Akbar Travels of India, an IATA-accredited travel management firm, is a significant travel agency in the Middle East with offices in the United Arab Emirates, Oman, Qatar, Saudi Arabia, and Bahrain. Akbar Travels aspires to satisfy the most discerning travelers with the most intricate and demanding travel itineraries by providing them with a broad choice of well selected travel items. Akbar Travels Retail locations combine commercial expertise with an entrepreneurial spirit to provide innovative and customer-centric travel products and services. A carefully chosen and highly qualified staff of multi-national and multilingual travel professionals assists in the understanding of each customer's needs. And this why Akbar Travels is your reliable travel partner!
                </p>

            </div>
        </>
    )
}


export default BlueLine