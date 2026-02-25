const getTheTitles = function(arr) {
    const bookName = arr.map(arr => arr.title);
    return bookName
};

const books = [
  {
    title: '1984',
    author: 'Orwell'
  },
  {
    title: 'Sherlock Holmes',
    author: 'Arthur c.d'
  }
]
// Do not edit below this line
module.exports = getTheTitles;
