import {useState} from 'react';
import {Link} from "react-router-dom"
import './home.css'
import {auth} from "../../firebaseConnection"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export const Home = () =>{
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const navigate = useNavigate()

    async function handleLogin(e){
        e.preventDefault()
        if(email !=="" && password !==""){
            swal({
                title: "Seja bem-vindo(a) aos sistema!",                
                icon: "success",
              })
           await signInWithEmailAndPassword(auth, email, password)
          
           .then(()=>{
            navigate('/admin', {replace:true})
           }).catch((err)=>{
            swal({
                title: "Erro ao fazer login!",                
                icon: "error",
              })
           })
        }else{
            swal({
                title: "Preencha todos os campos!",                
                icon: "warning",
              })
        }
    }



    return(
        <div className='home-container'>
            <h1>Projeto Login com Firebase</h1>

            <form className='form' onSubmit={handleLogin}>
                <input 
                    type='email'
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder='Digite seu e-mail'
                />

                <input 
                    autoComplete='false'
                    type='password'
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='Digite sua senha'
                />

                <button type='submit' >Acessar</button>
            </form>

            <Link className="button-link" to="/register">
                Não possui uma conta? Cadastre-se!
            </Link>
        </div>
    )
}

