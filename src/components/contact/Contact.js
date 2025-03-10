import React, { useState } from 'react';
import Layout from '../layout/Layout';
import Left from './Left';
 
const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!"); 
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(username,phoneNumber,email,message,subject)
    }
  };
  return (
    <section id="contact"
    className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='felx justify-center items-center text-center'> 
      <Layout  
      title="Contact"
      des="Contact With Me"/>
      </div>
      <div className='w-full'>
<div className='w-full h-auto flex  flex-col md:flex-row justify-between gap-14 md:gap-0'>
<Left/>
    <div className='w-full md:w-[60%]  h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b]  flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne '>
<form className='w-full flex flex-col  gap-6 py-2' >

  {
    errMsg &&  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
    {errMsg}
  </p>

  }
  
  
  
<div className='w-full flex  flex-col md:flex-row md:gap-10 gap-4'>
 <div className='w-full md:w-1/2 flex flex-col gap-4'> <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Name </p>
 <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="contactInput"
                    type="text"
                  />
  </div>
  <div className='w-full md:w-1/2 flex flex-col gap-4'> <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone number </p>
  <input   onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber} className='contactInput' type="text" />
  </div>
  
</div>
<div className='w-full flex flex-col gap-4'> <p className='text-sm text-gray-400 uppercase tracking-wide'>email </p>
  <input  onChange={(e)=>setEmail(e.target.value)} value={email} className='contactInput' type="email" />
  </div>
  <div className='w-full flex flex-col gap-4'> <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject </p>
  <input  onChange={(e)=>setSubject(e.target.value)} value={subject} className='contactInput' type="text" />
  </div>
  <div className='w-full  flex flex-col gap-4'> <p className='text-sm text-gray-400 uppercase tracking-wide'>MEssage </p>
  <textarea  onChange={(e)=> setMessage(e.target.value)} value={message} className="conntactTextArea" cols="30" rows="8"></textarea>
  </div>
  <div className='w-full'>
    <button onClick={handleSend} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">send Message</button>

  </div>
  
    {successMsg && (
      <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
        {successMsg}
      </p>
    )}
</form>
    </div>

</div>
      </div>
      </section>
  );
}

export default Contact;
