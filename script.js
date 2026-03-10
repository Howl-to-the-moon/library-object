
/* 

3/2. this fucking sucks.

ok so i did quickly fix up the shit so what you select on the menu 
transfers to the thingy, i just need to fix these two fucking buttons man.

something about prototypes, i just need to skim these lessons again.

the read/unread works!! just when made a function thats apart of
the thing, not as a prototype. God help me.

*/


let readButton = document.querySelector("#isRead");
let display = document.querySelector(".bookContainer");


console.log("yooch");


let myLibrary = [];

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

/* Book.prototype.readStatus = function () {
    console.log(this.isRead)
    

       
console.log(myLibrary);
}; */






function addBookToLibrary(title, author, pageCount, isRead){
   myLibrary.push(new Book(title, author, pageCount, isRead));
};



function displayBooks(myLibrary){

  
    
    for (i = 0; i < myLibrary.length ; i++){
        /* make it so a new div with a class for the card template n stuff is made that cocntains the content from each book. this for statement is messsed up so research and fix when u work on this later */

       let newCard = document.createElement("div");
        newCard.classList.add("libraryCard");

        let newTitle = (document.createElement("div"));
        newTitle.textContent = myLibrary[i].title;

        let newAuth = document.createElement("div");
        newAuth.textContent = `By: ${myLibrary[i].author}`;
        
        let pageCount = document.createElement("div");
        pageCount.textContent = `Pages: ${myLibrary[i].pageCount}`;

        let buttonContainer = document.createElement("div");
        buttonContainer.classList.add("buttonContainer");

        let isRead = document.createElement("button");
        isRead.classList.add("isRead");
        isRead.textContent = myLibrary[i].isRead;
        
        
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
    console.log(d.value);
    a.value = '';
    b.value = '';
    c.value = '';
    
};

const isReadButton = document.querySelector(".isRead");
isReadButton.addEventListener("click", () => {
    if (isReadButton.textContent == "Read"){
        isReadButton.textContent == "Unread";
    } else {
        isReadButton.textContent == "Read";
    }
};

addBookToLibrary("Apathy", "Benson", 235, 'Read');
addBookToLibrary("Conflict", "Adam", 254, 'Unread');
console.log(myLibrary[0].id);
displayBooks(myLibrary);
