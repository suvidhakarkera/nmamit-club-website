const clubs = [
  { name: "clicz", image: "photos/Logo/clicz.jpg", link: "clubdetails.html?club=clicz" },
  { name: "taaleem", image: "photos/Logo/taaleem.jpg", link: "clubdetails.html?club=taaleem" },
  { name: "cope", image: "photos/Logo/cope.jpg", link: "clubdetails.html?club=cope" },
  { name: "aura", image: "photos/Logo/aura.jpg", link: "clubdetails.html?club=aura" },
  { name: "acm", image: "photos/Logo/acm.jpg", link: "clubdetails.html?club=acm" },
  { name: "hackerearth hub", image: "photos/Logo/hackerearth.jpg", link: "clubdetails.html?club=hackerearth" },
  { name: "greymatter", image: "photos/Logo/greymatter.jpg", link: "clubdetails.html?club=greymatter" },
  { name: "kalaasangama", image: "photos/Logo/kalaasangama.jpg", link: "clubdetails.html?club=kalaasangama" },
  { name: "stereo", image: "photos/Logo/stereo.jpg", link: "clubdetails.html?club=stereo" },
  { name: "nss", image: "photos/Logo/nss.jpg", link: "clubdetails.html?club=nss" },
  { name: "ncc", image: "photos/Logo/ncc.jpg", link: "clubdetails.html?club=ncc" },
  { name: "tudar", image: "photos/Logo/tudar.jpg", link: "clubdetails.html?club=tudar" },
  { name: "yujforlife", image: "photos/Logo/yujforlife.jpg", link: "clubdetails.html?club=yujforlife" },
  { name: "kalanjali", image: "photos/Logo/kalanjali.jpg", link: "clubdetails.html?club=kalanjali" },
  { name: "aero", image: "photos/Logo/aero.jpg", link: "clubdetails.html?club=aero" },
  { name: "isiri", image: "photos/Logo/isiri.jpg", link: "clubdetails.html?club=isiri" },
  { name: "rachana", image: "photos/Logo/rachana.jpg", link: "clubdetails.html?club=rachana" },
  { name: "authorcraft", image: "photos/Logo/authocraft.jpg", link: "clubdetails.html?club=authorcraft" },
  { name: "annadaana", image: "photos/Logo/annadaana.jpg", link: "clubdetails.html?club=annadaana" },
  { name: "finiteloop", image: "photos/Logo/finiteloop.jpg", link: "clubdetails.html?club=finiteloop" },
  { name: "saca", image: "photos/Logo/saca.jpg", link: "clubdetails.html?club=saca" },
  { name: "samvaada", image: "photos/Logo/samvaada.jpg", link: "clubdetails.html?club=samvaada" },
  { name: "yrc", image: "photos/Logo/yrc.jpg", link: "clubdetails.html?club=yrc" },
  { name: "csi", image: "photos/Logo/csi.jpg", link: "clubdetails.html?club=csi" },
  { name: "ieee", image: "photos/Logo/ieee.jpg", link: "clubdetails.html?club=ieee" }
];


const carouselTrack = document.getElementById("carouselTrack");
const searchBar = document.getElementById("searchBar");
const noResultsMessage = document.getElementById("noResultsMessage");

function renderClubs(filteredClubs) {
  carouselTrack.innerHTML = "";
  if (filteredClubs.length === 0) {
    noResultsMessage.style.display = "block";
  } else {
    noResultsMessage.style.display = "none";
    filteredClubs.forEach((club) => {
      const card = document.createElement("div");
      card.className = "club-card";
      card.innerHTML = `
        <img src="${club.image}" alt="${club.name}" />
        <h3>${club.name}</h3>
        <a href="${club.link}">View Details</a>
      `;
      carouselTrack.appendChild(card);
    });
  }
}

searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(query)
  );
  renderClubs(filteredClubs);
});

renderClubs(clubs);

// Carousel scrolling
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

prevBtn.addEventListener("click", () => {
  document.querySelector(".carousel-inner").scrollBy({ left: -300, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  document.querySelector(".carousel-inner").scrollBy({ left: 300, behavior: "smooth" });
});
