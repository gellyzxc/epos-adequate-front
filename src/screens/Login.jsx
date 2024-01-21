import React, { useMemo, useRef, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { publicApiInstance } from '../http-common';
import {presentToast} from '../utils/toast'
export default function Login() {
  const [user, setUser] = useState({})
  const { login } = useAuth()

  const form = useRef()

  const handleLogin = () => {
    publicApiInstance.post('/auth/login', {
      email: form.current[0].value,
      password: form.current[1].value
    })
    .then((response) => {
      console.log(response.data);
      login(response.data)
    })
    .catch((error) => {
        presentToast(error.response.data.message)

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
