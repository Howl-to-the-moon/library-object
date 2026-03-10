
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
            

          /* deleteBook.addEventListener("click", function () {
            let index = myLibrary.indexOf(thingForDelete);
            console.log(thingForDelete);
            console.log(index);
            if (index > -1) { // only splice array when item is found
            myLibrary.splice(index, 1); // 2nd parameter means remove one item only
            }

            clearAll();
            displayBooks(myLibrary);

          });          */

          /* just finger out the shit above and we're golden */
          
 
         
        
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
    
    a.value = '';
    b.value = '';
    c.value = '';
    
};




readButton.addEventListener("click", swapRead);




function swapRead (){
    if (readButton.textContent == "Read"){
        readButton.textContent = "Unread";
    } else {
        readButton.textContent = "Read";
    }
};

addBookToLibrary("Apathy", "Benson", 235, 'Read');
addBookToLibrary("Conflict", "Adam", 254, 'Unread');
console.log(myLibrary[0].id);
displayBooks(myLibrary);
swapRead();