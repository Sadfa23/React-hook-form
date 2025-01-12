'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm ,type FieldValues} from 'react-hook-form';
import { z } from 'zod'

function SignUpRhfZod() {
    const signUpSchema = z
    .object({
        username: z.string().min(8, 'Username must be atleast 8 characters'),
        email:z.string().email(),
        password:z.string().min(5,'Password must be atleast 5 characters'),
        confirmPassword:z.string()
    }).refine((data)=>data.password === data.confirmPassword,{
        message:'Passwords must match',
        path:['confirmPassword']
    })

    const{register,
         handleSubmit,
         reset, 
         formState: { isSubmitting, errors }}=useForm({resolver:zodResolver(signUpSchema)});

         const onSubmit = async (data: FieldValues) => {
            // TODO: submit to server
            // ...
            await new Promise((resolve) => setTimeout(resolve, 1000));
        
            reset();
          };

  return (
    <form 
    className='flex flex-col w-auto gap-y-2'
    onSubmit={handleSubmit(onSubmit)}>
        <input 
        {
            ...register('username')
        }
        type="username" 
        placeholder='Enter your username'/>
        {
            errors.username && (
                <p className='text-red-500'>{`${errors.username.message}`}</p>
            )
        }

        <input 
        {
            ...register('email')
        }
        type="email"
        placeholder='Enter your email'/>
        <input {
            ...register('password')
        }
        type="password" 
        placeholder='Enter your password'/>
        {errors.password && (
            <p className='bg-red-100 text-red-600'>{`${errors.password.message}`}</p>
        )}

        <input 
        {
            ...register('confirmPassword')
        }
        type="password"
        placeholder='Confirm password'/>
        {errors.confirmPassword && (
            <p className='bg-red-100 text-red-600'>{`${errors.confirmPassword.message}`}</p>
        )}

        <button 
        className='bg-blue-700 text-white font-semibold px-3 py-2 rounded-lg active:bg-gray-500'
        type='submit'
        disabled={isSubmitting}>
            Submit
        </button>
    </form>
  )
}

export default SignUpRhfZod