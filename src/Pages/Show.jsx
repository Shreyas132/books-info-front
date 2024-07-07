import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import BackButton from "../Components/BackButton"
import Spinner from "../Components/Spinner"
const Show = () => {

  const [book,setbook] = useState(null)
  const [loading,setloading] = useState(false)
  const {id} = useParams()
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

  useEffect(()=>{
    setloading(true)

    axios(`${BACKEND_URL}/books/${id}`)
    .then((response)=>{
      setbook(response.data)
      console.log(response.data)
      setloading(false)
    })
    .catch((error)=>{
      console.log(error)
      setloading(false)
    })
  },[id])

  return (
    <div className="p-4" >
      <BackButton />
      <h1 className="text-3xl my-4">Show</h1>
      {
        loading ? (
          <Spinner />
        ) : (
          book &&
          <div className="flex flex-col border-2 border-sky-950  rounded-xl w-fit p-4">
            <div className="my-4">
              <span  className="text-xl mr-4 text-gray-500">Id</span>
              <span>{book._id}</span>
            </div>
            <div className="my-4">
              <span  className="text-xl mr-4 text-gray-500">Title</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span  className="text-xl mr-4 text-gray-500">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span  className="text-xl mr-4 text-gray-500">Published</span>
              <span>{book.publishedYear}</span>
            </div>
            <div className="my-4">
              <span  className="text-xl mr-4 text-gray-500">CreatedTime</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span  className="text-xl mr-4 text-gray-500">UpdatedTime</span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>


                                                    
          </div>
        )
      }
    </div>
  )
}

export default Show