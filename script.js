
/* 

2/28. Ok look motherfucker.

you need to look back over all these lessons cause you keep flubbing around and not undertsanding shit.

1.) use protoypes to:
    a.) give button function to toggle between read/unread
    b.) give button function to delete the card its on
    
2.) fix dialog button to set the inital read state. the 3 other values appear to be fine.


you should probably actually start from scratch and reread these lessons. maybe tmmrw if its not too much work. please, God i need to understand this.


*/






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
   myLibrary.push(new Book(title, author, pageCount, isRead));
};

function displayBooks(myLibrary){
    let display = document.querySelector(".bookContainer");
    for (i = 0; i < myLibrary.length ; i++){
        /* make it so a new div with a class for the card template n stuff is made that cocntains the content from each book. this for statement is messsed up so research and fix when u work on this later */
       let newCard = document.createElement("div");
        newCard.classList.add("libraryCard");
        newCard.id = myLibrary[i].id;

        let newTitle = (document.createElement("div"));
        newTitle.textContent = myLibrary[i].title;

        let newAuth = document.createElement("div");
        newAuth.textContent = myLibrary[i].author;
        
        let pageCount = document.createElement("div");
        pageCount.textContent = myLibrary[i].pageCount;

        let isRead = document.createElement("button");
        isRead.classList.add("isRead");
        isRead.textContent = (myLibrary[i].isRead);

        let deleteBook = document.createElement("button");
        deleteBook.textContent = "Delete";

        

        isRead.addEventListener("click", () => {
            console.log("click");
            
            if (isRead.textContent == "Read"){
                isRead.textContent = "Unread";
            } else {
                isRead.textContent = "Read";
            };
        });

        /* as much as it sucks it takes to clicks to work this is the closests i've gotten. just need to implement the cancel button and get the form screen thing to work and i'm pretty much there to a 'dunctional' library */
        
        
        
        newCard.append(newTitle, newAuth, pageCount, isRead);
        display.append(newCard);

    }
};

let submit = document.querySelector(".submit");

submit.addEventListener("click", (event) => {

    event.preventDefault();
    
    let a = document.getElementById('book_title');
    let b = document.getElementById('book_author');
    let c = document.getElementById('pageCount');
    let d = document.getElementById('isRead');

    if (a.value == '' || b.value == '' || c.value == ''){
        return;
    }


    addBookToLibrary(a.value, b.value, c.value, d.textContent);

    

     clearAll(); 
    displayBooks(myLibrary);
    
});

 function clearAll(){
    let main = document.querySelector(".bookContainer");
    while (main.firstChild){
        main.removeChild(main.lastChild);
    }

    let a = document.getElementById('book_title');
    let b = document.getElementById('book_author');
    let c = document.getElementById('pageCount');
    let d = document.getElementById('isRead');
    
    a.value = '';
    b.value = '';
    c.value = '';
    
};






addBookToLibrary("Apathy", "Benson", 235, 'Read');
addBookToLibrary("Conflict", "Adam", 254, 'Unread');

displayBooks(myLibrary);