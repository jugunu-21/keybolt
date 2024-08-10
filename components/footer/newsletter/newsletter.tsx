import React from 'react';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {

    setEmail('');
    toast.success("successfully signed in ")
  };
  return (

    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://cm1.narvii.com/6520/3b103973169af1af80f04d5e06842fb47be23c15_00.jpg')`,
      }}
    >
      <div className=" py-2 px-2 sm:py-8 sm:px-24 lg:flex">
        <div className=" rounded-lg bg-white p-2 "  >
          <div className="font-serif text-black text-3xl  my-2">
            sign up for Keybolt
          </div>
          <div className=" text-xl font-mono text-black">
            Get the latest updates, tips, and resources to help your food business thrive.
            <span className="text-orange-700"> Sign up </span>
            for our newsletter today.
          </div>
        </div>
        <div className=" flex text-pretty">
        <input
        name="email"
        id=""
        type="email"
        placeholder="your email address"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        title="Please enter a valid email address."
        className="text-center w-64 h-10 bg-red-100 rounded-lg m-1"
        value={email}
        onChange={handleInputChange}
      />
      {email && (
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-center w-32 h-10 bg-red-100 text-slate-950 rounded-lg m-1"
        >
          Subscribe
        </button>
      )}
        </div>
      </div>
    </div>

  );
}
