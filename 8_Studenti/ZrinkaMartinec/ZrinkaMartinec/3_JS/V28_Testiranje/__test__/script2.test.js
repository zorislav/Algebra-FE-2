//Mock-ani servis
const userService = {
  getUser: (id) => {
    //REST API upit
    return {
      id,
      name: "Real user",
    };
  },
};
console.log(userService);

//Funkcija koju testiram
function greetUser(id, service) {
  const user = service.getUser(id);
  if (!user) return "User not found";
  return `Hello, ${user.name}`;
}

// eslint-disable-next-line no-undef
test("Greet user", () => {
  //.1. Kreiraj mock koji vraća lažnu vrijednost
  const mockService = {
    // eslint-disable-next-line no-undef
    getUser: jest.fn().mockReturnValue({ id: 1, name: "Alice" }),
  };

  const result = greetUser(1, mockService);
  // eslint-disable-next-line no-undef
  expect(result).toBe("Hello, Alice");
});

// eslint-disable-next-line no-undef
test("Returns user not found", () => {
  //.1. Kreiraj mock koji vraća lažnu vrijednost
  const mockService = {
    // eslint-disable-next-line no-undef
    getUser: jest.fn().mockReturnValue(null),
  };

  const result = greetUser(99, mockService);

  // eslint-disable-next-line no-undef
  expect(result).toBe("User not found");
});
