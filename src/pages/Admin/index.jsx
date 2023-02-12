import React, { useState, useEffect } from 'react'
import "./admin.css"
import {auth, db} from '../../firebaseConnection'
import { signOut } from 'firebase/auth'
import {addDoc, collection, onSnapshot, query, orderBy, where, doc, deleteDoc, updateDoc} from 'firebase/firestore'
import swal from 'sweetalert'


function Admin() {
  const [tarefa, setTarefa] = useState("")
  const [user, setUser] = useState({})
  const [search, setSearch] = useState([])
  const [edit, setEdit] = useState({})

  useEffect(()=>{
    async function loadTarefas(){
      const detailUser = localStorage.getItem('@userDetail')
      setUser(JSON.parse(detailUser))

      if(detailUser){
        const data = JSON.parse(detailUser);
  
        const tarefaRef = collection(db, "tarefa")
        const q = query(tarefaRef, orderBy("created", "desc"), where("userUid", "==", data?.uid))
        const unsub = onSnapshot(q, (snapshot)=>{
          let lista = []
  
          snapshot.forEach((doc)=>{
            lista.push({
              id: doc.id,
              tarefa: doc.data().tarefa,
              userUid: doc.data().userUid
            })
          })
          console.log(lista)
          setSearch(lista)
        })
      }
    }
  
    loadTarefas()
  },[])

  async function handleRegister(e){
    e.preventDefault()
    if(!tarefa){
      swal({
        title: "Preencha todos os campos!",        
        icon: "warning",
      })
      return
    }

    if(edit?.id){
      handleUpDateTask()
      return
    }
    await addDoc(collection(db, "tarefa"),{
      tarefa: tarefa,
      created: new Date(), 
      userUid: user?.uid 
      
    }).then(()=>{
      console.log('Tarefa registrada')
      setTarefa('')
    }).catch(()=>{
      console.log('Erro ao registrar')
    })
  }

  async function handleLogout(){
  await signOut(auth)
}
  

  async function deleteTask(id){
    const docRef = doc(db, "tarefa", id)
    await deleteDoc(docRef)
  }

  async function editTask(item){
    setTarefa(item.tarefa)
    setEdit(item)
  }

  async function  handleUpDateTask(){
    const editRef = doc(db, "tarefa", edit?.id)
    await updateDoc(editRef, {
      tarefa: tarefa
    }).then(()=>{
      swal({
        title: "Tarefa Atualizada!",        
        icon: "success",
      })
      setTarefa("")
      setEdit({})
    }).catch(()=>{
      swal({
        title: "Erro ao atualizar tarefa!",        
        icon: "error",
      })
      setTarefa("")
      setEdit({})
    })
  }


  return (
    <div className='admin-container'>
      <h1>Minhas tarefas</h1>

      <form onSubmit={handleRegister} className="form">
        <input
          value={tarefa}
          onChange={(e)=>setTarefa(e.target.value)}
        />

        {Object.keys(edit).length > 0 ? (
          <button type='submit' style={{backgroundColor:'#161'}}>Editar Tarefa</button>
        ):  <button type='submit' className='btn-register'>Adicionar Tarefa</button>}
      </form>

      {search.map((item)=>{
        return(
          <article className='list' key={item.id}>
        <p>{item.tarefa}</p>

        <div>
          <button onClick={()=>editTask(item)}>Editar</button>
          <button onClick={()=>deleteTask(item.id)} className='btn-delete'>Excluir</button>
        </div>
      </article>
        )
      })}

      <button onClick={handleLogout} className='btn-logout'>Sair</button>

    </div>
  )
}

export default Admin