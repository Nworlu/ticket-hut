import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PaymentComponent from './components/PaymentComponent';
import ChooseTicketPage from './pages/ChooseTicketPage';
import EventDetailPage from './pages/EventDetailPage';
import HomePage from './pages/HomePage';
import Notfound from './pages/Notfound';
import OrderSummaryPage from './pages/OrderSummaryPage';
import ReceiptPage from './pages/ReceiptPage';


function App() {
  let location = useLocation()
  const hideNavbar = location.pathname === '/versus-pay'
  return (
    <>
    { !hideNavbar && 
      <Navbar/>
    }
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/event' element={<EventDetailPage/>}/>
        <Route path='*' element={<Notfound/>}/>
        <Route path='/choose' element={<ChooseTicketPage/>} />
        <Route path='/order' element={<OrderSummaryPage/>} />
        <Route path='/receipt' element={<ReceiptPage/>} />
        <Route path='/*' index element={<PaymentComponent/>}/>
      </Routes>
      { !hideNavbar &&
      <Footer/>
      }
    </>
  );
}

export default App;
