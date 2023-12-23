import styled from "styled-components";
const LibraryDiv = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
import Books from "./Books";
import Favorites from "./Favorites";
export default function Library({ likeHandler, visibleBooks, favorites }) {
  return (
    <LibraryDiv>
      <Books likeHandler={likeHandler} visibleBooks={visibleBooks} favorites={favorites} />
      <Favorites favorites={favorites} />
    </LibraryDiv>
  );
}
