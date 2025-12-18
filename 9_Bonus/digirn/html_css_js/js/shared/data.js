export const dummyNalozi = [
  {
    id: "1",
    brojNaloga: "0ke35p1223",
    brojNarudzbe: "",
    datumNaloga: "2024-11-25",
    datumPocetka: "2024-11-26",
    vrijemePocetka: "",
    datumZavrsetka: "2024-11-28",
    vrijemeZavrsetka: "",
    narucitelj: "Komunalac",
    izvrsitelj: "Elektro servis",
    mjestoTroska: "",
    nositeljTroska: "",
    naslov: "Popravak televizora",
    opis: "",
  },
  {
    id: "2",
    brojNaloga: "junuclv1122",
    brojNarudzbe: "",
    datumNaloga: "2024-11-05",
    datumPocetka: "2024-11-07",
    vrijemePocetka: "",
    datumZavrsetka: "",
    vrijemeZavrsetka: "",
    narucitelj: "Auto ABC",
    izvrsitelj: "Elektro servis",
    mjestoTroska: "",
    nositeljTroska: "",
    naslov: "Popravak klime",
    opis: "",
  },
  {
    id: "3",
    brojNaloga: "iqfp9he1244",
    brojNarudzbe: "",
    datumNaloga: "2024-11-05",
    datumPocetka: "",
    vrijemePocetka: "",
    datumZavrsetka: "",
    vrijemeZavrsetka: "",
    narucitelj: "Alfa plin",
    izvrsitelj: "Elektro servis",
    mjestoTroska: "",
    nositeljTroska: "",
    naslov: "Popravak frižidera",
    opis: "",
  },
  {
    id: "4",
    brojNaloga: "5mziv4o1444",
    brojNarudzbe: "1444abc1iv",
    datumNaloga: "2024-10-14",
    datumPocetka: "2024-10-15",
    vrijemePocetka: "09:00",
    datumZavrsetka: "2024-10-17",
    vrijemeZavrsetka: "17:00",
    narucitelj: "Moj stan",
    izvrsitelj: "Elektro servis",
    mjestoTroska: "Odjel nabave",
    nositeljTroska: "Odjel prodaje",
    naslov: "Čišćenje filtera",
    opis: "Rastavljanje uređaja, čišćenje, sastavljanje uređaja",
  },
  {
    id: "5",
    brojNaloga: "d6v87ej5443",
    brojNarudzbe: "",
    datumNaloga: "2025-02-23",
    datumPocetka: "2025-02-25",
    vrijemePocetka: "",
    datumZavrsetka: "",
    vrijemeZavrsetka: "",
    narucitelj: "Zdrava hrana",
    izvrsitelj: "Elektro servis",
    mjestoTroska: "",
    nositeljTroska: "",
    naslov: "Zamjena grijača",
    opis: "",
  },
];

export function unosNaloga() {}

export function izmjenaNaloga(odabraniNalogId) {
  const odabraniNalogIndex = nalozi.findIndex(
    (nalog) => nalog.id === odabraniNalogId
  );

  console.log(odabraniNalogIndex);

  nalozi[odabraniNalogIndex].brojNaloga = "XXX";
}

export function brisanjenaloga() {}
