import React from 'react';

const Login = ({ handleLogin, error }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
   
    const submitHandler = (e) => {
        e.preventDefault();
        
        if (!email.trim() || !password.trim()) {
            return;
        }
        
        setIsSubmitting(true);
        handleLogin(email.trim(), password);
        
        // Reset form after submission
        setEmail("");
        setPassword("");
        setIsSubmitting(false);
    }
   
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 rounded p-4 w-80 bg-black shadow-lg'>
                <form onSubmit={submitHandler} className='flex flex-col items-center justify-center p-4'>
                    {error && (
                        <div className="w-full mb-4 p-2 bg-red-500 text-white text-sm rounded text-center">
                            {error}
                        </div>
                    )}
                    
                    <input
                        required
                        type="email"
                        placeholder='Enter your email'
                        className='placeholder-gray-500 border-2 border-emerald-400 rounded-full p-2 w-full mb-4 text-white'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                    />
                    
                    <input
                        required 
                        type="password" 
                        placeholder='Enter your password'
                        className='placeholder-gray-500 border-2 border-emerald-400 rounded-full p-2 w-full mb-4 text-white'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isSubmitting}
                    /> 
                    
                    <button 
                        type='submit'
                        disabled={isSubmitting}
                        className='bg-emerald-500 text-white px-7 p-2 rounded-full hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed'>
                        {isSubmitting ? 'Logging In...' : 'Log In'}
                    </button>
                </form>
                
                <div className='flex items-center justify-center p-4'>
                    <p className="text-white">Don't have an account? <a href="#" className='text-blue-600 hover:underline'>Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login