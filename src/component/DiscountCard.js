import './DiscountCard.css'

function DiscountCard (){
    return (
        <div className="DiscountCard" >
            <div className='discountCardImg'>
                <div className='discountImg' ></div>
            </div>
            <div>
                <div className=' btn-wrapper-discountcard'>
                    <button>Flight</button>
                </div>
                <div className='discount-save-container' >
                    <h3>SAVE UPTO 5% </h3>
                    <p>on all aman airticket</p>
                </div>
                <div className='coupen-code-wraper' >
                    <div className='coupen-code' >
                        <div className='coupen-code-number' >
                                <div className='coupen-code-numer-span-wraper'>
                                    <span className='code-span-1' > 
                                      AKPSESF 
                                      <span className='coupe-code-title' >
                                        coupen code
                                      </span>
                                    </span>
                                    <span className='code-span-2'> <i class="fa-solid fa-clone"></i></span>

                                </div>
                                
                        </div>
                       
                        <div className='coupen-code-number'>
                                <h3>View Details</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscountCard  
