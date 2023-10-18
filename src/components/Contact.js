import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className="px-4 pt-32 sm:px-12 w-full md:h-screen bg-dark flex justify-center items-center">
      <form method="POST" action="https://getform.io/f/1e14bde4-f0dd-4943-85bf-071bef3732ff" className="max-w-[600px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent4 text-cream">Contact</p>
          <p className="text-cream py-4"> Submit the form below</p>
        </div>
        <input className="bg-white p-sm" type="text" placeholder="Name" name="name"/>
        <input className="my-4 p-2 bg-white" type="emaile" placeholder="Email" name="email" />
        <textarea className="bg-white px-4 py-3" name="message" rows="10" placeholder="Message" />
        <button className="text-white border-2 hover:bg-accent4 hover:border-pink600 px-4 py-3 my-8 mx-auto flex items-center">Let's collaborate</button>
      </form>



    </div>
  )
}

export default Contact