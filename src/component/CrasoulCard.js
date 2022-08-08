
import './CerasoulCard.css'
import story1 from "../asstes/story1.webp"

function CrasoulCard () {
    

    return (
        <div className="CrasoulCard" >
                <img src={story1} className = "crasoulCardImage" alt= "img"/>
                    <button className='CrasoulCardFlightButton' >flight</button>

                <div  className='CrasoulCardContained' >
                    <div>
                        <h3 >
                           5 Easy International Destinations From India For Your Next Vacation
                        </h3>
                        <p>
                        Are you planning on going for an international holiday for the first time? Are you looking for easy international destinations from India?...
                        </p>
                    </div>
                </div>

                <button className=' LoginAndSubBtn cerasoulcardbuttonreadmore' >Read More</button>
        </div>
    )
}


export default CrasoulCard 