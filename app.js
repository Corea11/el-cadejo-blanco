const cajetasData = [
  {
    id: "cajeta-leche",
    nombre: "Cajeta de Leche",
    origen: "Masaya y Granada",
    imagen: "img/imgcajeta-leche.jpg",
    categorias: ["tradicional", "cero", "vegana"],
    resumen: "El emblema de la dulcería tradicional de Masaya, suave, cremosa y con el aroma inconfundible de la canela en raja.",
    historia: "Originaria de los talleres artesanales de Masaya y Monimbó, la cajeta de leche nació del mestizaje culinario colonial y las manos laboriosas de las dulceras tradicionales. Es infaltable en las fiestas patronales de San Jerónimo y en las tardes familiares nicaragüenses.",
    preparacion: "Se cocina leche fresca entera a fuego lento en perol de cobre con azúcar, canela en raja y un toque de vainilla, moviendo constantemente con paleta de madera hasta alcanzar el 'punto de bola' antes de moldearla en medallas.",
    inclusion: "Disponible en versión 'Cadejo Cero' endulzada con estevia natural para personas diabéticas, y en versión 'Cadejo Vegana' elaborada con leche de almendras o coco para intolerantes a la lactosa."
  },
  {
    id: "cajeta-coco",
    nombre: "Cajeta de Coco",
    origen: "Costa Caribe y Masaya",
    imagen: "img/imgcajeta-coco.jpg",
    categorias: ["tradicional", "cero", "vegana"],
    resumen: "Textura jugosa de coco rallado tierno fusionado con dulce de rapadura o azúcar natural.",
    historia: "Representa el puente gastronómico entre el Pacífico y nuestra Costa Caribe nicaragüense. El aprovechamiento artesanal del coco rallado dio vida a este bocadillo energético que acompañaba a los viajeros de antaño.",
    preparacion: "Se ralla coco fresco sazón, se cocina con su propia agua, canela y dulce hasta que el almíbar carameliza suavemente las hebras de coco, formando discos compactos y aromáticos.",
    inclusion: "Naturalmente libre de lactosa (100% apta para línea Cadejo Vegana) y disponible en línea 'Cadejo Cero' sin azúcar añadida."
  },
  {
    id: "cajeta-coco-rosada",
    nombre: "Cajeta de Coco Rosada",
    origen: "Masaya y León",
    imagen: "img/imgcajeta-coco-rosada.jpg",
    categorias: ["tradicional", "vegana"],
    resumen: "La alegría visual de las purísimas y ferias tradicionales, con su característico tono rosado festivo.",
    historia: "Ícono de las celebraciones de La Purísima Concepción de María en diciembre. Su vibrante color rosado simboliza la fiesta, la generosidad del 'brindis' nicaragüense y la infancia en los barrios tradicionales.",
    preparacion: "Elaborada con coco rallado fino cocido en almíbar aromático de clavo de olor y canela, teñido tradicionalmente con colorante vegetal natural antes de prensarse en moldes redondos.",
    inclusion: "Elaborada sin lácteos de origen animal, ideal para personas intolerantes a la lactosa dentro de nuestra línea Cadejo Vegana."
  },
  {
    id: "melcocha",
    nombre: "Melcocha Artesanal",
    origen: "Masaya y Carazo",
    imagen: "img/imgmelcocha.jpg",
    categorias: ["tradicional", "vegana"],
    resumen: "Dulce de caña batido a mano hasta lograr una textura porosa, ligera y crujiente que se deshace en el paladar.",
    historia: "Una de las técnicas más antiguas de los trapiches nicaragüenses. El estirado manual de la miel caliente sobre horcones de madera es todo un espectáculo artesanal heredado de generación en generación.",
    preparacion: "Se hierve miel de caña pura hasta un punto alto de caramelización; luego se vierte sobre piedra fría y se estira y dobla repetidamente con las manos enharinadas hasta que incorpora aire y adquiere su tono dorado claro.",
    inclusion: "Producto 100% libre de lácteos y gluten, elaborado con miel de caña pura sin aditivos artificiales."
  },
  {
    id: "gofio",
    nombre: "Gofio de Pinol y Especias",
    origen: "León y Masaya",
    imagen: "img/imggofio.jpg",
    categorias: ["tradicional", "cero", "vegana"],
    resumen: "Herencia directa del maíz ancestral tostado, perfumado con jengibre, anís y pimienta gorda.",
    historia: "El gofio conecta directamente con nuestras raíces indígenas precolombinas basadas en el maíz. Es el dulce protagonista de la Gritería cada 7 de diciembre, entregado como símbolo de devoción y compartir comunitario.",
    preparacion: "Se tuesta maíz blanco hasta convertirlo en pinol fino, luego se mezcla con miel de dulce de rapadura aromatizada con jengibre rallado, anís y canela, amasando en caliente y cortando en rombos o medallas.",
    inclusion: "Naturalmente vegano y libre de gluten. Contamos con versión 'Cadejo Cero' formulada con extracto de estevia y fibra natural."
  },
  {
    id: "coyolito",
    nombre: "Cajeta de Coyolito",
    origen: "Rivas y Granada",
    imagen: "img/imgcoyolito.jpg",
    categorias: ["tradicional", "vegana"],
    resumen: "Combinación intensa de dulce de atado oscuro con semillas crocantes tostadas.",
    historia: "Inspirada en los frutos de las palmeras de coyol del istmo de Rivas y las costas del Gran Lago Cocibolca, esta cajeta destaca por el contraste entre el dulzor profundo de la rapadura y el toque tostado de sus semillas.",
    preparacion: "Se funde dulce de rapadura artesanal con un toque de cacao y semillas tostadas (maní o coyol), batiendo en caliente hasta lograr una pasta firme y brillante.",
    inclusion: "Libre de lácteos (Línea Cadejo Vegana) y rica en grasas saludables provenientes de semillas naturales."
  },
  {
    id: "ayote-en-miel",
    nombre: "Ayote en Miel",
    origen: "Todo el territorio nicaragüense",
    imagen: "img/imgayote-en-miel.jpg",
    categorias: ["tradicional", "cero", "vegana"],
    resumen: "Trozos tiernos de ayote sazón confitados lentamente en miel de rapadura, clavo de olor y pimienta gorda.",
    historia: "Un postre ancestral mesoamericano que celebra la cosecha de la milpa. En los hogares nicaragüenses representa la cocina de abuela, el calor del fogón y el aprovechamiento integral de los frutos de la tierra.",
    preparacion: "Se corta el ayote sazón en trozos con su cáscara para mantener firmeza y se cocina a fuego muy bajo junto con atado de dulce, hojas de higo, canela y clavo de olor hasta que la miel penetra por completo.",
    inclusion: "Disponible en presentación tradicional y en versión 'Cadejo Cero' endulzada con alternativas aptas para personas con diabetes."
  }
];

const catalogGrid = document.getElementById("catalog-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("product-modal");
const closeModalBtn = document.getElementById("close-modal");
const closeModalBg = document.getElementById("close-modal-bg");

function renderCatalog(filter = "todos") {
  catalogGrid.innerHTML = "";

  const filtered = filter === "todos"
    ? cajetasData
    : cajetasData.filter(item => item.categorias.includes(filter));

  filtered.forEach(cajeta => {
    const tagsHtml = cajeta.categorias.map(cat => {
      if (cat === "tradicional") return `<span class="tag tag-tradicional">Tradicional</span>`;
      if (cat === "cero") return `<span class="tag tag-cero">🌿 Cadejo Cero</span>`;
      if (cat === "vegana") return `<span class="tag tag-vegana">🥥 Cadejo Vegana</span>`;
      return "";
    }).join("");

    const card = document.createElement("article");
    card.className = "cajeta-card";
    card.innerHTML = `
      <div>
        <div class="cajeta-img-wrapper">
          <img src="${cajeta.imagen}" alt="${cajeta.nombre} - El Cadejo Blanco" loading="lazy">
        </div>
        <div class="card-origin">📍 ${cajeta.origen}</div>
        <h3>${cajeta.nombre}</h3>
        <div class="card-tags">${tagsHtml}</div>
        <p class="card-summary">${cajeta.resumen}</p>
      </div>
      <button class="btn-card" onclick="openModal('${cajeta.id}')">
        Leer Historia y Preparación →
      </button>
    `;
    catalogGrid.appendChild(card);
  });
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCatalog(btn.dataset.filter);
  });
});

function openModal(id) {
  const item = cajetasData.find(c => c.id === id);
  if (!item) return;

  window.speechSynthesis.cancel();
  document.getElementById("btn-stop-speak").hidden = true;

  const modalImg = document.getElementById("modal-img");
  modalImg.src = item.imagen;
  modalImg.alt = `${item.nombre} - El Cadejo Blanco`;

  document.getElementById("modal-origin").textContent = `Origen: ${item.origen}`;
  document.getElementById("modal-title").textContent = item.nombre;
  document.getElementById("modal-history").textContent = item.historia;
  document.getElementById("modal-prep").textContent = item.preparacion;
  document.getElementById("modal-inclusion").textContent = item.inclusion;

  const tagsHtml = item.categorias.map(cat => {
    if (cat === "tradicional") return `<span class="tag tag-tradicional">Tradicional</span>`;
    if (cat === "cero") return `<span class="tag tag-cero">🌿 Cadejo Cero (Sin Azúcar)</span>`;
    if (cat === "vegana") return `<span class="tag tag-vegana">🥥 Cadejo Vegana (Sin Lactosa)</span>`;
    return "";
  }).join("");
  document.getElementById("modal-tags").innerHTML = tagsHtml;

  const waMessage = encodeURIComponent(`Hola El Cadejo Blanco, me interesa pedir: ${item.nombre}`);
  document.getElementById("modal-whatsapp").href = `https://wa.me/+50584270399?text=${waMessage}`;

  modal.hidden = false;
}

function closeModal() {
  window.speechSynthesis.cancel();
  modal.hidden = true;
}

closeModalBtn.addEventListener("click", closeModal);
closeModalBg.addEventListener("click", closeModal);

document.getElementById("btn-speak").addEventListener("click", () => {
  window.speechSynthesis.cancel();
  const title = document.getElementById("modal-title").textContent;
  const origin = document.getElementById("modal-origin").textContent;
  const history = document.getElementById("modal-history").textContent;
  const prep = document.getElementById("modal-prep").textContent;
  const inclusion = document.getElementById("modal-inclusion").textContent;

  const utterance = new SpeechSynthesisUtterance(
    `${title}. ${origin}. Historia: ${history}. Preparación: ${prep}. Opciones inclusivas: ${inclusion}`
  );
  utterance.lang = "es-ES";
  utterance.rate = 0.95;

  const stopBtn = document.getElementById("btn-stop-speak");
  stopBtn.hidden = false;
  utterance.onend = () => { stopBtn.hidden = true; };

  window.speechSynthesis.speak(utterance);
});

document.getElementById("btn-stop-speak").addEventListener("click", () => {
  window.speechSynthesis.cancel();
  document.getElementById("btn-stop-speak").hidden = true;
});

document.getElementById("toggle-contrast").addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

renderCatalog();