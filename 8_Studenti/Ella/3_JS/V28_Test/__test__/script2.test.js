// Mock-ani servis
const userService = {
  getUser: (id) => {
    // rest api upit
    return { id, name: "Real user" };
  },
};

// Funkcija koju testiram
function greetUser(id, service) {
  const user = service.getUser(id);
  if (!user) return "User not found!";
  return `Hello, $(user.name)`;
}

test("Greet user", () => {
  //1. kreiraj mock koji vraca laznu vrijednost
  const mockService = {
    getUser: jest.fn().mockReturnValue({ id: 1, name: "Alice" }),
  };

  const result = greetUser(1, mockService);

  expect(result).toBe("Hello, Alice");
});

test("Returns user not found!", () => {
  //1. kreiraj mock koji vraca laznu vrijednost
  const mockService = {
    getUser: jest.fn().mockReturnValue(null),
  };

  const result = greetUser(99, mockService);

  expect(result).toBe("User not found!");
});
