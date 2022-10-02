import './search-box.styles.css';
import { ChangeEventHandler } from 'react';
type SearchBoxProps = {
  className : string;
  placeholder : string;
  onChangeHandler : ChangeEventHandler<HTMLInputElement>
  
}
// const SearchBox = ({className, placeholder, onChangeHandler } :SearchBoxProps) => (
  const SearchBox = ({className, placeholder, onChangeHandler } :SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={e => onChangeHandler}
  />
) ;

export default SearchBox;
