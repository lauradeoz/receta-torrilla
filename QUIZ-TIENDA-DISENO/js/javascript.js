const quizContainer = document.getElementById("quiz");
const btnReiniciar = document.getElementById("reiniciar");

const preguntas = [
  {
    texto: "¿Qué paleta prefieres?",
    opciones: [
      { texto: "Colores pastel", valor: "minimal", img: "img/pastel.jpg" },
      { texto: "Colores intensos", valor: "popart", img: "img/popart.jpg" },
      { texto: "Neutros con dorado", valor: "elegante", img: "img/elegante.jpg" },
    ]
  },

  {
    texto: "¿Qué estilo de tipografía te atrae más?",
    opciones: [
      { texto: "Sans serif moderno", valor: "minimal", img: "img/sans.jpg" },
      { texto: "Handwritten / Brush", valor: "popart", img: "img/handwritten.jpg" },
      { texto: "Serif clásica", valor: "elegante", img: "img/serif.jpg" },
    ]
  },

  {
    texto: "¿Qué composición te reprensenta mejor?",
    opciones: [
      { texto: "Mucho espacio en blanco", valor: "minimal", img: "img/blanco.jpg" },
      { texto: "Elementos apilados y grandes", valor: "popart", img: "img/apilados.jpg" },
      { texto: "Diseño centrado y simétrico", valor: "elegante", img: "img/centrado.jpg" },
    ]
  },
  {
   texto: "¿Qué estilo de fotografía te atrae más?",
    opciones: [
      { texto: "Luz natural y fondos neutros", valor: "minimal", img: "img/natural.jpg" },
     { texto: "Colores saturados y ángulos extremos", valor: "popart", img: "img/angulo.jpg" },
      { texto: "Tonos cálidos, detalles cuidados", valor: "elegante", img: "img/detalle.jpg" },
   ]
},
{
    texto: "¿Qué textura te atrae más?",
    opciones: [
      { texto: "Superficies lisas y planas", valor: "minimal", img: "img/lisa.jpg" },
      { texto: "Texturas visuales con puntos y patrones", valor: "popart", img: "img/patrones.jpg" },
      { texto: "Mármol, terciopelo o detalles decorativos", valor: "elegante",img: "img/terciopelo.jpg" }
    ]
  },
   {
    texto: "¿Qué sensación quieres que transmita tu diseño?",
    opciones: [
      { texto: "Claridad y orden" ,  valor: "minimal" , img: "img/claridad.jpg"},
      { texto: "Diversión y rebeldía", valor: "popart" , img: "img/diversion.jpg"},
      { texto: "Lujo y distinción", valor: "elegante" , img: "img/lujox2.jpg" }
    ]
  },
  {
  texto: "¿Qué forma geométrica te representa mejor?",
  opciones: [
    { texto: "Rectángulo o cuadrado", valor: "minimal", img: "img/cuadrado.jpg" },
    { texto: "Estrella o rayo", valor: "popart" , img: "img/estrella.jpg"},
    { texto: "Círculo con ornamentos", valor: "elegante", img: "img/circulo.jpg" }
  ]
}
//   {
//     texto: "¿Cuál sería tu diseño soñado?",
//     opciones: [
//       { texto: "Diseño de app limpia", valor: "minimal", img: "img/app.jpg" },
//       { texto: "Portada de revista excéntrica", valor: "popart", img: "img/revista.jpg" },
//       { texto: "Identidad de marca de lujo", valor: "elegante", img: "img/lujo.jpg" },
//     ]
//   }
]

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
  `

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
  )
}

function mostrarResultado() {
  const conteo = respuestas.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  const estiloGanador = Object.keys(conteo).reduce((a, b) =>
    conteo[a] > conteo[b] ? a : b
  )

  const textos = {
    minimal: "Tu estilo es MINIMALISTA: limpio, claro y moderno.",
    popart: "Tu estilo es POP ART: atrevido, colorido y expresivo.",
    elegante: "Tu estilo es ELEGANTE: sofisticado, con clase y atemporal."
  }

  quizContainer.innerHTML = `<div class="resultado">${textos[estiloGanador]}</div>`;
  btnReiniciar.classList.remove("hidden");
}

btnReiniciar.addEventListener("click", () => {
  respuestas = [];
  preguntaActual = 0;
  btnReiniciar.classList.add("hidden");
  mostrarPregunta();
})

mostrarPregunta();
