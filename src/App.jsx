import Header from "./components/Header";
import Search from "./components/Search";

export default function App() {
  // set states

  // set functions
  function SearchSubmit(e){
    e.preventDefault();
    console.log(e.target.children[0].value)
    // e.target.children[0].value = "";
  }
  return (
    <>
      <Header />
      <Search SearchSubmit={SearchSubmit} />
    </>
  )
}
