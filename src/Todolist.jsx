import React, { useState } from 'react'

const Todolist = () => {
    const [title , setTitle] = useState('');
    const [details , setDetails] = useState('');
    const [task ,setTask] = useState([]);

    
    const submitHandler = (e)=>{ 
        e.preventDefault();
      const copyTask = [...task]
      copyTask.push({title , details})
      setTask(copyTask)

        setTitle('')
        setDetails('')
    }

    const deleteHandler = (idx)=>{
        const copyTask = [...task]
        copyTask.splice(idx,1)
        
        setTask(copyTask)
    }

  return (
    <>
      <div className=' h-screen lg:flex  bg-black text-white'  >

        <form onSubmit={(e)=>{
            submitHandler(e)
         }} className='flex  items-start p-10 gap-4 lg:w-1/2   flex-col ' >
         
         <h1 className='text-4xl font-bold'>Add Notes</h1>

            {/* Heading wala INPUT */}
        <input type="text" 
        placeholder='Enter notes heading' 
        className='px-4 py-2 font-medium border-2  w-full outline-none rounded text-black'
        value={title}
        onChange={(e)=>{
        setTitle(e.target.value)
        }}
        />
                
                {/* Details  wala INPUT */}
        <textarea type=" text"  
        placeholder='Enter details'
        className='px-5 w-full  font-medium py-2 h-30 border-2 rounded text-black '
         value={details}
        onChange={(e)=>{
        setDetails(e.target.value)
        }}
        />
        <button className='bg-white  font-medium w-full text-black px-5 py-2 rounded'> Add note</button>

        </form>

        <div className=' lg:w-1/2 border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Your Notes</h1>
        <div className='flex  flex-wrap items-start justify-start  gap-5 mt-5 overflow-auto h-full'>
            {task.map((elem,idx)=>{
                
                return  <div key={idx} className='h-55 w-45 flex justify-between flex-col rounded-2xl bg-white text-black  p-4'>
                    <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                    <p className='mt-4 leading-tight text-gray-700'>{elem.details}</p>
                    <button onClick={()=>deleteHandler(idx)} className='w-full active:bg-red-950 bg-red-500 py-1 text-xs rounded font-bold text-white '>Delete</button>
                </div> 
                

                


            })}
            
        


        </div>
            
        </div>






      
    </div>
    
    </>
  
  )
}

export default Todolist
