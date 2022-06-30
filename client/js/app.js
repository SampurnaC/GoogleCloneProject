function getSearchValue(){
    const searchValue = inputValue.value;
    if(!searchValue){
        return
    }
    fetch(`http://localhost:3000/${searchValue}`)

    .then((response) =>  {
        if(response.ok) {
            return response.json();
        }
        else{
            const h1 = document.createElement("h1");
            h1.textContent = 'Cannot find the search'
            searchResults.append(h1)
            }
        })
        .then(appendResults).catch((error) => {
            console.log(error)
    })
}


const appendResults=(data)=>{
    data.forEach(r => {
        searchResults.append(displayLink(r.url))
        searchResults.append(displayTitle(r.search, r.url))
        searchResults.append(displayDescription(r.description))
    })
}

const displayLink=(url)=>{
    const link = document.createElement("p");
    link.textContent = `${url}`
    link.setAttribute("href", `${url}`);
    return link;
}

const displayTitle=(search, url)=>{
    const title = document.createElement("a");
    title.textContent = `${search}`
    title.setAttribute("href", `${url}`);
    return title;
}

const displayDescription=(desc)=>{
    const description = document.createElement("p");
    description.textContent = `${desc}`
    return description;

}

module.exports = {
    getSearchValue,
    appendResults,
    displayLink,
    displayTitle,
    displayDescription,
}
