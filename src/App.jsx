import './App.css'
import Nav from './Components/Nav/Nav'
import Navtwo from './Components/Navtwo/Navtwo'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Display from './Components/Display/Display';
import Item from './Components/Item/Item';
import Footer from './Components/Footer/Footer';
import Agent from './Components/Agent/Agent';
import WithoutNavbar from './Components/withoutNavbar/withoutNavbar';
import ApartmentList from './Components/ApartmentList/ApartmentList'
import LandlordRegristration from './Components/LandlordRegristration/LandlordRegristration';
import ApartmentType from './Components/ApartmentType/ApartmentType';
import Location from './Components/Location/Location';
import Toliet from './Components/Toliet/Toliet';
import Form from './Components/Form/Form';
import Offers from './Components/Offers/Offers';
import Price from './Components/Price/Price';
import Publish from './Components/Publish/Publish';
import Dialog from './Components/Dialog/Dialog';
function App() {
  

  return (
    <section className='new-redesign '>
    <BrowserRouter>
    <WithoutNavbar>
    <Nav/>
    <Navtwo/>
    
    </WithoutNavbar>
   <Routes>
    <Route path="/" element={<Item/>} />
   <Route path="/buy" element={<Display category="Buy"/>} />
   <Route path="/rent" element={<Display category="Rent"/>} />
   <Route path="/sell" element={<Display category="Sell"/>} />
   <Route path="/agent" element={<Agent/>}>
   
</Route>
<Route path='/apartment' element={<ApartmentList/>}/>
<Route path="/LandlordRegristration" element={<LandlordRegristration/>}/>
<Route path="/ApartmentType" element={<ApartmentType/>}/>
<Route path="/Location" element={<Location/>}/>
<Route path="/Toilet" element={<Toliet/>}/>
<Route path="/Form" element={<Form/>}/>
<Route path="/Offers" element={<Offers/>}/>
<Route path="/Price" element={<Price/>}/>
<Route path="/Publish" element={<Publish/>}/>
<Route path="/Dialog" element={<Dialog/>}/>

  
   
   
   
   </Routes>
   
  
   <WithoutNavbar>
   <Footer/>
   </WithoutNavbar>
    </BrowserRouter>
    </section>
  
   
 
     
  )
}

export default App