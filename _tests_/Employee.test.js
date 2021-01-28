const Employee = require('../lib/Employee');

describe("Employee Class", () => {
    it("Returns the correct name after init", () => {
      expect(new Employee("Dave", "000", "example00@gmail.com").getName()).toBe("Dave");
    });
  
    it("Returns the correct id after init", () => {
      expect(new Employee("Dave", "000", "example00@gmail.com").getId()).toBe("000")
    });

    it("Returns the correct email after init", () => {
        expect(new Employee("Dave", "000", "example00@gmail.com").getEmail()).toBe("example00@gmail.com")
    });
    
    it("Returns the correct role after init", () => {
        expect(new Employee("Dave", "000", "example00@gmail.com").getRole()).toBe("Employee")
    });
  });