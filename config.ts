import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.ebay.com/develop/guides/",
  match: "https://developer.ebay.com/develop/guides/**",
  maxPagesToCrawl: 500,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
