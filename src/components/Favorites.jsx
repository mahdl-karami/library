import styled from "styled-components";
const FavoritesList = styled.div`
  position: absolute;
  right: 0;
  width: 30%;
  background: #19cd0cd8;
  border-radius: 10px;
  padding: 1rem;
`;
const Book = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  background: #118d08c1;
  border-radius: 10px;
  overflow: hidden;
`;
const BookImage = styled.img`
  width: 15%;
  padding: 0.5rem;
  border-radius: 15px;
`;
const Title = styled.h3`
  color: inherit;
  text-decoration: none;
  width: 85%;
  font-size: 1.1rem;
  font-weight: 500;
  &:hover {
    opacity: 90%;
  }
`;
export default function Favorites({ favorites }) {
  return (
    <FavoritesList>
      <h2>Favorits</h2>
      {!favorites.length && <h4>Your favorite list is empty</h4>}
      {favorites.map(({ image, title, id, link }) => (
        <Book key={id}>
          <BookImage src={`/src/assets/${image}`}></BookImage>
          <Title href={link} target="_blank">
            {title}
          </Title>
        </Book>
      ))}
    </FavoritesList>
  );
}
