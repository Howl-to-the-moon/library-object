console.log("yooch");


const myLibrary = [];

function Book(title, author, pageCount, isRead){

    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

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
    let display = document.querySelector(".mainContainer");
    for (i = 0; i < myLibrary.length ; i++){
        /* make it so a new div with a class for the card template n stuff is made that cocntains the content from each book. this for statement is messsed up so research and fix when u work on this later */
       let newCard = document.createElement("div");
        newCard.classList.add("libraryCard");
        let newTitle = document.createElement("div");

        display.append(newCard);

    }
};

addBookToLibrary("Apathy", "Benson", 235, false);

