import React from 'react'
import bg from "../images/mountain.jpg"

const Messeges = () => {

  
  return (
    <div className='container p-5' style={{}}>   
        <img src={bg} alt="" style={{height:"250px",width:"400px"}} />
       <div className='mt-4' style={{width:"400px"}}>
        <p className='mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium voluptatem fuga, praesentium fugiat possimus quia officia nostrum porro dolore quaerat fugit assumenda enim alias dolor, voluptatum adipisci quis? Libero!
        </p>
        <p className='mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium voluptatem fuga, praesentium fugiat possimus quia officia nostrum porro dolore quaerat fugit assumenda enim alias dolor, voluptatum adipisci quis? Libero!
        </p>
        
       </div>
    </div>
  )
}

export default Messeges