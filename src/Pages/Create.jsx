import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import BackButton from "../Components/BackButton"
import Spinner from "../Components/Spinner"
import axios from "axios"

const Create = () => {
  const[title,settitle] = useState('')
  const[author,setauthor] = useState('')
  const[publishedYear,setpublishedYear] = useState('')
  const [loading,setloading] = useState(false)
  const navigate = useNavigate()
  
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
  const handlecreate = () =>{
    const data = {
      title,
      author,
      publishedYear,
    }
    setloading(true)
    axios .post(`${BACKEND_URL}/books`,data)
    .then(()=>{
      setloading(false)
      navigate('/')
    })
    .catch((error)=>{
      setloading(false)
      alert("Ann error happened while creating")
      console.log(error)
    })
  }

  return (
    <div className="p-4">
      <BackButton />
      { loading ? <Spinner /> : ''}
      <h1 className="text-3xl my-4">Create new data</h1>
      <div className="flex flex-col border-2 border-sky-700 rounded-xl w-[600px] p-4 mx-auto ">
        <div className="p-4">
          <label className="text-2xl text-gray-900 mr-4">Title</label>
          <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full" />
        </div>
        <div className="p-4">
          <label className="text-2xl text-gray-900 mr-4">Author</label>
          <input type="text" value={author} onChange={(e)=>setauthor(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full" />
        </div>
        <div className="p-4">
          <label className="text-2xl text-gray-900 mr-4">PublishedYear</label>
          <input type="text" value={publishedYear} onChange={(e)=>setpublishedYear(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full" />
        </div>
        <button className="p-2 bg-sky-500 m-8" onClick={handlecreate}>Save</button>

      </div>

    </div>
  )
}

export default Create