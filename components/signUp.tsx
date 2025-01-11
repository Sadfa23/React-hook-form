'use client'

import React, { useState } from 'react'


function SignUp() {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleSubmit =  (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');   
    }
    
  return (
    <form 
    className='flex flex-col w-auto gap-y-2'
    onSubmit={handleSubmit}>
        <input 
        type="username" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Enter your username'/>
        <input 
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='Enter your email' />
        <input 
        type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Enter your password'/>
        <input 
        type="password"
        value={confirmPassword} 
        onChange={(e)=>setConfirmPassword(e.target.value)}
        placeholder='Confirm password'/>

        <button 
        className='bg-blue-700 text-white font-semibold px-3 py-2 rounded-lg active:bg-gray-500'
        type='submit'>
            Submit
        </button>
    </form>
  )
}

export default SignUp