const libDisplay = document.getElementById("library-display");

const library = 
[
  {
    title: "dummy",
    author: "dumb and duumber",
    pages: "222",
    read: false,
    rating: 1,
    id: 0
  },
  {
    title: "coconut",
    author: "moana",
    pages: "111",
    read: false,
    rating: 1,
    id: 1
  },
];


//constructor
function Book(title, author, pages, read, rating, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.rating = rating;
  this.id = id;
}

//call display function library when page loads
document.addEventListener("DOMContentLoaded", function() {
  displayLibrary();
})

// displays all dummy information
function displayLibrary() {
  libDisplay.innerHTML = "";
  library.forEach(book => {
    const row =
      `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read ? "Yes" : "No"}</td>
        <td>${book.rating}</td>
      </tr>
      `;
      libDisplay.innerHTML += row;
  })
}


function addBookToLibrary() {

}

function editBook() {

}


function openDialog() {
  document.getElementById("new-book-dialog").showModal();
}

function closeDialog() {
  document.getElementById("new-book-dialog").close();
}



setDisplayLibrary()