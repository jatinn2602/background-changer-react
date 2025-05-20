import { useState } from 'react'
import './index.css'


function App() {
let [color,setColor]= useState("black")  
const textColor = color === "black" ? "white" : "black";
return (<>
  <div className='w-full h-screen duration-200 '
  style={{backgroundColor: color}}> <h1 
  style={{color: textColor}}
  className='flex justify-center text-5xl font-bold pt-6 duration-100'>Mini Background Changer Project</h1>
  <p className='flex justify-center m-3.5 text-2xl italic'>With the help of React we can change the background color.</p>
    <div className='fixed flex flex-wrap bottom-13 justify-center inset-x-0 px-2'>
      <div className='bg-white flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-full'>
        <button className='bg-red-500 px-2 py-1 outline-none text-white shadow-lg rounded-full '
        style={{backgroundColor: "red"}} 
        onClick={() => setColor("red")}
        >Red</button>
         <button className='bg-red-500 px-2 py-1 outline-none text-white shadow-lg rounded-full '
        style={{backgroundColor: "green"}} 
        onClick={() => setColor("green")}
        >Green</button>
         <button className='bg-red-500 px-2 py-1 outline-none text-white shadow-lg rounded-full '
        style={{backgroundColor: "blue"}} 
        onClick={() => setColor("blue")}
        >BLue</button>
         <button className='bg-red-500 px-2 py-1 outline-none text-white shadow-lg rounded-full '
        style={{backgroundColor: "Olive"}} 
        onClick={() => setColor("olive")}
        >Olive</button>
         <button className='bg-red-500 px-2 py-1 outline-none text-white shadow-lg rounded-full '
        style={{backgroundColor: "gray"}} 
        onClick={() => setColor("gray")}
        >Gray</button>
         <button className='bg-red-500 px-2 py-1 outline-none text-black shadow-lg rounded-full '
        style={{backgroundColor: "yellow"}} 
        onClick={() => setColor("yellow")}
        >Yellow</button>
         <button className='bg-red-500 px-2 py-1 outline-none text-black shadow-lg rounded-full '
        style={{backgroundColor: "Pink"}} 
        onClick={() => setColor("pink")}
        >Pink</button>
         <button className='bg-red-500 px-2 py-1 outline-none text-white shadow-lg rounded-full '
        style={{backgroundColor: "purple"}} 
        onClick={() => setColor("purple")}
        >Purple</button>
         <button className='bg-red-500 px-2 py-1 outline-none text-black shadow-lg rounded-full '
        style={{backgroundColor: "lavender"}} 
        onClick={() => setColor("lavender")}
        >Lavender</button>
         <button className='bg-red-500 px-2 py-1 outline-none text-black shadow-lg rounded-full '
        style={{backgroundColor: "white"}} 
        onClick={() => setColor("white")}
        >White</button>
      </div>
    </div>
  </div>

  </>
  )
}

export default App
