import { styled } from 'styled-components'


function App() {
  return (
    <S.PageWrapper>
      <S.Header>Welcome to Martina's personal website!</S.Header>
    </S.PageWrapper>
  )
}

export default App


const S = {
  PageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px dashed #f6cf6f;
  `,

  Header: styled.h1`
    color: #c1c1e5; 
    padding: 2rem;
  `
}