import styled from "styled-components";
const LibraryDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
import Books from "./Books";
import Favorites from "./Favorites";
export default function Library({ likeHandler, visibleBooks }) {
  return (
    <LibraryDiv>
      <Books likeHandler={likeHandler} visibleBooks={visibleBooks} />
      <Favorites />
    </LibraryDiv>
  );
}
