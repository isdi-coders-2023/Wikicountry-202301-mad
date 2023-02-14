export class ApiCountryRepo {
  url: string;
  constructor() {
    this.url = "https://restcountries.com/v3.1";
  }
  async loadCountries() {
    const response = await fetch(this.url + "/all");
    const data = await response.json();
    debugger;
    console.log(data);
  }

  async getCountryByName(country: string) {
    const response = await fetch(this.url + "/name/" + country);
    const data = await response.json();

    console.log(data);
  }

  async getCountryByRegion(region: string) {
    const response = await fetch(this.url + "/region/" + region);
    const data = await response.json();
    return data;
  }
}
