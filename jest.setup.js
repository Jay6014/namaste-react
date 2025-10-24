// Extend Jest matchers
import "@testing-library/jest-dom";

// Fix for TextEncoder/TextDecoder missing in Node 18+
if (typeof global.TextEncoder === "undefined") {
  const { TextEncoder, TextDecoder } = require("util");
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}
