function Search({ handleSearch }) {
  return (
    <form className="searchItem" onSubmit={(e) => e.preventDefault()}>
      <input type="search" placeholder="Search item" onChange={handleSearch} />
    </form>
  );
}

export default Search;
