import BookList from '../Ui/sidebar/book/BookList'
import {books} from '../lib/fake-data'
const BookListPage =()=>{
    
    return(
        <><BookList book={books}/></>
    )
}

export default BookListPage