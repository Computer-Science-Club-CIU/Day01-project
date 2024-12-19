import { expect } from "vitest";
import { JSDOM } from "jsdom";
import "@testing-library/jest-dom";

// Create a JSDOM instance
const dom = new JSDOM("", { url: "http://localhost/" });

// Set global variables to simulate a browser environment
global.window = dom.window as unknown as Window & typeof globalThis;
global.document = dom.window.document;
global.localStorage = dom.window.localStorage;
global.navigator = dom.window.navigator;

// Extend expect with jest-dom matchers
expect.extend(require("@testing-library/jest-dom/matchers"));
