import styled from "styled-components"


export const Container = styled.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  justify-content: center;
`
export const Content = styled.div`
  width: 90%;
  margin: auto;
`
export const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.mainFont};
`
export const ChartsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 15px;
`
