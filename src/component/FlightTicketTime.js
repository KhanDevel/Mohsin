import './FlightTicketTime.css'

function FlightTicketTime (){
    return (

        <div className='flight-ticket-wrapper'>
            <div className="flight-ticket-location" >
                <div>
                    <p>
                        from
                    </p>
                    <h2>
                        Mumbai
                    </h2>
                    <p>boom Mumbai chitherpath sivaji</p>
                </div>
                <div className='locatio-icon' >
                    <i class="fa-solid fa-location-crosshairs"></i>
                </div>
            </div>
            <div className='line' >
                <span className='swap-icon' >

                  <i class="fa-solid fa-right-left"></i>

                </span>
            </div>
            <div className="flight-ticket-location" >
                <div>
                    <p>
                        To
                    </p>
                    <h2>
                        Kalkatta
                    </h2>
                    <p>boom Mumbai chitherpath sivaji</p>
                </div>
              
            </div>
            {/* line222 */}
            <div className='line line2'>
            </div>

            {/* date */}
            <div>
                <div>
                    <span>
                       <i class="fa-solid fa-bus"></i>
                    </span>
                    <span>Depart</span>
                    <span>
                       <i class="fa-solid fa-angle-down"></i>
                    </span>
                </div>
                <div>
                    <h1>15 Sep</h1>
                    <p>thursday</p>
                </div>
            </div>
            {/*line 333  */}
            <div className='line line3'>
            </div>
            {/* return */}
            <div className='return'>
                <div>
                    <div>
                        <span>
                        <i class="fa-solid fa-bus"></i>
                        </span>
                        <span>Depart</span>
                        <span>
                        <i class="fa-solid fa-angle-down"></i>
                        </span>
                    </div>
                    <div>
                        <h1>15 Sep</h1>
                        <p>thursday</p>
                    </div>
                </div>
                <div className='cross' >
                <i class="fa-solid fa-circle-xmark"></i>
                </div>
            </div>
            <div className='line '></div>
            <div>
                <h5>TRAVELLERS & CLASS</h5>
                <span><b>1</b>Traverllers</span>
                <p>Economy</p>
            </div>
            <div className='btn-wrapper'>
                <button>Search Flights</button>
            </div>

        </div>

    )
}

export default FlightTicketTime