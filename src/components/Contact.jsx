import React from 'react'
import "../style/Contact.scss";

function Contact() {
  return (
    <div className='contact'>
    <main>
        <h1>Contact Us</h1>

        <form>
            <div>
                <label>Name</label>
                <input type="text" placeholder='Abc' required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder='abc12@gmail.com' />
            </div>
            <div>
                <label>Message</label>
                <input type="text" placeholder='tell us about your query' required />
            </div>
            <button type='submit'>Send</button>
        </form>
    </main>
      
    </div>
  )
}

export default Contact
