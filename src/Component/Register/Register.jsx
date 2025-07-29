import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 -left-10 w-32 h-32 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
        
        <form className="space-y-4">

          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="name"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-700"
              placeholder="your name"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-700"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-700"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white hover:bg-purple-700 text-black hover:text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 text-center text-sm text-gray-500 dark:text-gray-400">
          ─ OR SIGN IN WITH ─
        </div>

        <div className="flex flex-col space-y-3">
          <button
            onClick={() => alert("Google Login")}
            className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>
          <button
            onClick={() => alert("GitHub Login")}
            className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FaGithub className="text-xl text-gray-800 dark:text-white" />
            Continue with GitHub
          </button>
        </div>

        <Link to="/login" className="text-xs text-center mt-6 text-gray-400">
          Don't have an account? <a href="#" className="underline">Login</a>
        </Link>
      </div>
    </div>
  );
};

export default Register;
