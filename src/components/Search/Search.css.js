import styled from 'styled-components'
import Search  from '@styled-icons/evaicons-outline/SearchOutline'
import { DebounceInput } from 'react-debounce-input'
import { screenSizeWidth } from 'utils'

export const Input = styled(DebounceInput)`
  background: ${(props) => props.theme.tertiary};
  color: inherit;
  width: 140px;
  border: none;
  border-radius: 10px;
  padding-left: 36px;
  padding-top: 13px;
  padding-bottom: 11px;
  &::placeholder {
    color: inherit;
    font-size: 14px;
  }
  &:focus {
    outline: none;
  }

  @media (min-width: 330px) {
    width: 175px;
  }

  @media (min-width: 768px) {
    padding-left: 56px;
    padding-top: 14px;
    padding-bottom: 12px;
    font-size: 1.1rem;
    &::placeholder {
      font-size: 1.1rem;
    }
  }

  @media ${screenSizeWidth.mobileL} {
    width: 250px;
  }

  @media ${screenSizeWidth.desktopM} {
    width: 350px;
  }
`

export const SearchList = styled.div`
  position: absolute;
  background: ${(props) => props.theme.tertiary};
  color: inherit;
  padding: 0px 20px 0px 20px;
  margin-left: 32px;
  font-size: 12px;
  z-index: 4004;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-left: 42px;
  }
`

export const SearchListItem = styled.div`
  padding: 2px 0px;
  z-index: 4005;
  &:hover {
    background: ${(props) => props.theme.primary};
  }

  user-select: none;
`
