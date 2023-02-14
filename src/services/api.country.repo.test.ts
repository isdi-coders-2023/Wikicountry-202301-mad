import { ApiCountryRepo } from "./api.country.repo";

describe("Given a class to build api methods", () => {
  describe("When the class is instanciate", () => {
    let repo: ApiCountryRepo;
    beforeEach(() => {
      repo = new ApiCountryRepo();
    });

    test("Then should an instance of ApiCoutryRepo", () => {
      expect(repo).toBeInstanceOf(ApiCountryRepo);
    });
    test("Then loadCountry method should be a function", () => {
      expect(typeof repo.loadCountries).toBe("function");
    });
  });
});
