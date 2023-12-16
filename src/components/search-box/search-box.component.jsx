import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={className}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  ></input>
);

export default SearchBox;
