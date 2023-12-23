import styled from "styled-components";
const BooksList = styled.div`
  width: 69%;
`;
const Book = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  background: #2e2e2e;
  border-radius: 10px;
  overflow: hidden;
`;
const BookImage = styled.img`
  width: 10%;
  padding: 0.5rem;
  border-radius: 15px;
`;
const BookInfo = styled.span`
  width: 85%;
  padding: 0 1.5rem;
  line-height: 2;
`;
const BookLike = styled.i`
  width: 5%;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #19cd0cd8;
    transform: scale(1.2);
    transform-origin: 20%;
  }
`;
const Title = styled.a`
  color: inherit;
  text-decoration: none;
  h3 {
    display: inline;
  }
  h3:hover {
    opacity: 90%;
  }
`;
const Author = styled.p``;
const Info = styled.p``;
export default function Books({likeHandler , books}) {
  return (
    <BooksList>
      {books.map(({ id, author, image, language, pages, title, link }) => (
        <Book key={id}>
          <BookImage src={`/src/assets/${image}`}></BookImage>
          <BookInfo>
            <Title href={link} target="_blank">
              <h3>{title}</h3>
            </Title>
            <Author>{author}</Author>
            <Info>
              {language} {pages} Pages
            </Info>
          </BookInfo>
          <BookLike className="fa fa-heart" onClick={()=> likeHandler(id)}></BookLike>
        </Book>
      ))}
    </BooksList>
  );
}