'use client'

import React, { useState } from 'react'


function SignUp() {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errors, setErrors] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const handleSubmit =  (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setIsSubmitting(true);
        console.log(username, email, password, confirmPassword)
        if (password!==confirmPassword) {
            setErrors(['Password and confirm password must match'])
            setIsSubmitting(false);
            return
        }

        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');   
    }
    
  return (
    <form 
    className='flex flex-col w-auto gap-y-2'
    onSubmit={handleSubmit}>
        {
            (errors.length>0)&&(
                <ul>
                    {errors.map((error)=>(
                        <li 
                        key={error}
                        className='bg-red-100 text-red-600'>
                            {error}
                        </li>
                    ))}
                </ul>
            )
        }
        <input 
        type="username" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Enter your username'
        required/>
        <input 
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='Enter your email'
        required />
        <input 
        type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Enter your password'
        required/>
        <input 
        type="password"
        value={confirmPassword} 
        onChange={(e)=>setConfirmPassword(e.target.value)}
        placeholder='Confirm password'
        required/>

        <button 
        className='bg-blue-700 text-white font-semibold px-3 py-2 rounded-lg active:bg-gray-500'
        type='submit'
        disabled={isSubmitting}>
            Submit
        </button>
    </form>
  )
}

export default SignUp