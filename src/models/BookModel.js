import http from '../utils/http'

class BookModel {
  getBooks(){
    return http.get('book')
  }
}

const bookModel = new BookModel()
export default bookModel