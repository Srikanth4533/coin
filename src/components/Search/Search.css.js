import { DebounceInput } from "react-debounce-input";
import {Search} from '@styled-icons/boxicons-regular/Search'
import styled from "styled-components";



export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.tertiary};
  padding: 10px 12px;
  border-radius: 12px;

  @media (max-width: 767px) {
    padding:6px 8px;
  }
`
export const Input = styled(DebounceInput)`
  background: ${props => props.theme.tertiary};
  border: none;
  font-size: 1rem;
  color: ${props => props.theme.mainFont};
  padding-left: 8px;
  width: 240px;
  font-weight: 500;
  &::placeholder {
    color: ${props => props.theme.mainFont};
    font-size: 1.1rem;
  }
  &:focus {
    outline: none;
  }

  @media (max-width:900px) {
    width: 200px;
  }

  @media (max-width:767px) {
    width: 90px;
    padding: 0;

    &::placeholder {
      font-size: 1rem;
    }
  }
`
export const SearchImg = styled(Search)`
  @media (max-width: 767px) {
    width: 24px;
  }
`