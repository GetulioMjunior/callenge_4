function mergeBorrowedBooks(bookInventory, borrowRecords) {
    const borrowMap = new Map();
    for (const record of borrowRecords){
        borrowMap.set(record.isbn, record.borrowed);}

    
    const merged = bookInventory
    .map(book => {

        const borrowedStatus = borrowMap.has(book.isbn)
        ? borrowMap.get(book.isbn)
        : false;
        return {...book,borrowed: borrowedStatus};

    })
       .filter(book=> book.borrowed !== false);
       return merged;}

       const bookInventory = [
  { isbn: 'A123', title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
  { isbn: 'B456', title: 'You Don’t Know JS', author: 'Kyle Simpson' },
  { isbn: 'C789', title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
];

const borrowRecords = [
  { isbn: 'A123', borrowed: true },
  { isbn: 'B456', borrowed: false }
];

console.log(mergeBorrowedBooks(bookInventory, borrowRecords));
