import './App.css'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Fotter from './Footer/Fotter'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'



function App(props) {

  return (
    <>
    
    
    <BrowserRouter>
    
    <Navbar />
   <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/Men' element={<ShopCategory banner={men_banner} Category="men"/>}/>
    <Route path='/Women' element={<ShopCategory banner={women_banner} Category="women"/>}/>
    <Route path='/Kids' element={<ShopCategory banner={kid_banner} Category="kids"/>}/>
    <Route path='/Product' element={<Product/>}>
      <Route path=':Productid' element={<Product/>}/>
    </Route>
    <Route path='/Login' element={<LoginSignup/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    </Routes>

<Fotter/>
    </BrowserRouter>
</>
  )
}

export default App
