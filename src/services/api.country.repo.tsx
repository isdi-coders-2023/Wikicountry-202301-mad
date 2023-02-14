export class ApiCountryRepo {
  url: string;
  constructor() {
    this.url = "https://restcountries.com/v3.1";
  }
  async loadCountries() {
    const response = await fetch(this.url + "/all");
    const data = await response.json();
    console.log(data);
  }

  async getCountryByName(name: string) {
    const response = await fetch(this.url + "/name/" + name);
    debugger;
    const data = await response.json();

    console.log(data);
  }
}
