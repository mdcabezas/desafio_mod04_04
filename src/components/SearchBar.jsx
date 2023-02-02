function SearchBar({ filterData }) {
  return (
    <div className="my-3">
      <input
        type="search"
        className="form-control"
        placeholder="🔍 Buscar por comuna o región..."
        onChange={filterData}
        onFocus={(e) => e.target.placeholder = ""} 
        onBlur={(e) => e.target.placeholder = "🔍 Buscar por comuna o región..."}
      />
    </div>
  );
}

export default SearchBar;
