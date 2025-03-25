import axios from "axios";
import debounce from "lodash.debounce";

const fetchResults =debounce(async(searchTerm)=>{

     const API_SEARCH_EXPENSE_URL="/expenseTracker/search/";

    try {
        return await axios.get(`${API_SEARCH_EXPENSE_URL}`+`${searchTerm}`)
        
    } catch (error) {
        return await Promise.reject(error);
      }
})

export default fetchResults;