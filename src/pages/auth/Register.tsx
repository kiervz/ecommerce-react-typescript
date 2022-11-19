import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-white flex rounded-2xl max-w-6xl shadow-lg w-[600px]'>
        <div className='w-[100%] p-16'>
          <h2 className='font-bold text-2xl'>Register</h2>
          <p className='text-sm mt-4'>Register to create an account.</p>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST" className='mt-8'>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" id="name" className="p-2 mt-1 w-full rounded-xl border" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" id="email" className="p-2 mt-1 w-full rounded-xl border" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input 
                    type="text" 
                    name="phone" 
                    id="phone" 
                    maxLength='11' 
                    className="p-2 mt-1 w-full rounded-xl border" 
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </div>
                <div className='grid grid-cols-2 gap-1'>
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                    <select id="gender" name="gender" className="mt-1 block w-full rounded-xl border bg-white py-2.5 px-3 shadow-sm">
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Birthday</label>
                    <input type="date" name="birthday" id="birthday" className="p-2 mt-1 w-full rounded-xl border" />
                  </div>
                </div>
                <button className='bg-[#001829] text-white py-2 rounded-xl hover:bg-[#002540] hover:scale-105 duration-300 mt-2'>Register</button>
              </div>
            </form>
          </div>
          <div className='mt-8'>
            <p className='text-sm'>
              <span className='text-gray-500'>Already have an account? </span>
              <span className='font-bold cursor-pointer text-gray-800'><Link to='/login'>Login here</Link></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;