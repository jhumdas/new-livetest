import React from "react";
import s from "../images/iconamoon_search-thin.png";
import { useState } from "react";
import { useMemo } from "react";


let data = ["London", "America", "India", "Nepals", "Srilanka"];

function SearchableDropdown() {
  const [search, setSearch] = useState("");
  const [searchDataShow, setSearchDataShow] = useState(false);

  const filterData = useMemo(() => {
    return data.filter((item)=> JSON.stringify(item).toLowerCase().includes(search.toLowerCase()) );
  }, [search]);
  return (
    <div className="inputBox">
      <input
        type="text"
        placeholder="London"
        className="location_name"
        value={search}
        onChange={(val) => {
          setSearchDataShow(true);
          setSearch(val.target.value);
        }}
      />
      <img src={s} />
      {searchDataShow && (
        <>
        <div style={{height:"100vh",width:"100%", position:"absolute",zIndex:"5"}} onClick={()=>setSearchDataShow(false)}/>
        <div className="searchble_dropdown">
          <ul>

            {filterData.length ===0 && <li>No Data Found</li>}
            {filterData.map((item) => {
              return <li style={{ cursor: "pointer" }}>{item}</li>;
            })}
          </ul>
        </div>
        </>
      )}
    </div>
  );
}

export default SearchableDropdown;
