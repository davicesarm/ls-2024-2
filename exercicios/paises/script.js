const response = await fetch("https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/countries.json")

const countries = await response.json()

function createFlagBox(country, countries) {
    return `
    <div class='flag'>
        <img src='https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png100px/${country.toLowerCase()}.png'>
        <p>${countries[country]}</p>
    </div>
    `
}

function insertFlagBox(countries) {
    let flagsHTML = ''
    for (const country in countries) {
        flagsHTML += createFlagBox(country, countries)
    }
    
    document.querySelector("main").innerHTML = flagsHTML
}

insertFlagBox(countries)