import './Button.css'
import { Link } from 'react-router-dom'
export function Button1({slug} ) {
    return (
        <div className='button button1'>
     <Link className="bg-[#D87D4A] p-5 w-[160px] text-center   text-white font-thin " to={`/detail/${slug}`}>See Product</Link>
        </div>
    )
}