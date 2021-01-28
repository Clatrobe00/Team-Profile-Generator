const Intern = require('../lib/Intern');

describe("Intern Class", () => {
    it("Returns the correct role after init", () => {
      expect(new Intern("Bill", "456", "example2@gmail.com", "MTSU").getRole()).toBe("Intern");
    });
  
    it("Returns the correct school after init", () => {
      expect(new Intern("Bill", "456", "example2@gmail.com", "MTSU").getSchool()).toBe("School: MTSU")
    });
  });