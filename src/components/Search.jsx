import styled from "styled-components";

const Form = styled.form`
  margin: 2rem 0;
  display: flex;
`;
const SearchBar = styled.input`
  background: #ccc;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0.6rem 1.4rem;
  font-size: 1.4rem;
  color: #2e2e2e;
  &::placeholder {
    color: #2e2e2eac;
  }
`;
const SearchIcon = styled.button`
  background: transparent;
  color: #e0e0e0;
  border: none;
  font-size: 1.6rem;
  padding: 0.6rem 0.8rem;
  background: #19cd0cd8;
  border-radius: 10px;
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    background: #15b10aa6;
  }
`;
export default function Search({ SearchSubmit }) {
  return (
    <Form onSubmit={SearchSubmit}>
      <SearchBar type="text" placeholder="Search"></SearchBar>
      <SearchIcon className="fa fa-search" type="submit"></SearchIcon>
    </Form>
  );
}
