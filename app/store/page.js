import BookList from '../Ui/sidebar/book/BookList'
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