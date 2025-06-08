import React from 'react';

const Login = () => {
   
    const [email, setEmail]=React.useState("");
    const [password, setPassword]= React.useState("");
   
   const submitHandler =(e)=>{
        e.preventDefault();
        email && password ? console.log("Form submitted with email:", email, "and password:", password) : alert("Please fill in all fields");
      setEmail("");
      setPassword("")
   }
   


    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2  border-red-600  rounded p-4'>
                <form onSubmit={(e)=>submitHandler(e)} className='flex flex-col items-center justify-center p-4 '>
                    
                    <input
                    required
                    type="text"
                     placeholder='Enter your email'
                    className='border-2 border-gray-400 rounded-full p-2 w-full mb-4'
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    />
                     <input
                     required 
                         type="password" 
                         placeholder='Enter your password'
                         className='border-2 border-gray-400 rounded-full p-2 w-full mb-4'
                         value={password}
                         onChange={(e)=>{
                            setPassword(e.target.value)
                         }}
                         /> 
                    <button 
                    type='submit'
                    className='bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600  '>
                        Log In
                    </button>

                </form>
                <div className='flex items-center justify-center p-4 '>
                    <p>Don't have an account? <a href="#" className='text-blue-600 hover:underline'>Sign Up</a></p>
                </div>
                
            </div>
            </div>
    )
}
 export default Login