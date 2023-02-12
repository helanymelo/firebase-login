import React, {useState, useEffect} from 'react'
import {auth} from '../firebaseConnection';
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';


function Private({children}) {
    const [load, setLoad] = useState(true)
    const [signed, setSigned] = useState(false)

    useEffect(()=>{
      async function checkLogin(){
        const unsub = onAuthStateChanged(auth, (user)=>{
          if(user){
            const userData = {
              uid: user.uid,
              email: user.email
            }
            localStorage.setItem('@userDetail', JSON.stringify(userData))

            setLoad(false)
            setSigned(true)
          }else{
            setLoad(false)
            setSigned(false)

          }
        })
      }
      checkLogin()
    }, [])

    if(load){
      return(
        <div>Carregando...</div>
      )
    }

    if(!signed){
      return <Navigate to="/" />
      
    }


  return  children
}
export default Private