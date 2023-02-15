import { ProtoCountryStrucuture } from "../model/country";

export interface CountryApiRepoStructure {
  loadNotes(): Promise<ProtoCountryStrucuture[]>;
  getCountryByName(
    name: ProtoCountryStrucuture["name"]
  ): Promise<ProtoCountryStrucuture>;
  getCountryByRegion(
    region: ProtoCountryStrucuture["region"]
  ): Promise<ProtoCountryStrucuture>;
}

export type ResponseName = {
  name: string;
};

export class ApiCountryRepo {
  url: string;
  constructor() {
    this.url = "https://restcountries.com/v3.1";
  }
  async loadCountries(): Promise<ProtoCountryStrucuture[]> {
    const response = await fetch(this.url + "/all");
    const data = await response.json();
    return data;
  }

  async getCountryByName(name: ResponseName): Promise<ProtoCountryStrucuture> {
    const response = await fetch(this.url + "/name/" + name);
    const data = await response.json();
    return data;
  }

  async getCountryByRegion(
    region: ProtoCountryStrucuture["region"]
  ): Promise<ProtoCountryStrucuture> {
    const response = await fetch(this.url + "/region/" + region);
    const data = await response.json();
    return data;
  }
}
