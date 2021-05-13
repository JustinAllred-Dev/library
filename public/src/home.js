function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  const count = accounts.reduce((counter, acct) => {
    if (acct) counter += 1;
    return counter;
  }, 0);
  return count;
}

function getBooksBorrowedCount(books) {
  let acc = 0;
  for (let bookCounter in books) {
    if (books[bookCounter].borrows[0].returned === false) {
      acc++;
    }
  }
  return acc;
}
function getMostCommonGenres(books) {
  const genresWithCount = [];
  for (let book of books) {
    let genre = genresWithCount.find(
      (genreCheck) => genreCheck.name === book.genre
    );
    if (genre) {
      genre.count++;
    } else {
      genresWithCount.push({ name: book.genre, count: 1 });
    }
  }
  genresWithCount.sort((genre1, genre2) => genre2.count - genre1.count);
  return genresWithCount.slice(0, 5);
}

function getMostPopularBooks(books) {
  const mostPopular = [];
  for (let book in books) {
    let individualBookCount = books[book].borrows.length;
    mostPopular.push({ name: books[book].title, count: individualBookCount });
  }
  let mostPopularSorted = mostPopular.sort((bookA, bookB) =>
    bookA.count < bookB.count ? 1 : -1
  );
  return mostPopularSorted.slice(0, 5);
}
//Helper Function from "books.js"
function findAuthorById(authors, id) {
  for (let author in authors) {
    if (authors[author].id === id) return authors[author];
  }
}
function getMostPopularAuthors(books, authors) {
  const mappedBooks = books.map((book) => {
    const {
      name: { first, last },
    } = findAuthorById(authors, book.authorId);
    return { name: `${first} ${last}`, count: book.borrows.length };
  });
  return mappedBooks
    .sort((book1, book2) => book2.count - book1.count)
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
