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

export const DataSelectContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 15px;
  margin-inline: auto;
  padding-block: 10px;
  background: ${props => props.theme.secondary};
  padding-inline: 8px;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 500px;
    padding-block: 15px;
  }
`
export const DataSelectItem = styled.div`
  background: ${props => props.highlight ? props.theme.barChart : props.theme.tertiary};
  padding-block: 4px;
  padding-inline: 14px;
  border-radius: 20px;
  font-size: 14px;
  user-select: none;

  @media (max-width: 400px) {
    font-size: 10px;
    padding-inline: 8px;
  }
`