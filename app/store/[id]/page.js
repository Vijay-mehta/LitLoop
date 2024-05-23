import BookCard from "@/app/Ui/sidebar/book/BookCard"
import {getBookById} from '../../lib/fake-data'
import BookDetails from "@/app/Ui/sidebar/book/BookDetails"
const BookDetailsPage=( { params:{id}})=>{
    
    const books = getBookById(id)

    return(
        <>
        <BookDetails book={books}/>
        </>
    )
}

export default BookDetailsPage