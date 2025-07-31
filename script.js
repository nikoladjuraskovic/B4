const slike = document.querySelectorAll("img");
const tacke = document.querySelectorAll(".tacka");
const nazivi = ["Фаун са звездама", "Гитариста", "Миран живот са компотом и чашом", "Виолина", "Пиеро"];
const godine = [1955, 1956, 1957, 1958, 1959];
const opisi = ["Фаун са звездама је настао 1955. На врхунцу...", "Гитариста...", "Миран живот са компотом и чашом...", "Виолина...", "Пиеро..."];
const nazivSlike = document.querySelector("#nazivSlike");
const godinaSlike = document.querySelector("#godinaSlike");
const tekstOpisa = document.querySelector("#tekstOpisa");
let trenutna = 0;

function prikaziSliku(trenutna) {

    for (let i = 0; i < slike.length; i++) {
        slike[i].classList.remove("active"); //prethodne slike resetujemo da nisu aktivne
        tacke[i].style.backgroundColor = "gray";
        if (i === trenutna) {
            slike[i].classList.add("active");
            tacke[i].style.backgroundColor = "green";
            nazivSlike.textContent = nazivi[i];
            godinaSlike.textContent = godine[i];
            tekstOpisa.textContent = opisi[i];
        }
    }
}

function sledecaSlika() {
    trenutna = (trenutna + 1) % slike.length;
    prikaziSliku(trenutna);
}

prikaziSliku(trenutna);
setInterval(sledecaSlika, 3000);
