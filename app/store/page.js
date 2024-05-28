import BookList from '../Ui/book/BookList'
import {getAllBooks} from '../lib/fake-data'
const BookListPage =()=>{
  const books= getAllBooks()
    return(
        <>
        <BookList book={books}/>
        </>
    )
}

export default BookListPage