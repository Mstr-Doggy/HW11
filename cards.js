// TASK 1: Create Data Objects

const cards = [
  {
    id: "1",
    title: "Upload Any Content",
    description: "Paste text, upload a PDF, or drop in a link. Anything works — articles, essays, lecture notes.",
    imageUrl: "https://placehold.co/600x400/d295fd/6a0dad?text=Upload+Content",
    icon: "📤",
    link: "https://placehold.co/600x400",
  },
  {
    id: "2",
    title: "AI Does the Magic",
    description: "Our powerful AI reads your content and turns it into engaging, bite-sized micro-lessons automatically.",
    imageUrl: "https://placehold.co/600x400/d295fd/6a0dad?text=AI+Magic",
    icon: "🤖",
    link: "https://placehold.co/600x400",
  },
  {
    id: "3",
    title: "Watch & Learn",
    description: "Swipe through short video lessons just like TikTok. Learn on your phone, tablet, or laptop.",
    imageUrl: "https://placehold.co/600x400/d295fd/6a0dad?text=Watch+%26+Learn",
    icon: "▶",
    link: "https://placehold.co/600x400",
  },
];



// TASK 2: Render Cards Dynamically

function renderCards(cardsArray) {
  
  const container = document.getElementById("card-container");

  container.innerHTML = "";

  cardsArray.forEach(function (cardData) {

    const card = document.createElement("div");
    card.classList.add("step-card");
    card.setAttribute("data-id", cardData.id);

    const icon = document.createElement("div");
    icon.classList.add("step-icon");
    icon.textContent = cardData.icon;

    const img = document.createElement("img");
    img.src = cardData.imageUrl;
    img.alt = cardData.title;
    img.classList.add("card-img");

    const title = document.createElement("h3");
    title.textContent = cardData.title;

    const description = document.createElement("p");
    description.textContent = cardData.description;

    const stars = document.createElement("div");
    stars.classList.add("stars");
    stars.textContent = "★★★★★";

    const link = document.createElement("a");
    link.href = cardData.link;
    link.textContent = "Learn More →";
    link.classList.add("card-link");
    link.target = "_blank"; // opens in a new tab

    card.appendChild(icon);
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(stars);
    card.appendChild(link);

    container.appendChild(card);


    // TASK 3: Add Event Listeners

    card.addEventListener("click", function () {
      // Remove highlight from all cards first
      const allCards = document.querySelectorAll(".step-card");
      allCards.forEach(function (c) {
        c.style.border = "2px solid transparent";
        c.style.boxShadow = "none";
      });

      // Add highlight to the clicked card
      card.style.border = "2px solid #6a0dad";
      card.style.boxShadow = "0 0 16px rgba(106, 13, 173, 0.35)";

      console.log(`Card selected: "${cardData.title}" (ID: ${cardData.id})`);
    });

    link.addEventListener("click", function (event) {
      event.stopPropagation(); // stop it from triggering the card click above
      console.log(`"Learn More" clicked on card: "${cardData.title}"`);
      alert(`Opening: ${cardData.title}\n\nLink: ${cardData.link}`);
    });

  });
}

// Call renderCards to show the initial cards on the page
renderCards(cards);


// TASK 4: Practice Array Methods

// REDUCE

const totalTitleCharacters = cards.reduce(function (accumulator, card) {
  return accumulator + card.title.length;
}, 0);

console.log("──────────────────────────────────────");
console.log("REDUCE — Total characters in all titles:", totalTitleCharacters);


// SORT

const sortedCards = cards.slice().sort(function (a, b) {
  if (a.title < b.title) return -1; // a comes first
  if (a.title > b.title) return 1;  // b comes first
  return 0;                          // equal, no change
});

console.log("──────────────────────────────────────");
console.log("SORT — Cards sorted alphabetically by title:");
sortedCards.forEach(function (card) {
  console.log(" •", card.title);
});


// FILTER

const keyword = "AI";

const filteredCards = cards.filter(function (card) {
  return card.description.includes(keyword);
});

console.log("──────────────────────────────────────");
console.log(`FILTER — Cards whose description contains "${keyword}":`);
filteredCards.forEach(function (card) {
  console.log(" •", card.title, "—", card.description);
});


// MAP 

const cardTitles = cards.map(function (card) {
  return card.title;
});

console.log("──────────────────────────────────────");
console.log("MAP — All card titles:", cardTitles);
console.log("──────────────────────────────────────");
