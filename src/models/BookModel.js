import http from '../utils/http'

class BookModel {
  getBooks(){
    return http.get('book')
  }
  getBook(id){
    return http.get(`book/${id}`)
  }

  addBook(book){
    return http.post('book',book)
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

  getReadReport(){
    return http.get(`readlog/report`)
  }

  uploadBookImg(file){
    return http.upload('upload',file)
  }
}

const bookModel = new BookModel()
export default bookModel