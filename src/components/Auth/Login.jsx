import React from 'react';

const Login = ({handleLogin}) => {
     
    

    const [email, setEmail]=React.useState("");
    const [password, setPassword]= React.useState("");
   
   const submitHandler =(e)=>{
        e.preventDefault();
        
        handleLogin(email,password)
        setEmail("");
        setPassword("")
   }
   


    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2  border-emerald-600  rounded p-4 w-80 bg-black shadow-lg'>
                <form onSubmit={(e)=>submitHandler(e)} className='flex flex-col items-center justify-center p-4'>
                    
                    <input
                    required
                    type="text"
                    placeholder='Enter your email'
                    className='placeholder-gray-500 border-2  border-emerald-400 rounded-full p-2 w-full mb-4'
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    />
                     <input
                     required 
                         type="password" 
                         placeholder='Enter your password'
                         className=' placeholder-gray-500 border-2 border-emerald-400 rounded-full p-2 w-full mb-4'
                         value={password}
                         onChange={(e)=>{
                            setPassword(e.target.value)
                         }}
                         /> 
                    <button 
                    type='submit'
                    className='bg-emerald-500 text-white px-7 p-2 rounded-full hover:bg-emerald-600  '>
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