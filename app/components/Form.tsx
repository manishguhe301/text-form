'use client';
import React, { useEffect, useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('');
  const [message, setMessage] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (name && email && dept && message && time) {
      setError('');
    }
  }, [name, email, dept, message, time]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !dept || !message || !time) {
      setError('Please fill in all fields.');
      return;
    }
    console.log(validateEmail(email))
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Department:', dept);
    console.log('Message:', message);
    console.log('Time:', time);
  };
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <p className='text-base font-bold max-sm:hidden'>Contact Us</p>
      <h1 className='text-3xl font-bold py-2 max-sm:hidden'>
        Make an Appointment
      </h1>
      <h1 className='hidden text-2xl max-sm:block font-bold'>
        Book Appointment
      </h1>
      <form
        className='w-[600px] flex flex-col gap-5 mt-10 max-sm:w-full max-sm:px-10 max-sm:gap-3'
        onSubmit={handleSubmit}
      >
        <div className='flex items-center gap-3 w-full max-sm:flex-col'>
          <label
            htmlFor='name'
            className='hidden max-sm:block mb-1 self-start text-base font-semibold'
          >
            Name*
          </label>
          <input
            type='text'
            placeholder='Full Name*'
            className='h-12 px-3 bg-[#F9F9F9] outline-none border border-[#737373] text-[#737373] rounded-md w-1/2 max-sm:w-full'
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor='email'
            className='hidden max-sm:block mb-1 self-start text-base font-semibold'
          >
            Email*
          </label>
          <input
            type='email'
            placeholder='Email*'
            className='h-12 px-3 bg-[#F9F9F9] outline-none border border-[#737373] text-[#737373] rounded-md w-1/2  max-sm:w-full'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex items-center gap-3 w-full max-sm:flex-col'>
          <label
            htmlFor='dept'
            className='hidden max-sm:block mb-1 self-start text-base font-semibold'
          >
            Department*
          </label>
          <select
            className='h-12 px-3 bg-[#F9F9F9] outline-none border border-[#737373] text-[#737373] rounded-md w-1/2  max-sm:w-full'
            onChange={(e) => setDept(e.target.value)}
          >
            <option value=''>Please select</option>
            <option value='cps'>CS</option>
          </select>
          <label
            htmlFor='time'
            className='hidden max-sm:block mb-1 self-start text-base font-semibold'
          >
            Time*
          </label>
          <select
            className='h-12 px-3 bg-[#F9F9F9] outline-none border border-[#737373] text-[#737373] rounded-md w-1/2  max-sm:w-full'
            onChange={(e) => setTime(e.target.value)}
          >
            <option value='option1'>4:00 Available</option>
          </select>
        </div>
        <div className='w-full max-sm:hidden'>
          <textarea
            placeholder='Message'
            className='h-36 px-4 py-5 bg-[#F9F9F9] outline-none border border-[#737373] text-[#737373] rounded-md w-full resize-none'
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {error && <p className='text-red-500'>{error}</p>}
        <button
          className=' bg-[#23A6F0] text-white rounded-md px-8 py-4 w-fit m-auto max-sm:mt-4 max-sm:w-full font-bold'
          type='submit'
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default Form;
