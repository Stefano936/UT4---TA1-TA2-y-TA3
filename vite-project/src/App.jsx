import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import ChildCard from './Children'  
import Contador from './Contador'
import Input from "./Input"
import './input.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*TA 1*/}
      <div class = "card">
        <Card title={"Entrega 1"} description={"Desarolla una tarea"} name={"Pedro"} dateStart={"30 de Agosto"} dateEnd={"31 de Agosto"}></Card>
        <Card title={"Entrega 2"} description={"Desarolla una tarea"} name={"Pepe"} dateStart={"31 de Agosto"} dateEnd={"1 de Setiembre"}></Card>
        <Card title={"Entrega 3"} description={"Desarolla una tarea"} name={"Seba"} dateStart={"31 de Agosto"} dateEnd={"1 de Setiembre"}></Card>
      </div>
      {/*TA 2 */}
      <div class = "children">
        <ChildCard>
          <h1 className="cardTitle">Entrega 1</h1> 
          <p className="cardDescription">Desarolla una tarea</p>
          <h2 className="cardPerson">Pedro</h2>
          <h3 className="cardDateI">30 de Agosto</h3>
          <h3 className="cardDateF">31 de Agosto</h3>
        </ChildCard>
        <ChildCard>
          <h1 className="cardTitle">Entrega 2</h1>
          <p className="cardDescription">Desarolla una tarea</p>
          <h2 className="cardPerson">Pepe</h2>
          <h3 className="cardDateI">30 de Agosto</h3>
          <h3 className="cardDateF">31 de Agosto</h3>
        </ChildCard>
        <ChildCard>
          <h1 className="cardTitle">Entrega 3</h1>
          <p className="cardDescription">Desarolla una tarea</p>
          <h2 className="cardPerson">Pablo</h2>
          <h3 className="cardDateI">30 de Agosto</h3>
          <h3 className="cardDateF">31 de Agosto</h3>
        </ChildCard>
      </div>
      {/*TA 3*/}
      <div className = "input">
        <Input></Input>
      </div>
      {/*TA 4*/}
      <div class = "contador">
        <Contador c ={0}></Contador>
      </div>
      {/*TA 5*/}
      <div class = "mostrarTexto">
        
      </div>
    </>
  )
}

export default App
