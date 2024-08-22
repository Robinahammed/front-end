function handleSearch(){
    const SearchInputElement = document.getElementById("search-input-field");
    const searchInputValue = SearchInputElement.value;
    loadPhone(searchInputValue);
}
  
const loadPhone = async (searchText) => {
const res = await fetch("https://www.w3schools.com/js/js_api_fetch.asp"
);

const data = await res.json();
console.log(data);
};