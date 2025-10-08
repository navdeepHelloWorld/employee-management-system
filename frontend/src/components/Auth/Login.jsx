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
        <div className='flex min-h-screen w-full items-center justify-center'>
            <div className='w-full max-w-sm bg-[#16181b] border border-white/5 rounded-2xl p-6 shadow-xl shadow-black/20'>
                <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                    {error && (
                        <div className="w-full p-2 bg-red-500/20 border border-red-500/40 text-red-200 text-sm rounded text-center">
                            {error}
                        </div>
                    )}
                    
                    <input
                        required
                        type="email"
                        placeholder='Enter your email'
                        className='placeholder-gray-500 bg-transparent border border-white/10 focus:border-emerald-400 rounded-md p-2 w-full text-white outline-none transition-colors'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                    />
                    
                    <input
                        required 
                        type="password" 
                        placeholder='Enter your password'
                        className='placeholder-gray-500 bg-transparent border border-white/10 focus:border-emerald-400 rounded-md p-2 w-full text-white outline-none transition-colors'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isSubmitting}
                    /> 
                    
                    <button 
                        type='submit'
                        disabled={isSubmitting}
                        className='bg-emerald-600 text-white px-7 p-2 rounded-md hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed'>
                        {isSubmitting ? 'Logging In...' : 'Log In'}
                    </button>
                </form>
                
                <div className='flex items-center justify-center p-4'>
                    <p className="text-gray-400 text-sm">Demo accounts are seeded locally.</p>
                </div>
            </div>
        </div>
    )
}

export default Login