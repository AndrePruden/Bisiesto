import generarBisisesto from "./bisiesto.js";

describe("Bisiesto", () => {
  it("Deberia generar TRUE para un año divisible entre 400 como el 2000", () => {
    expect(generarBisisesto(2000)).toEqual(true);
  });

  it("Deberia generar TRUE para cuqluier año divisible entre 400", () => {
    expect(generarBisisesto(2400)).toEqual(true);
  });

});

