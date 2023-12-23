import { useState } from "react";
import { books } from "./constants/mockData";
import Header from "./components/Header";
import Library from "./components/Library";
import Search from "./components/Search";

export default function App() {
  // set states
  const [favorites, setfavorites] = useState([]);
  const [visibleBooks, setVisibleBooks] = useState(books);
  // set functions
  function SearchSubmit(e) {
    e.preventDefault();
    const searchedValue = e.target.children[0].value;
    if (searchedValue == false) {
      setVisibleBooks(books);
      return;
    }
    const newBooks = visibleBooks.filter((book) => book.title.toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase()));
    setVisibleBooks(newBooks);
  }
  function likeHandler(id) {
    setfavorites([...favorites, visibleBooks.filter((book) => book.id == id)[0]]);
    console.log(favorites);
  }
  return (
    <>
      <Header />
      <Search SearchSubmit={SearchSubmit} />
      <Library likeHandler={likeHandler} visibleBooks={visibleBooks} />
    </>
  );
}
