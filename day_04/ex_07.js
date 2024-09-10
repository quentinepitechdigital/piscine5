// J'ai trop la flemme de faire le failure to get country

function createCity(country, cityName) {
    country.push([cityName, Array()]);
}

function createHousing(country, cityName, housingName) {
    let city = getCityOfCountry(country, cityName);
    if (!city) {
        console.log("Failure to get city")
        return null;
    }

    city[1].push(housingName, []);
}

function addCharacteristics(country, cityName, housingName, ...characteristics) {
    let city = getCityOfCountry(country, cityName);
    if (!city) {
        console.log("Failure to get city")
        return null;
    }

    let housing = city.find(housing => housing[0] === housingName);
    if (!housing) {
        console.log("Failure to get city")
        return null;
    }
    housing[1].push(...characteristics);
}

function getCityOfCountry(country, cityName) {
    return country.find(city => city[0] === cityName) || null;
}

function getCharacteristicsOfHousing(country, cityName, housingName) {
    // return getCityOfCountry(country, cityName)[1].find(housing => housing[0] === housingName)[1];
    return getCityOfCountry(country, cityName).find(housing => housing[0] === housingName)[1]
}