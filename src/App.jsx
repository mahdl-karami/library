import { useState } from "react";
import { books } from "./constants/mockData";
import Header from "./components/Header";
import Library from "./components/Library";
import Search from "./components/Search";

export default function App() {
  // set states
  const [favorites, setfavorites] = useState([]);
  // set functions
  function SearchSubmit(e) {
    e.preventDefault();
    console.log(e.target.children[0].value);
    // e.target.children[0].value = "";
  }
  function likeHandler(id) {
    setfavorites([...favorites , (books.filter((book)=> book.id == id)[0])]);
    console.log(favorites)
  }
  return (
    <>
      <Header />
      <Search SearchSubmit={SearchSubmit} />
      <Library likeHandler={likeHandler} books={books} />
    </>
  );
}
