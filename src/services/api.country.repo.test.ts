import { ProtoCountryStrucuture } from "../model/country";
import { ApiCountryRepo } from "./api.country.repo";

describe("Given a class to build api methods", () => {
  describe("When the class is instaciated", () => {
    let repo: ApiCountryRepo;
    beforeEach(() => {
      repo = new ApiCountryRepo();
    });

    test("Then loadCountries method should return an array", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
      });
      const result = await repo.loadCountries();
      expect(result).toEqual([]);
    });
    // test("Then getCountryByName should return a country", async () => {
    //   global.fetch = jest.fn().mockResolvedValue({
    //     json: jest.fn().mockResolvedValue("america"),
    //   });
    //   const r = await repo.getCountryByName('{common:'nomnre}');
    //   expect(r).toBe("america");
    // });
    test("Then getCountryByRegion should return a country", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue("america"),
      });
      const r = await repo.getCountryByRegion("america");
      expect(r).toBe("america");
    });
  });
});
