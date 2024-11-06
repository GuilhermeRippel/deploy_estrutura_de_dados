import { Link } from "react-router-dom"

export default function ButtonBack() {
  return (
    <div className='absolute bottom-14 left-9'>
    <Link to="/"><button className="mt-5 w-24 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-500">Voltar</button></Link>
    </div>
  )
}
