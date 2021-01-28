const Manager = require('../lib/Manager');

describe("Manager Class", () => {
    it("Returns the correct role after init", () => {
      expect(new Manager("Ted", "123", "example@gmail.com", "12").getRole()).toBe("Manager");
    });
  
    it("Returns the correct office after init", () => {
      expect(new Manager("Ted", "123", "example@gmail.com", "12").office).toBe("Office: 12");
    });
  });
  