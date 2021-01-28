const Intern = require('../lib/Intern');

describe("Manager Class", () => {
    it("Returns the correct role after init", () => {
      expect(new Intern("Bill", "456", "example2@gmail.com", "MTSU").getRole()).toBe("Intern");
    });
  
    it("stores employee variables in the correct place", () => {
      expect(new Intern("Bill", "456", "example2@gmail.com", "MTSU").getSchool()).toBe("School: MTSU")
    });
  });