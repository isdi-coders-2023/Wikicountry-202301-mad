import { ProtoCountryStrucuture } from "../model/country";

export const MOCK_COUNTRIES: ProtoCountryStrucuture[] = [
  {
    name: {
      common: "Iceland",
      official: "Iceland",
    },
    currencies: {
      ISK: {
        name: "Icelandic króna",
      },
    },

    capital: ["Reykjavik"],
    region: "Europe",
    languages: {
      isl: "Icelandic",
    },
    maps: {
      googleMaps: "https://goo.gl/maps/WxFWSQuc3oamNxoE6",
    },
    population: 366425,
    flags: {
      png: "https://flagcdn.com/w320/is.png",
      svg: "https://flagcdn.com/is.svg",
      alt: "The flag of Iceland has a blue field with a large white-edged red cross that extends to the edges of the field. The vertical part of this cross is offset towards the hoist side.",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/is.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/is.svg",
    },
  },
  {
    name: {
      common: "Japan",
      official: "Japan",
    },
    currencies: {
      JPY: {
        name: "Japanese yen",
      },
    },
    capital: ["Tokyo"],
    region: "Asia",
    languages: {
      jpn: "Japanese",
    },

    maps: {
      googleMaps: "https://goo.gl/maps/NGTLSCSrA8bMrvnX9",
    },
    population: 125836021,

    flags: {
      png: "https://flagcdn.com/w320/jp.png",
      svg: "https://flagcdn.com/jp.svg",
      alt: "The flag of Japan features a crimson-red circle at the center of a white field.",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/jp.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/jp.svg",
    },
  },
];
