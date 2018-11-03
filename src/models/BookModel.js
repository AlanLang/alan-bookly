import http from '../utils/http'

class BookModel {
  getBooks(){
    return http.get('book')
  }
  getBook(id){
    return http.get(`book/${id}`)
  }

  getReadStatus(bookId){
    return http.get(`readlog/status/${bookId}`)
  }

  beginRead(bookId){
    return http.post('readlog',{book:bookId})
  }
  stopRead(logId,readNumber){
    return http.put(`readlog/${logId}`,{readNumber:parseInt(readNumber)})
  }

  getReadLog(bookId){
    return http.get(`readlog/log/${bookId}`)
  }
}

const bookModel = new BookModel()
export default bookModel