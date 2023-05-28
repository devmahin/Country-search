fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(res => prientsCountry(res))

function prientsCountry(countrys){
    const root = document.querySelector('#root')
    let htmlCode = "";

    countrys.forEach(country => {
        htmlCode +=  makeHTML(country)
    });

    root.innerHTML = htmlCode
}



function makeHTML(country){
const {name, flags} = country;
    const html = `
        <div class= "html">
            <img id="img-1" src ='${flags.png}' />
            <h3>${name.common}</h3>
        
        </div>
    `
    return html;
}


const form = document.getElementById("form")
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const text = e.target.searchBox.value;
    const searchText = text.toLowerCase();

    fetch(`https://restcountries.com/v3.1/name/${searchText}`)
    .then(res => res.json())
    .then(res => prientsCountry(res))
})