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
    alt: string;
    png: string;
    svg: string;
  };
  languages: {
    [key: string]: string;
  };
  maps: {
    googleMaps: string;
  };
  name: {
    common: string;
    official: string;
  };
  population: number;
};
