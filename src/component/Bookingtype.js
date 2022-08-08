import './bookingtype.css'

function Bookingtype ({name ,iconName}) {
    return (
        <div className="bookingtype" >
            <div className='bookingtype-icon' >
              <i class={iconName}></i>
            </div>
            <div className='bookingtype-name' >
                {name}
            </div>
        </div>
    )
}

export default Bookingtype