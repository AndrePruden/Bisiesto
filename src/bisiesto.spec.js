import generarBisisesto from "./bisiesto.js";

describe("Bisiesto", () => {
  it("Deberia generar TRUE para un año divisible entre 400 como el 2000", () => {
    expect(generarBisisesto(2000)).toEqual(true);
  });

  it("Deberia generar TRUE para cualquier año divisible entre 400", () => {
    expect(generarBisisesto(2400)).toEqual(true);
  });

  it("Deberia generar FALSE para cualquier año divisible entre 100 pero no entre 400 como el 1900", () => {
    expect(generarBisisesto(1900)).toEqual(false);
  });

  it("Deberia generar FALSE para cualquier año divisible entre 100 pero no entre 400", () => {
    expect(generarBisisesto(2300)).toEqual(false);
  });

  it("Deberia generar TRUE para un año divisible entre 4 pero no entre 100", () => {
    expect(generarBisisesto(2008)).toEqual(true);
  });

  it("Deberia generar TRUE para cualquier año divisible entre 4 pero no entre 100", () => {
    expect(generarBisisesto(2012)).toEqual(true);
  });

  it("Deberia generar FALSE para un año que no es divisible entre 4 como el 2017", () => {
    expect(generarBisisesto(2017)).toEqual(false);
  });

  it("Deberia generar FALSE para cualquier año que no es divisible entre 4", () => {
    expect(generarBisisesto(2018)).toEqual(false);
  });

});

