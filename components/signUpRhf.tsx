'use client'

import React from 'react'
import { useForm ,type FieldValues} from 'react-hook-form';

function SignUpRhf() {
    const{register,
         getValues,
         handleSubmit,
         reset, 
         formState: { isSubmitting, errors }}=useForm();

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
            ...register('username',{
                required: true,
                minLength: {
                    value:8,
                    message:'Username must be atleast 8 characters long'
                }
            })
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
            ...register('email',{
                required:'Email is required',
            })
        }
        type="email"
        placeholder='Enter your email'/>
        <input {
            ...register('password',{
                required:'Password is required'
            })
        }
        type="password" 
        placeholder='Enter your password'/>
        {errors.password && (
            <p className='bg-red-100 text-red-600'>{`${errors.password.message}`}</p>
        )}

        <input 
        {
            ...register('confirmPassword',{
                required:'This field cannot be left blank',
                validate:(value)=>value===getValues('password')||'Passwords must match'
            })
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

export default SignUpRhf