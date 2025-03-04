import { FaCartPlus } from 'react-icons/fa';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const ShopItem = ({ image, id, company, name, price, onClick, exists }) => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    navigate(`/products/${id}`)
  }

  return (
    < >
      <a onClick={handleClick} href={`/products/${id}`} className=' bg-red relative lg:w-3/12 md:w-4/12 sm:w-6/12 w-full mb-10'>
        <div className="mx-4 bg-[#faf6f4] rounded-lg overflow-hidden cursor-pointer">
          <img className='object-cover w-full h-[230px]' src={image} alt="shop1" />
          <div className='p-3'>
            <p className="text-xs text-gray-600 capitalize">{company}</p>
            <h3 className="text-lg font-semibold capitalize">{name}</h3>
            <div className="flex justify-between items-center mt-3">
              <p className='text-gray-800 font-semibold text-base'>${price}</p>
              {exists(id) ? (
                <button onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }} className='bg-[#6c5c51] text-white rounded-full w-10 h-10 flex justify-center items-center'>
                  <BsFillCartCheckFill size={16} />
                </button>
              ) : (
                <button onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  onClick()
                }} className='bg-[#A1662F] text-white rounded-full w-10 h-10 flex justify-center items-center'>
                  <FaCartPlus size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </a>
    </>
  )
}

export default ShopItem