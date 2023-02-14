import { ApiCountryRepo } from "./api.country.repo";

describe("Given a class to build api methods", () => {
  describe("When the clas is instaciate", () => {
    let repo: ApiCountryRepo;
    beforeEach(() => {
      repo = new ApiCountryRepo();
    });

    test("Then should called its methods", () => {
      expect(repo).toBeInstanceOf(ApiCountryRepo);
    });
  });
});
