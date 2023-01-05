import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AdminComponents/components/App';
import './style/Font/Font.css'
import './style/CssReset.css'
import './style/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css';
import StateContextProvider from './AdminComponents/context/DataContext';
import { BrowserRouter } from 'react-router-dom';
import CartState from './AdminComponents/context/ShoppingCartContext/CartState';
import UserProvider from './AdminComponents/context/UserContext/UserProvider';
import AdminProvider from './AdminComponents/context/AdminContext/AdminProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContextProvider>
        <AdminProvider>
          <UserProvider>
            <CartState>
              <App/>
            </CartState>
          </UserProvider>
        </AdminProvider>
      </StateContextProvider>
    </BrowserRouter>
    <ToastContainer/>
  </React.StrictMode>
);


