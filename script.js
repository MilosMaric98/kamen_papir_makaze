let btnStart = document.querySelector("#btnStart");

btnStart.onclick = function () {
  let unos = document.querySelector("#userInput").value.toLowerCase();
  let result = document.querySelector("#winner");
  let niz = ["kamen", "papir", "makaze"];
  let number = Math.floor(Math.random() * 3);
  if (unos == "kamen" && niz[number] == "papir") {
    result.textContent = `Korisnik je uneo kamen,
    Racunar je izabrao ${niz[number]},
    Pobednik je racunar.`;
  } else if (unos == "kamen" && niz[number] == "makaze") {
    result.textContent = `Korisnik je uneo kamen,
    Racunar je izabrao ${niz[number]},
    Pobednik je korisnik.`;
  } else if (unos == "kamen" && niz[number] == "kamen") {
    result.textContent = `Korisnik je uneo kamen,
    Racunar je izabrao ${niz[number]},
    Nereseno je.`;
  } else if (unos == "papir" && niz[number] == "kamen") {
    result.textContent = `Korisnik je uneo papir,
    Racunar je izabrao ${niz[number]},
    Pobednik je korisnik.`;
  } else if (unos == "papir" && niz[number] == "makaze") {
    result.textContent = `Korisnik je uneo papir,
    Racunar je izabrao ${niz[number]},
    Pobednik je racunar.`;
  } else if (unos == "papir" && niz[number] == "papir") {
    result.textContent = `Korisnik je uneo papir,
    Racunar je izabrao ${niz[number]},
    Nereseno je.`;
  } else if (unos == "makaze" && niz[number] == "papir") {
    result.textContent = `Korisnik je uneo makaze,
    Racunar je izabrao ${niz[number]},
    Pobednik je korisnik.`;
  } else if (unos == "makaze" && niz[number] == "kamen") {
    result.textContent = `Korisnik je uneo makaze,
    Racunar je izabrao ${niz[number]},
    Pobednik je racunar.`;
  } else if (unos == "makaze" && niz[number] == "makaze") {
    result.textContent = `Korisnik je uneo makaze,
    Racunar je izabrao ${niz[number]},
    Nereseno je.`;
  } else {
    alert("Unesi kamen, papir ili makaze");
  }
};
