const Engineer = require('../lib/Intern');

describe("Manager Class", () => {
    it("Returns the correct role after init", () => {
      expect(new Engineer("Lia", "789", "example3@gmail.com", "Clatrobe00").getGithub()).toBe("Clatrobe00");
    });
  
    it("stores employee variables in the correct place", () => {
      expect(new Engineer("Lia", "789", "example3@gmail.com", "Clatrobe00").getRole()).toBe("Engineer")
    });
  });