import React, { useState } from "react"

export default function Search({ productData, onSearch }) {
  const [searchValue, setSearchValue] = useState("")

  const filterSearch = (e) => {
    setSearchValue(e.target.value)
    const rgx = new RegExp(e.target.value, "i")
    let filteredProductData = productData.filter((item) => {
      if (rgx.test(item.title)) {
        return true
      } else {
        return false
      }
    })

    onSearch(filteredProductData)
  }

  return (
    <div className="nav_search">
      <span>Поиск</span>
      <input
        type="text"
        value={searchValue}
        onChange={filterSearch}
        className="nav_search_text"
      />
    </div>
  )
}
