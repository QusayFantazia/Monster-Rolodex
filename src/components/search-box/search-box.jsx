import React from 'react';
import './search-bos.css'

export const SearchBox = ({ placeHolder, handelEvent }) => {
    return (
        <input type="search" placeHolder={placeHolder} onChange={handelEvent} />
    )
}