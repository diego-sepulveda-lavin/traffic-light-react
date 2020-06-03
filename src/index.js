import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const TrafficLight = (props) => {

  const [active, setActive] = useState("")

  function cambiarEstado (e) {
    setActive(e.target.className)
  }


  return (
    <div className='semaforo'>
      <div className={'red-light' + (active === 'red-light' ? "-active" : "")} onClick={(e) => cambiarEstado(e)}></div>
      <div className={'yellow-light' + (active === 'yellow-light' ? "-active" : "")} onClick={(e) => cambiarEstado(e)}></div>
      <div className={'green-light' + (active === 'green-light' ? "-active" : "")} onClick={(e) => cambiarEstado(e)}></div>
    </div>

  )
}



const App = () => {
  return (
    <>
      <h2>Traffic Light</h2>
      <div className='container'>
        <TrafficLight />
      </div>

    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))