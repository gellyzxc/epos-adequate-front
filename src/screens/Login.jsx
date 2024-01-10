import React, { useMemo, useRef, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import { publicApiInstance } from '../http-common';

export default function Login() {
  const [user, setUser] = useState({})
  const { login } = useAuth()

  const form = useRef()

  const handleLogin = () => {
    console.log(form)

    publicApiInstance.post('/auth/login', {
      email: form.current[0].value,
      password: form.current[1].value
    })
    .then((response) => {
      console.log(response.data);
      login(response.data)
    })

  }

  return (
    <div>
        <p className="a">
          Login
        </p>
        <form ref={form}>
          <input placeholder='Почта'/>
          <input type='password' placeholder='Пароль' />
        </form>
        <button onClick={() => handleLogin()}>process</button>

      </div>
  )
}


    // toast('🦄 Wow so easy!', {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   });
