function findAuthorById(authors, id) {
  for (let author in authors) {
    if (authors[author].id === id) return authors[author];
  }
}

function findBookById(books, id) {
  for (let book in books) {
    if (books[book].id === id) return books[book];
  }
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = [];
  let returned = [];
  let result = [borrowed, returned];
  for (let book in books) {
    if (books[book].borrows[0].returned === false) {
      borrowed.push(books[book]);
    } else {
      returned.push(books[book]);
    }
  }
  return result;
}
function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  let result = [];
  for (let selected in borrows) {
    for (let account in accounts) {
      if (borrows[selected].id === accounts[account].id) {
        result.push({ ...borrows[selected], ...accounts[account] });
      }
    }
  }
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
