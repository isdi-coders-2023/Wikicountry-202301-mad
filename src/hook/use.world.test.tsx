/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable react-hooks/rules-of-hooks */
import { useWorld } from "./use.world";
import { ApiCountryRepo } from "../services/api.country.repo";
import userEvent from "@testing-library/user-event";
import { act, screen, render } from "@testing-library/react";

describe("Given a TestRepo Component", () => {
  let elements: HTMLElement[];
  let mockRepo: ApiCountryRepo;
  beforeEach(() => {
    mockRepo = {
      loadCountries: jest.fn(),
      getCountryByName: jest.fn(),
      getCountryByRegion: jest.fn(),
    } as unknown as ApiCountryRepo;

    const TestRepo = function () {
      const { loadCountries, getCountryByName, getCountryByRegion } =
        useWorld(mockRepo);

      return (
        <>
          <button onClick={() => loadCountries()}>Load</button>
          <button
            onClick={() => getCountryByName({ common: "", official: "" })}
          >
            By Name
          </button>
          <button onClick={() => getCountryByRegion("europa")}>
            By Region
          </button>
        </>
      );
    };

    render(<TestRepo />);
    elements = [
      screen.getAllByRole("button")[0],
      screen.getByText(/By name/i),
      screen.getByText(/By region/i),
    ];
  });
  describe("When loadCountry failed", () => {
    test("Then handle error should throw an error", () => {
      expect(elements[0]).toBeInTheDocument();
      userEvent.click(elements[0]);
      expect(mockRepo.loadCountries).toHaveBeenCalled();
    });
  });
  describe("When click on the button", () => {
    test("Then the method getCountryByNBame should be called", () => {
      expect(elements[1]).toBeInTheDocument();
      userEvent.click(elements[1]);
      expect(mockRepo.getCountryByName).toHaveBeenCalled();
    });
  });
  describe("When render the component", () => {
    test("Then the the text By Region should be in the document", () => {
      expect(elements[2]).toBeInTheDocument();
      userEvent.click(elements[2]);
      expect(mockRepo.getCountryByRegion).toHaveBeenCalled();
    });
  });
});

describe("Given a TestRepoFailing Component", () => {
  let elements: HTMLElement[];
  let spyLog: jest.SpyInstance;

  beforeEach(async () => {
    const mockRepoFail = {
      loadCountries: jest.fn().mockRejectedValue(new Error("error")),
      getCountryByName: jest.fn().mockRejectedValue(new Error("error")),
      getCountryByRegion: jest.fn().mockRejectedValue(new Error("error")),
    } as unknown as ApiCountryRepo;

    const TestRepoFailing = function () {
      const { loadCountries, getCountryByName, getCountryByRegion } =
        useWorld(mockRepoFail);

      return (
        <>
          <button onClick={() => loadCountries()}>Load</button>
          <button
            onClick={() => getCountryByName({ common: "", official: "" })}
          >
            By Name
          </button>
          <button onClick={() => getCountryByRegion("europa")}>
            By Region
          </button>
        </>
      );
    };
    await act(async () => render(<TestRepoFailing />));

    spyLog = jest.spyOn(global.console, "log");
    elements = [
      screen.getAllByRole("button")[0],
      screen.getByText(/By name/i),
      screen.getByText(/By region/i),
    ];
  });
  describe("When loadCountries failed", () => {
    test("Then handle error should throw an error", async () => {
      expect(elements[0]).toBeInTheDocument();
      await act(async () => userEvent.click(elements[0]));
      expect(spyLog).toHaveBeenCalled();
    });
  });
  describe("When getCountryByName failed", () => {
    test("Then the method getCountryByNBame should be called", async () => {
      expect(elements[1]).toBeInTheDocument();
      await act(async () => userEvent.click(elements[1]));
      expect(spyLog).toHaveBeenCalled();
    });
  });
  describe("When getCountryByRegion failed", () => {
    test("Then the the text By Region should be in the document", async () => {
      expect(elements[2]).toBeInTheDocument();
      await act(async () => userEvent.click(elements[2]));
      expect(spyLog).toHaveBeenCalled();
    });
  });
});
