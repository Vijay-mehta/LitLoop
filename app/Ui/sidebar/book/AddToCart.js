import {ShoppingCartIcon} from '@heroicons/react/24/solid'
const AddToCart=({book})=>{
    return(
        <div className=' flex '>
            

        <button className=' bg-purple-600 text-white   hover:bg-purple-700   mr-3 px-3 py-1  rounded-sm'><ShoppingCartIcon className="w-5 mr-0.5 inline"    />to Buy</button>
        <button className=' bg-purple-600 text-white hover:bg-purple-700 px-3 py-1  rounded-sm'><ShoppingCartIcon className="w-5 mr-0.5 inline"    />to Rent</button>
        </div>
    )
}

export default AddToCart; 