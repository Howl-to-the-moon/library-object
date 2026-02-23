

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
  console.log(isRead);
  if (isRead == false){
    isRead.textContent = "unread";
  } else {
    isRead.textContent = "read";
  }
    this.id = crypto.randomUUID();

};

function addBookToLibrary(title, author, pageCount, isRead){
   let temp = new Book(title, author, pageCount, isRead);
   myLibrary.push(temp);
};


    

function displayBooks(myLibrary){
    let display = document.querySelector(".bookContainer");
    for (i = 0; i < myLibrary.length ; i++){
        /* make it so a new div with a class for the card template n stuff is made that cocntains the content from each book. this for statement is messsed up so research and fix when u work on this later */
       let newCard = document.createElement("div");
        newCard.classList.add("libraryCard");

        let newTitle = (document.createElement("div"));
        newTitle.textContent = myLibrary[i].title;

        let newAuth = document.createElement("div");
        newAuth.textContent = myLibrary[i].author;
        
        let pageCount = document.createElement("div");
        pageCount.textContent = myLibrary[i].pageCount;

        let holder = document.createElement("div");
        holder.classList.add("grid");

        let isRead = document.createElement("div");
        isRead.textContent = myLibrary[i].isRead;

        let toggle = document.createElement("button");
        toggle.textContent = "Read?";
        
        holder.append(isRead, toggle);
        newCard.append(newTitle, newAuth, pageCount, holder);
        display.append(newCard);

    }
};

let popUp = document.querySelector(".form");
function showPopUp(){
    popUp.classList.remove("hide");
    popUp.classList.add("show");
};

function hidePopUp(){
    popUp.classList.remove("show");
    popUp.classList.add("hide");
};

let addBook = document.querySelector(".addBook");
let cancel = document.querySelector(".cancel");
let submit = document.querySelector(".submit")

 addBook.addEventListener("click", () => {
    showPopUp();
}); 

cancel.addEventListener("click", () => {
    hidePopUp();
});

submit.addEventListener("click", () => {
    
    let a = document.getElementById('book_title');
    let b = document.getElementById('book_author');
    let c = document.getElementById('pageCount');
    let d = document.getElementById('isRead');
    addBookToLibrary(a.value, b.value, c.value, d.value);

     clearAll(); 
    displayBooks(myLibrary);
    hidePopUp();
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
    d.value = '';
};
 
addBookToLibrary("Apathy", "Benson", 235, false);

displayBooks(myLibrary);
