import React from 'react'
import pf from "../images/pf.jpg"

const Blog = () => {
  return (
    <div className='container p-4' style={{width:"450px"}}>
      <div>
        <img className='mb-4' src={pf} alt="" style={{height:"250px",width:"400px"}} />
        <p className='mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo alias rem, obcaecati laudantium distinctio neque tempore, doloremque laboriosam quasi ut illum. Eum fuga voluptate rem est dignissimos! Vitae, placeat eveniet?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo alias rem, obcaecati laudantium distinctio neque tempore, doloremque laboriosam quasi ut illum. Eum fuga voluptate rem est dignissimos! Vitae, placeat eveniet?
        </p>

      </div>

    </div>
  )
}

export default Blog