export type ProtoCountryStrucuture = {
  capital: string[];
  region: string;
  coatOfArms: {
    png: string;
    svg: string;
  };
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  flags: {
    alt?: string;
    png: string;
    svg: string;
  };
  languages: {
    [key: string]: any;
  };
  maps: {
    googleMaps: string;
  };
  name: countryName;
  population: number;
};
export type countryName = {
  [key: string]: any;
};
