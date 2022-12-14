import styled from "styled-components";


export const ChartContainer = styled.div`
  position: relative;
  width: ${props => props.width ? props.width : '48.5%'};
  background: ${props => props.theme.secondary};
  padding-bottom: 25%;
  border-radius: 20px;

  @media (max-width: 899px) {
    padding-bottom: 52%;
  }
`
export const ChartWrap = styled.div`
  margin-top: 7%;
  margin-bottom: 4%;
  width: 82%;
`
export const ChartContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`