

let readButton = document.querySelector("#isRead");
let display = document.querySelector(".bookContainer");

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

function addBookToLibrary(title, author, pageCount, isRead){
   myLibrary.push(new Book(title, author, pageCount, isRead));
};


/* below is da main sha-bang */

/* for whatever reason i couldn't figure out how prototypes work
so i just embeded the events in the buttons for each iterations. it works!!
and i am using a Book constructor so i atleast learned something!! */

function displayBooks(myLibrary){

    for (i = 0; i < myLibrary.length ; i++){

       let newCard = document.createElement("div");
        newCard.classList.add("libraryCard");
        newCard.id = myLibrary[i].id;
        

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
        isRead.textContent = (myLibrary[i].isRead);

        let deleteBook = document.createElement("button");
        deleteBook.textContent = "Delete";

        
         isRead.addEventListener("click", function () {
            console.log(isRead.textContent);
            if (isRead.textContent == "Read"){
                isRead.textContent = "Unread";
            } else {
                isRead.textContent = "Read";
            };
         }); 

         let index = myLibrary.indexOf(myLibrary[i]);
         deleteBook.addEventListener("click", function () {
                
                console.log(myLibrary[i]);
                console.log(index);
                console.log(i);

                 if (index > -1) 
                    { // only splice array when item is found
                    myLibrary.splice(index, 1); // 2nd parameter means remove one item only
                }

            clearAll();
            displayBooks(myLibrary);
            } )
            

        buttonContainer.append(isRead, deleteBook);
        newCard.append(newTitle, newAuth, pageCount, buttonContainer);
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

    if (a.value == '' || b.value == '' || c.value == '')
    {
        return;
    }

    addBookToLibrary(a.value, b.value, c.value, d.textContent);
    clearAll(); 
    displayBooks(myLibrary);
    
});

 function clearAll(){
     let main = document.querySelector(".bookContainer");
        while (main.firstChild)
        {
            main.removeChild(main.lastChild);
        } 

    let a = document.getElementById('book_title');
    let b = document.getElementById('book_author');
    let c = document.getElementById('pageCount');
    
    a.value = '';
    b.value = '';
    c.value = '';
    
};




readButton.addEventListener("click", swapRead);

function swapRead (){
    if (readButton.textContent == "Read")
    {
        readButton.textContent = "Unread";
    } 
    else 
    {
        readButton.textContent = "Read";
    }
};

addBookToLibrary("Apathy and other small victories", "Paul Neilman", 240, 'Read');
addBookToLibrary("if on a winter's night a traveler", "Italo Calvino's", 272, 'Unread');
displayBooks(myLibrary);
swapRead();