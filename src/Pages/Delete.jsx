import React from 'react'
import { useState} from 'react'
import Spinner from '../Components/Spinner'
import BackButton from '../Components/BackButton'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const Delete = () => {
  const [loading,setloading] = useState('')
  const navigate = useNavigate()
  const {id} = useParams()
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

  const handledelete =()=>{
    setloading(true)
    axios .delete(`${BACKEND_URL}/books/${id}`)
    .then((response)=>{
      setloading(false)
      navigate('/')
    })
    .catch((error)=>{
      setloading(false)
      alert("An error occured ,check console.")
      console.log(error)
    })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 classname='text-3xl my-4'>Delete record</h1>
      {
        loading ? <Spinner /> : ''
      }
      <div className='flex flex-col border-2 items-center border-sky-600 w-[600px] p-8 rounded-xl mx-auto'>
        <h3 className='text-2xl'>Confirm Deletion</h3>
        <button className='p-4 bg-red-700 text-white m-8 w-full' onClick={handledelete}>Yes,Delete it</button>
      </div>
    </div>
  )
}

export default Delete