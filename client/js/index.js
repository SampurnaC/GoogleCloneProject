const inputValue = document.querySelector("#search");
const displayOne = document.querySelector(".displayOne");
const displayAll = document.querySelector(".displayAll");
let searchResults = document.querySelector('#search-result');

displayAll.addEventListener('click', (e) => {
    e.preventDefault();
    if(!inputValue.value){
        return;
    }
    getSearchValue(e);
    stylingSearchPage();
})

displayOne.addEventListener('click', (e) => {
    e.preventDefault();
    getRandomSearchResult(e)
})

function stylingSearchPage(){
    document.querySelector(".displayAll").style.display="none"
    document.querySelector(".displayOne").style.display="none"
    document.querySelector("img").style.height = "50px"
    document.querySelector("img").style.width = "auto"
    document.querySelector("section").style.flexDirection = "row";
    document.querySelector("section").style.justifyContent = "left"
    document.querySelector("section").style.height = "auto"
    searchResults.style.marginLeft = "9em"
    const img = document.querySelector("img");
    img.style.cursor = "pointer"
    img.addEventListener('click', () => {
        location.reload()
    })
}
