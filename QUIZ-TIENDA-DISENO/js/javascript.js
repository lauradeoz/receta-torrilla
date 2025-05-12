const quizContainer = document.getElementById("quiz");
const btnReiniciar = document.getElementById("reiniciar");

const preguntas = [
  {
    texto: "¿Qué paleta prefieres?",
    opciones: [
      { texto: "Colores pastel", valor: "minimal", img: "img/pastel.jpg" },
      { texto: "Colores intensos", valor: "popart", img: "img/popart.jpg" },
      { texto: "Neutros con dorado", valor: "elegante", img: "img/elegante.jpg" },
    ],
  },
  {
    texto: "¿Qué estilo de tipografía te atrae más?",
    opciones: [
      { texto: "Sans serif moderno", valor: "minimal", img: "img/sans.jpg" },
      { texto: "Handwritten / Brush", valor: "popart", img: "img/handwritten.jpg" },
      { texto: "Serif clásica", valor: "elegante", img: "img/serif.jpg" },
    ],
  },
  {
    texto: "¿Cuál sería tu diseño soñado?",
    opciones: [
      { texto: "Diseño de app limpia", valor: "minimal", img: "img/app.jpg" },
      { texto: "Portada de revista excéntrica", valor: "popart", img: "img/revista.jpg" },
      { texto: "Identidad de marca de lujo", valor: "elegante", img: "img/lujo.jpg" },
    ],
  }
];

let respuestas = [];
let preguntaActual = 0;

function mostrarPregunta() {
  const p = preguntas[preguntaActual];
  quizContainer.innerHTML = `
    <div class="pregunta" data-aos="fade-up">${p.texto}</div>
    <div class="opciones">
      ${p.opciones
        .map(
          (op) => `
        <div class="opcion" data-valor="${op.valor}" data-aos="zoom-in">
          <img src="${op.img}" alt="${op.texto}" />
          <span>${op.texto}</span>
        </div>`
        )
        .join("")}
    </div>
  `;

  document.querySelectorAll(".opcion").forEach((btn) =>
    btn.addEventListener("click", () => {
      respuestas.push(btn.getAttribute("data-valor"));
      preguntaActual++;
      if (preguntaActual < preguntas.length) {
        mostrarPregunta();
        AOS.refresh();
      } else {
        mostrarResultado();
      }
    })
  );
}

function mostrarResultado() {
  const conteo = respuestas.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  const estiloGanador = Object.keys(conteo).reduce((a, b) =>
    conteo[a] > conteo[b] ? a : b
  );

  const textos = {
    minimal: "Tu estilo es MINIMALISTA: limpio, claro y moderno.",
    popart: "Tu estilo es POP ART: atrevido, colorido y expresivo.",
    elegante: "Tu estilo es ELEGANTE: sofisticado, con clase y atemporal."
  };

  quizContainer.innerHTML = `<div class="resultado">${textos[estiloGanador]}</div>`;
  btnReiniciar.classList.remove("hidden");
}

btnReiniciar.addEventListener("click", () => {
  respuestas = [];
  preguntaActual = 0;
  btnReiniciar.classList.add("hidden");
  mostrarPregunta();
});

mostrarPregunta(); // iniciar el quiz
