import React from 'react'
import { Input, InputWrap, SearchImg } from './Search.css'

const Search = () => {
  return (
    <InputWrap>
    <SearchImg size="1.8rem" />
      <Input
        type="text"
        placeholder="Search..."
      />
    </InputWrap>
  )
}

export default Search