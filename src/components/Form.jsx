import './Form.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Type your message here'></textarea>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form