function mergeBorrowedBooks(bookInventory, borrowRecords) { // função dada no projeto
  const borrowMap = new Map(); // cria um map de busca por chave e valor

  // Criando um mapa para associar cada ISBN ao seu registro de empréstimo
  for (const record of borrowRecords) { // se ha registro de emprestimo e se esta emprestado
    borrowMap.set(record.isbn, record); // set para verificaçãodo emprestimo do livro
  }

  const merged = bookInventory   // utilizaçao do array bookInventory, para constante mesclar
    .map(book => {   // map para função arrow  mostrar o isbn do livro emprestado
      const record = borrowMap.get(book.isbn);

      // Se o livro está emprestado
      if (record && record.borrowed) { // condição se ha registro de emprestimo no livro e se ele esta emprestado
        const borrowedDate = new Date(record.borrowedDate); // vai transformar a data string em um objeto de javaScript, para futuras manipulaçoes ex:data.get, data.set....
        const returnDate = new Date(borrowedDate);// cria uma copia do objeto data, para que possa sofrer alteraçao sem modificar a data inicial
        returnDate.setDate(borrowedDate.getDate() + 7); // devolução em 7 dias

        return {
          ...book,
          borrowed: true,  // boleano 
          borrower: record.borrower,// se fo true, com qum esta o livro
          borrowedDate: record.borrowedDate,// da do emprestimo e copia da data
          returnDate: returnDate.toISOString().split('T')[0] // formato 'YYYY-MM-DD'
        };
      }

      return null; // descarta livros que nao foram emprestados
    })
    .filter(book => book !== null); // remove os que não foram emprestados

  return merged;
}

const bookInventory = [
  { isbn: 'A123', title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
  { isbn: 'B456', title: 'You Don’t Know JS', author: 'Kyle Simpson' },
  { isbn: 'C789', title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
];

const borrowRecords = [
  { isbn: 'A123', borrowed: true, borrower: 'João', borrowedDate: '2025-07-01' },
  { isbn: 'B456', borrowed: false },
  // Livro C789 não está aqui, considere que nao esta emprestado.
];
console.log(mergeBorrowedBooks(bookInventory, borrowRecords));