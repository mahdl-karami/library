import styled from "styled-components";
const FavoritesList = styled.div`
  width: 30%;
  height: 100px;
  background: #19cd0cd8;
  border-radius: 10px;
  padding: 1rem;
`
export default function Favorites() {
  return (
    <FavoritesList>
      <h2>Favorits</h2>
      <h4>Your favorite list is empty</h4>
    </FavoritesList>
  )
}
