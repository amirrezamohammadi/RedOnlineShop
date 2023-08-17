import axios from 'axios';
import React, { useState } from 'react'
import { useMutation } from 'react-query';
import { useAuth } from '../hooks/useAuth';

const Login = () => {

const {login} = useAuth()
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null)
const [isCredentalsWrong , setIsCredentalsWrong] = useState(false)


const userLogin = useMutation({
  
  mutationKey:"login",
  mutationFn:()=>{
    
    setIsCredentalsWrong(false);
    let data={
      email:email,
      password:password
    };
    return(axios.post("/login",data))
    
  },

  onSuccess:(data)=> login(data.id),
  onError:()=> setIsCredentalsWrong(true)}
)

  const onChange = event =>{

    if (event.name === 'email') {
      setEmail(event.value)
    } else {
      setPassword(event.value)
    }

  }
  const  onSubmit =(event) =>{
    userLogin.mutate();
    event.preventDefault();

  }



  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-12 w-auto"
          src={require("../assets/RedLogo.png")}
          alt="Redshop"
        />
        <h2
          className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action='./' method='POST' onSubmit={(e)=>onSubmit(e)}>
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label
            >
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                value= {email}            
                required
                onChange={(e)=>onChange(e.currentTarget)}
                className="block w-full rounded-md border border-gray-300 shadow-sm px-1 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
              <div className="text-sm">
                <a
                  href="./forget-password"
                  className="font-semibold text-[#FF3333]"
                  >Forgot password?</a
                >
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                value={password}
                required
                onChange={(e)=>onChange(e.currentTarget)}
                className="block w-full rounded-md border border-gray-300 shadow-sm py-1.5 px-1 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#FF3333] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm group-hover:bg-white hover:border hover:border-[#FF3333]"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="./signup"
            className="font-semibold leading-6 text-[#FF3333]"
            >Sign Up!</a
          >
        </p>
      </div>
    </div>
  )
}

export {Login}