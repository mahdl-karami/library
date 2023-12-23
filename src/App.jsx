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
      e.target.children[0].value = "";
      return;
    }
    const newBooks = books.filter((book) => book.title.toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase()));
    setVisibleBooks(newBooks);
  }
  function likeHandler(id) {
    const likedItem = visibleBooks.filter((book) => book.id == id)[0];
    if (favorites.includes(likedItem)) {
      setfavorites(favorites.filter((book) => book.id !== id));
      return;
    }
    setfavorites([...favorites, likedItem]);
  }
  return (
    <>
      <Header />
      <Search SearchSubmit={SearchSubmit} />
      <Library likeHandler={likeHandler} visibleBooks={visibleBooks} favorites={favorites} />
    </>
  );
}
