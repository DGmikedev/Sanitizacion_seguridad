// jest.config.js
export default {
  testEnvironment: "node",
  transform: {},               // desactiva Babel si no lo usas
 collectCoverage: true,
 coverageReporters: ["html", "text"],
 coverageDirectory: "coverage"
};