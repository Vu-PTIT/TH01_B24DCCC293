import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TextCounter from './textCounter.jsx'
import TrafficLight from './trafficLight.jsx'
import TodoApp from './todoList.jsx'
import BuyItem from './buyItem.jsx'
import MailForm from './mailForm.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TextCounter />
    <TrafficLight />
    <TodoApp />
    <BuyItem />
    <MailForm/>
  </StrictMode>,
)
