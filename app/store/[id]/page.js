import BookDetails from '@/app/Ui/book/BookDetails'
import {getBookById} from '../../lib/fake-data'
const BookDetailsPage=( { params:{id}})=>{
    
    const books = getBookById(id)

    return(
        <>
        <BookDetails book={books}/>
        </>
    )
}

export default BookDetailsPage