import React, { useState } from "react";
import fetchResults from "../Services/SearchExpenseService";

const SearchExpense = () => {
  const [query, setQueryParam] = useState("");
  const [results, setQueryResults] = useState([]);

  const handleInputChange = async (e) => {

    const value = e.target.value;
    setQueryParam(value);

    // if (!value.trim()) {
    //   setQueryResults([]); // Clear results if input is empty
    //   return;
    // }

    try {
      console.log("Searching for:", value);
      const response = await fetchResults(value);

      if (response.status === 200) {
        setQueryResults(response.data); // Update state with search results

        console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
      setQueryResults([]); // Ensure UI is not stuck
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange} // No need for extra arrow function
      />
      <ul>
        {
        results.length > 0 ? (
          results.map((item) => (
            <li key={item.id}>{item.expenseName || "Unnamed Expense"}</li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchExpense;
