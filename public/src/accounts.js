function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  const result = accounts.map((account) => account);
  result.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1
  );
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let book in books) {
    const found = books[book].borrows.find(
      (borrowed) => borrowed.id === account.id
    );
    if (found) {
      total++;
    }
  }
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  for (let bookCheck in books) {
    if (books[bookCheck].borrows[0].id === account.id) {
      if (books[bookCheck].borrows[0].returned === false) {
        const bookResult = books[bookCheck];
        for (let authorCheck in authors) {
          if (authors[authorCheck].id === bookResult.authorId) {
            bookResult.author = authors[authorCheck];
            result.push(bookResult);
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
