import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../../pages/Home/home.css"
import {auth} from '../../firebaseConnection'
import { createUserWithEmailAndPassword} from 'firebase/auth'


export const Register=()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function handleRegister(e){
        e.preventDefault()
        if(!email && !password){
            swal({
                title: "Preencha todos os campos",             
                icon: "warning",
              })
            return
        }else{
            alert('Acessando...')
        }
        e.preventDefault()
       await createUserWithEmailAndPassword(auth, email, password)
       .then(()=>{
        navigate('/admin', {replace:true})
       }).catch(()=>{
        alert('Erro')
       })
        
    }


  return (
    <div className='home-container'>
        <h1>Cadastre-se!</h1>      

        <form className='form' onSubmit={handleRegister}>
            <input 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Digite seu e-mail'
                type='Digite seu e-mail!'
            />

            <input 
                type='password' 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Digite sua senha'
            />

            <button type='submit'>Cadastrar</button>            
        </form>

        <Link to="/" className='button-link'>
            Já possui uma conta? Faça o login!
        </Link>
    </div>
  )
}

