import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalState } from './context/index.jsx'
import {Provider} from "react-redux"
import store from './store/index.js'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <ChakraProvider>
      <GlobalState>
      <App />
      </GlobalState>
    </ChakraProvider>
    </BrowserRouter>
    
  </Provider>,
)
