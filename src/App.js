import './App.css';
import Header from './component/Header';
import Deals from './component/Deals';
import Destination from './component/Destination';
import LoginAndSubcrie from './LoginAndSubcribe';
import BlueLine from './BlueLine';
import AllLink from './AllLink';
import CopyRight from './component/CopyRight';

function App() {
  return (
    
    <div>

          <div className='container'>
                <div className='app'>
                    <Header/>
                </div>
          </div>
          <Deals/>
          <Destination/>
          <LoginAndSubcrie/>
          <BlueLine/>
          <AllLink/>
          <CopyRight/>
          <div className='customerService' ><i class="fa-solid fa-user"></i></div>
          <div className='feedbeek' >
            <span>
              feedbeek
              <i class="fa-solid fa-message-lines"></i> 
            </span>
          </div>
     </div>
    
  );
}

export default App;
 