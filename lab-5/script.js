// Show all the commands first
console.log('Use the following functions to showcase:');
console.log('addBook() -- Used to add a new book to the catalogue.');
console.log('showBooks() -- Used to display a list of book titles and their indexes in the catalogue.');
console.log('showBook() -- Used to display the details of a book, including the book\'s title, author, and genre.');
console.log('Sample Input -- Book 1: addBook(\'One Hundred Years of Solitude\', \'Gabriel García Márquez\', \'Magical Realism\')\n Book 2: addBook(\'The Call of the Wild\', \'Jack London\', \'Adventure\')')

// Create an empty book catalogue
let bookCatalogue = [];

// Create function to add books
function addBook (title, author, genre) {
    let newBook = {
        title: title,
        author: author,
        genre: genre
    };
    bookCatalogue.push(newBook);
    return 'Book added';
}

//Create function to display a list of book titles and the indexes
function showBooks() {
    if (bookCatalogue.length === 0){
        return 'No books yet.'
    }
    for (let i = 0; i < bookCatalogue.length; i++) {
        console.log(i + ': ' + bookCatalogue[i].title);
    }
}


// Create function to display the details of a book
function showBook (index) {
    if (bookCatalogue.length === 0) {
        return 'No books yet.'
    }
    if (bookCatalogue[index]) {
        console.log('Title: ' + bookCatalogue[index].title);
        console.log('Author: ' + bookCatalogue[index].author);
        console.log('Genre: ' + bookCatalogue[index].genre);
    } else {
        console.log('Can\'t find the book.')
    }
}