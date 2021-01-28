const Engineer = require('../lib/Engineer');

describe("Engineer Class", () => {
    it("Returns the correct github after init", () => {
      expect(new Engineer("Lia", "789", "example3@gmail.com", "Clatrobe00").getGithub()).toBe("https://github.com/Clatrobe00");
    });
  
    it("Returns the correct role after init", () => {
      expect(new Engineer("Lia", "789", "example3@gmail.com", "Clatrobe00").getRole()).toBe("Engineer")
    });
  });