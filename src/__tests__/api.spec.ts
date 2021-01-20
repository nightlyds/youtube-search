import axios from "axios";
import apiRequest from '../store/sagas/apiRequest'

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("API tests", () => {
    it("Success API request", async () => {
      const data = {
        0: "0",
        1: "1",
      };

      mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));

      await expect(apiRequest("react")).resolves.toEqual(data);

      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });

    it("Error API request", async () => {
      const errorMessage = "Network Error";

      mockedAxios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );

      await expect(apiRequest("react")).rejects.toThrow(errorMessage);

      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });
});
