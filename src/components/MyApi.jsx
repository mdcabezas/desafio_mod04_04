import { useState, useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { cleanString } from "../utils/decodehtml";
import Spinner from "./Spinner";
import CardStation from "./CardStation";

function MyApi() {
  const [query, setQuery] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const result = async () => {
    const response = await fetch(
      "https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/"
    );
    return (await response.json()).sort(
      (a, b) => a.regionindex - b.regionindex
    );
  };

  const filterData = (e) => {
    const value = cleanString(e.target.value);
    setFilteredData(
      query
        .filter(
          (item) =>
            cleanString(item.comuna).includes(value) ||
            cleanString(item.region).includes(value)
        )
        .sort((a, b) => a.regionindex - b.regionindex)
    );
  };

  useEffect(() => {
    (async () => {
      const results = await result();
      setQuery(results);
      setFilteredData(results);
    })();
  }, []);

  return (
    <>
      <Header />
      {query.length !== 0 ? (
        <div className="container-fluid">
          <SearchBar filterData={filterData} />
          <div className="row">
            {filteredData.map((data) => (
              <CardStation key={data.key} data={data} />
            ))}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default MyApi;
