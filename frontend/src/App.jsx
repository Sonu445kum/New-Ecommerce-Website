import React from 'react'
import UserLayout from './components/Layout/UserLayout'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import GenderCollectionSection from './components/Products/GenderCollectionSection'
import {Toaster} from "sonner";
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
import ProductDetails from './components/Products/ProductDetails'
import Checkout from './components/Cart/Checkout'
import Payment from './components/Cart/PayPalButton'
import PayPalButton from './components/Cart/PayPalButton'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import OrderDetailsPage from './pages/orderDetailsPage'
import MyOrdersPage from './pages/MyOrdersPage'
import AdminLayout from './components/Admin/AdminLayout'
import AdminHomePage from './pages/AdminHomePage'
import UserManagement from './components/Admin/UserManagement'
import ProductManagement from './components/Admin/ProductManagement'
import EditProductPage from './components/Admin/EditProductPage'
import OrderManagement from './components/Admin/OrderManagement'

import { Provider } from 'react-redux'
import store from './Redux/store'
import ProtectedRoutes from './components/Common/ProtectedRoutes'
import About from './pages/About'
import Contact from './pages/Contact'
const App = () => {
  return (
    <>
    
    <Provider store={store}>
      <BrowserRouter>
<Toaster position ="top-right"/>
    <Routes future={{v7_startTransition:true,v7_relativeSplatPath:true}}>
      
      <Route path="/" element={<UserLayout />} >
      <Route index element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      {/* New Route */}
      <Route path='register' element={<Register/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='collections/:collection' element={<CollectionPage/>}/>
      <Route path='product/:id' element={<ProductDetails/>}/>
      <Route path='login/checkout' element={<Checkout/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      
      <Route path='payment' element ={<PayPalButton/>}/>
      <Route path='order-confirmation' element={<OrderConfirmationPage/>}/>
      <Route path='order/:id' element={<OrderDetailsPage/>}/>
      <Route path='my-orders' element={<MyOrdersPage/>}/>

      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      </Route>
      

      <Route path='/admin' element ={<ProtectedRoutes role="admin">
        <AdminLayout/>
        </ProtectedRoutes>
      }
      >
      {/* Admin Layout */}
      <Route index element={<AdminHomePage/>}/>
      
      <Route path='users' element={<UserManagement/>}/>
      <Route path='products' element={<ProductManagement/>}/>
      <Route path='products/:id/edit' element={<EditProductPage/>}/>
      <Route path='orders' element={<OrderManagement/>}/>
      </Route>
      
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
