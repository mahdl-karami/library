import styled from "styled-components";
const Head = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1.2rem;
  background: #2e2e2e;
  border-radius: 10px;
  a{
    color: #18CD0C  ;
    text-decoration: none;
    font-weight: 500;
    &:hover{
      color: #15b10aa6 ;
    }
  }
`;
const Developer = styled.p`
  font-size: 1.2rem;
`;
export default function Header() {
  return (
    <Head>
      <h1>Book App</h1>
      <span>
        <Developer>
          Developed By{" "}
          <a href="https://github.com/mahdl-karami" target="_blank" rel="noreferrer">
            Mahdl-Karami
          </a>
        </Developer>
      </span>
    </Head>
  );
}
