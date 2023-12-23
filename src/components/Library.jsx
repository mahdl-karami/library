import styled from "styled-components";
const LibraryDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
import Books from "./Books";
import Favorites from "./Favorites";
export default function Library({likeHandler, books}) {
  return (
    <LibraryDiv>
      <Books likeHandler={likeHandler} books={books} />
      <Favorites />
    </LibraryDiv>
  )
}
