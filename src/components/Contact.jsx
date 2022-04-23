import React, {useState} from 'react';
import { db } from "../Firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject , setSubject] = useState('');
  const [message, setMessage] = useState('');

  const Notify = () => {
    toast.success('Message Successfully Sent!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const HandleSubmit = (e)  =>{
    e.preventDefault();

    db.collection("Contact").add({
      name: name,
      email: email,
      subject: subject,
      message: message,

    })
    .then(()=>{
      console.log("Message Sent!");
    })
    .catch((error)=>{
      console.log(error.message);
    });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

  };

  
  return (
    <>
     <ToastContainer theme='colored'/>
    <div className="flex justify-center">
        <div className="transform translate-y-10  w-[20rem] md:w-[30rem] p-[2rem] rounded-2xl ">
          <h1 className="mb-1" >Contact Me</h1>
          <p className="mb-5 text-white text-lg w-[20rem] md:w-[38rem]">I’m interested in freelance opportunities
             – especially ambitious or large projects.
              However, if you have other request or question, don’t hesitate to use the form.
          </p>
          <div className="flex justify-center">
            <form className="" onSubmit={HandleSubmit}>
                <div className="p-3">
                  <input 
                    className="ClassReducer"
                    type="text"
                    placeholder='Your Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="p-3">
                  <input 
                    className="ClassReducer"
                    type="text"
                    placeholder='Your Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="p-3">
                  <input 
                    className="ClassReducer"
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                  />
                </div>
                <div className="p-3">
                  <textarea 
                    className="ClassTextarea"
                    placeholder="Message"
                    type="text" 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                  />
                </div>
                <div className="p-3">
                  <input type="submit" onClick={Notify} className=" bg-green-400 w-40 p-3 cursor-pointer shadow-xl rounded-full text-xl text-black" value="Contact" />
                </div>
              </form>
          </div>
        </div>
    </div>  
    </>
  )
}

export default Contact