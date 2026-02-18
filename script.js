console.log("yooch");


const myLibrary = [];

function Book(title, author, pageCount, isRead){

    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
    this.id = crypto.randomUUID();

};

function addBookToLibrary(title, author, pageCount, isRead){
   let temp = new Book(title, author, pageCount, isRead);
   myLibrary.push(temp);
};

function displayBooks(myLibrary){
    for (i = myLibrary.length; i > 0 ; i--){
        /* make it so a new div with a class for the card template n stuff is made that cocntains the content from each book. this for statement is messsed up so research and fix when u work on this later */
    }
};

