import { useEffect,useState } from 'react'
import axios from 'axios'
import Spinner from '../Components/Spinner.jsx'
import {Link} from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'

const Home = () => {

  const [books,setbooks] = useState([])
  const [loading,setloading] = useState(false)
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
  useEffect(()=>{
    setloading(true)

    axios.get(`${BACKEND_URL}/books`)
    .then((response)=>{
      setbooks(response.data.data)
      console.log(response.data.data)
      setloading(false)
    }).catch((error)=>{
      console.log(error)
      setloading(false)
    })
    
  },[])
  return (
    <div className='p-4'>
      <div className='flex justify-between items-centre'>
        <h1 className='text-3xl my-8 '>Books list</h1>
      </div>
      <Link to='/books/create'>
        <MdOutlineAddBox className='text-sky-800 text-3xl' />
      </Link>
      {
        loading ? (
          <Spinner />
        ) : (
          <table className='w-full border-separate border-spacing-2'>
            <thead>
              <tr>
                <th className='border border-slate-600 rounded-md'>No</th>
                <th className='border border-slate-600 rounded-md'>Title</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Published Year</th>
                <th className='border border-slate-600 rounded-md'>Operations</th>
              </tr>
            </thead>
            <tbody>
              {
                books.map((book,index)=>(
                  <tr className='h-8' id={book._id} key={book._id}>
                    <td className='border border-slate-700 rounded-md text-center'>
                      {index + 1}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                      {book.title}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                      {book.author}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                      {book.publishedYear}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                      <div className='flex justify-center gap-x-4'>
                        <Link to = {`/books/details/${book._id}`}>
                          <BsInfoCircle className='text-2xl text-green-800' />
                        </Link>
                        <Link to = {`/books/edit/${book._id}`}>
                          <AiOutlineEdit className='text-2xl text-yello-800' />
                        </Link>
                        <Link to={`/books/delete/${book._id}`}>
                          <MdOutlineDelete className='text-2xl text-red-800' />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }
    </div>
  )
}

export default Home