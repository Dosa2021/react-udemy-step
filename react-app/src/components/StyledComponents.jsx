import styled from 'styled-components'

export const StyledComponents = () => {
  return (
    <Container>
      <p>StyledComponents</p>
      <button>button</button>
    </Container>
  )
}

const Container = styled.div`
  border: solid 2px green;
  border-radius: 20px;
`