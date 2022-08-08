import './bookingmenu.css'
import Bookingtype from './Bookingtype'
import FlightTicketTime from './FlightTicketTime'

function BookingMenu (){
    return (
        <div className='BookingMenu'>

            <div className='BookingMenu-bookingItem'>
                <Bookingtype
                 name ="Flight"
                 iconName = "fa-solid fa-plane-departure"
                />
                  <Bookingtype
                 name ="Hotel"
                 iconName = "fa-solid fa-hotel"
                />
                  <Bookingtype
                 name ="Visa"
                 iconName = "fa-solid fa-file-invoice"
                />
                  <Bookingtype
                 name ="Hodiday"
                 iconName = "fa-solid fa-tree"
                />
                  <Bookingtype
                 name ="Bus"
                 iconName = "fa-solid fa-bus"
                />
                  <Bookingtype
                 name ="Crusie"
                 iconName = "fa-solid fa-ship"
                />
               <Bookingtype
                 name ="Umrah"
                 iconName = "fa-solid fa-moon"
                />
                 <Bookingtype
                 name ="More"
                 iconName = "fa-solid fa-ellipsis"
                />
            </div>

            <div className='bookingMenu-trip' >
              <div className='booking-span-wrapper'>
                  <div  className='trip-span' >
                    <input type="radio" name='trip'/>
                    <label> One way trip</label>
                  </div>
                  <div className='trip-span' >
                    <input type="radio" name="trip"/>
                    <label> Two way trip</label>
                  </div> <div className='trip-span'>
                    <input type="radio" name='trip' />
                    <label> Multi way trip</label>
                  </div>
              </div>
              <div>
                <h2>Booking Flight ticket</h2>
              </div>
            </div>
              {/* divider h  */}
            <div className='divider'>
            </div>

              {/* flight ticket details   */}
              <div>
                <FlightTicketTime/>
              </div>
              <div className='divider'></div>
              <div className='booking-fares'>
                <div>
                  <span className='span-fares' ><i class="fa-solid fa-greater-than"></i></span><span>  Fares From Mumbai</span>
                </div>
                <div className=' fares-line'></div>
                <div>
                  <input type="checkbox"/>
                  <label>Direct Flights</label>
                </div>
                <div className=' fares-line'></div>
                <div>
                  <input type="checkbox"/>
                  <label>Direct Flights</label>
                </div>
               </div>
               


        </div>
    )

    
}

export default BookingMenu