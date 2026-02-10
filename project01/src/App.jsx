import { useState } from 'react'

function App() {
  const [count, setCount] = useState('olive')

  return (
    <>
    <div className='w-full h-screen duration-200' style ={{backgroundColor: count}}></div>
    <div className='fixed flex flex-wrap justify-centre bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-centre gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={()=> setCount("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{
          backgroundColor: 'red'
        }}>RED</button>
        <button onClick={()=> setCount("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{
          backgroundColor: 'pink'
        }}>PINK</button>
        <button onClick={()=> setCount("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{
          backgroundColor: 'blue'
        }}>BLUE</button>
        <button onClick={()=> setCount("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{
          backgroundColor: 'green'
        }}>GREEN</button>
        <button onClick={()=> setCount("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{
          backgroundColor: 'yellow'
        }}>YELLOW</button>
      </div>
    </div>
    </>
  )
}

export default App
