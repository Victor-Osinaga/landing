const colors = ["#000000", "#ffffff"];
const colBlock = document.querySelector("body");
let count = 0;
const updateColor = () => {
  colBlock.style = `--bg: ${colors[count]}`;
  count = count !== colors.length - 1 ? ++count : 0;
};
const changeColor = () => {
  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    updateColor();
    return;
  }

  // With View Transitions:
  const transition = document.startViewTransition(() => {
    updateColor();
  });
};
const changeColorButton = document.querySelector("#change-color");
changeColorButton.addEventListener("click", changeColor);
changeColorButton.addEventListener("keypress", changeColor)

const canvas = document.getElementById("particles-bg");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const particles = [];
const COUNT = 200;

// velocidades bien marcadas
const SPEED_LAYERS = [
  // MAS LENTO
  // { speed: 0.4, radius: 1.5, glow: 0, alpha: 0.18 }, // lento
  // { speed: 0.88, radius: 1, glow: 0, alpha: 0.35 }, // medio
  // //   { speed: 0.6, radius: 2.6, glow: 22, alpha: 0.65 }, // rapido
  // { speed: 1.4, radius: 1.4, glow: 0, alpha: 0.8 },

  // MAS RAPIDO
  { speed: 0.8, radius: 1.5, glow: 0, alpha: 0.18 }, // lento
  { speed: 1.6, radius: 1, glow: 0, alpha: 0.35 }, // medio
  //   { speed: 0.6, radius: 2.6, glow: 22, alpha: 0.65 }, // rapido
  { speed: 2.8, radius: 1.4, glow: 0, alpha: 0.8 },
];

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    // asignamos una capa clara
    this.layer = Math.floor(Math.random() * SPEED_LAYERS.length);
    const layer = SPEED_LAYERS[this.layer];

    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.speed = layer.speed;
    this.radius = layer.radius;
    this.alpha = layer.alpha;
    this.glow = layer.glow;

    this.angle = Math.random() * Math.PI * 2;
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed * 0.8;

    if (this.x < -80 || this.x > w + 80 || this.y < -80 || this.y > h + 80) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    // ctx.fillStyle = `rgba(255, 195, 95, ${this.alpha})`;
    // ctx.shadowColor = "rgba(255, 180, 80, 1)";
    // oro
    // ctx.fillStyle = `rgba(255, 215, 0, ${this.alpha})`;
    // ctx.shadowColor = "rgba(255, 215, 0, 1)";
    // blancco
    // ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    // ctx.shadowColor = "rgb(255, 255, 255)";
    // negro
    ctx.fillStyle = `rgba(0, 0, 0, ${this.alpha})`;
    ctx.shadowColor = "rgb(0, 0, 0)";

    ctx.shadowBlur = this.glow;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

for (let i = 0; i < COUNT; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();

// DOTA2___________________________________________________________

// ___________________________________________________________

// const canvas = document.getElementById("particles-bg");
// const ctx = canvas.getContext("2d");

// let w, h;
// function resize() {
//   w = canvas.width = window.innerWidth;
//   h = canvas.height = window.innerHeight;
// }
// window.addEventListener("resize", resize);
// resize();

// const particles = [];
// const COUNT = 160;

// class Particle {
//   constructor() {
//     this.reset();
//   }

//   reset() {
//     this.x = Math.random() * w;
//     this.y = Math.random() * h;
//     this.radius = Math.random() * 1.8 + 0.6;
//     this.speed = Math.random() * 0.25 + 0.1;
//     this.angle = Math.random() * Math.PI * 2;
//     this.alpha = Math.random() * 0.6 + 0.2;
//   }

//   update() {
//     this.x += Math.cos(this.angle) * this.speed;
//     this.y += Math.sin(this.angle) * this.speed;

//     if (this.x < -50 || this.x > w + 50 || this.y < -50 || this.y > h + 50) {
//       this.reset();
//     }
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = `rgba(255, 195, 95, ${this.alpha})`;
//     ctx.shadowColor = "rgba(255, 180, 80, 0.9)";
//     ctx.shadowBlur = 15;
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//   }
// }

// for (let i = 0; i < COUNT; i++) {
//   particles.push(new Particle());
// }

// function animate() {
//   ctx.clearRect(0, 0, w, h);
//   particles.forEach((p) => {
//     p.update();
//     p.draw();
//   });
//   requestAnimationFrame(animate);
// }

// animate();

//  ________________________________________________________________________________

// const canvas = document.getElementById("particles-bg");
// const ctx = canvas.getContext("2d");

// let w, h, dpr;
// function resize() {
//   dpr = window.devicePixelRatio || 1;
//   w = window.innerWidth;
//   h = window.innerHeight;

//   canvas.width = w * dpr;
//   canvas.height = h * dpr;
//   canvas.style.width = w + "px";
//   canvas.style.height = h + "px";
//   ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
// }
// window.addEventListener("resize", resize);
// resize();

// /* =========================
//    CONFIG PREMIUM
// ========================= */
// const CONFIG = {
//   COUNT: 220,
//   BASE_SPEED: 0.15,
//   FLOW_STRENGTH: 0.8,
//   GLOW: 22,
// };

// /* =========================
//    FLOW FIELD (wave motion)
// ========================= */
// function flow(x, y, t) {
//   return (
//     (Math.sin(x * 0.002 + t * 0.0004) + Math.cos(y * 0.002 + t * 0.0003)) *
//     CONFIG.FLOW_STRENGTH
//   );
// }

// /* =========================
//    PARTICLE
// ========================= */
// class Particle {
//   constructor() {
//     this.reset(true);
//   }

//   reset(initial = false) {
//     this.x = Math.random() * w;
//     this.y = Math.random() * h;
//     this.z = Math.random(); // depth
//     this.size = this.z * 2 + 0.6;
//     this.speed = CONFIG.BASE_SPEED + this.z * 0.4;
//     this.alpha = 0.15 + this.z * 0.6;

//     if (!initial) {
//       this.x = Math.random() < 0.5 ? -50 : w + 50;
//     }
//   }

//   update(t) {
//     const angle = flow(this.x, this.y, t);
//     this.x += Math.cos(angle) * this.speed;
//     this.y += Math.sin(angle) * this.speed * 0.6;

//     if (
//       this.x < -100 ||
//       this.x > w + 100 ||
//       this.y < -100 ||
//       this.y > h + 100
//     ) {
//       this.reset();
//     }
//   }

//   draw() {
//     const gradient = ctx.createRadialGradient(
//       this.x,
//       this.y,
//       0,
//       this.x,
//       this.y,
//       CONFIG.GLOW,
//     );

//     gradient.addColorStop(0, `rgba(255, 215, 120, ${this.alpha})`);
//     gradient.addColorStop(0.4, `rgba(255, 190, 80, ${this.alpha * 0.6})`);
//     gradient.addColorStop(1, `rgba(255, 170, 60, 0)`);

//     ctx.fillStyle = gradient;
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//     ctx.fill();
//   }
// }

// /* =========================
//    INIT
// ========================= */
// const particles = Array.from({ length: CONFIG.COUNT }, () => new Particle());

// /* =========================
//    ANIMATION LOOP
// ========================= */
// function animate(t) {
//   ctx.clearRect(0, 0, w, h);

//   particles.forEach((p) => {
//     p.update(t);
//     p.draw();
//   });

//   requestAnimationFrame(animate);
// }

// animate(0);

//  ________________________________________________________________________________

// const canvas = document.getElementById("particles-bg");
// const ctx = canvas.getContext("2d");

// let w, h, dpr;

// function resize() {
//   dpr = window.devicePixelRatio || 1;
//   w = window.innerWidth;
//   h = window.innerHeight;

//   canvas.width = w * dpr;
//   canvas.height = h * dpr;
//   canvas.style.width = w + "px";
//   canvas.style.height = h + "px";
//   ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
// }

// window.addEventListener("resize", resize);
// resize();

// /* ======================
//    CONFIG ULTRA
// ====================== */
// const CONFIG = {
//   COUNT: 420, // 🔥 muchas más partículas
//   FLOW_SCALE: 0.0018,
//   FLOW_SPEED: 0.00025,
//   GLOW_SIZE: 28,
// };

// if (window.innerWidth < 768) {
//   CONFIG.COUNT = 240;
// }

// /* ======================
//    FLOW FIELD (corriente)
// ====================== */
// function flowField(x, y, t) {
//   return (
//     Math.sin(x * CONFIG.FLOW_SCALE + t * CONFIG.FLOW_SPEED) +
//     Math.cos(y * CONFIG.FLOW_SCALE + t * CONFIG.FLOW_SPEED * 1.2)
//   );
// }

// /* ======================
//    PARTICLE
// ====================== */
// class Particle {
//   constructor(layer) {
//     this.layer = layer; // 0 fondo, 1 medio, 2 frente
//     this.reset(true);
//   }

//   reset(initial = false) {
//     this.x = Math.random() * w;
//     this.y = Math.random() * h;

//     // profundidad real
//     this.depth =
//       this.layer === 0
//         ? Math.random() * 0.4
//         : this.layer === 1
//           ? 0.4 + Math.random() * 0.3
//           : 0.7 + Math.random() * 0.3;

//     this.size = this.depth * 2.4 + 0.6;
//     this.speed = 0.1 + this.depth * 0.6;
//     this.alpha = 0.15 + this.depth * 0.7;

//     if (!initial) {
//       this.x = Math.random() < 0.5 ? -80 : w + 80;
//     }
//   }

//   update(t) {
//     const angle = flowField(this.x, this.y, t);

//     this.x += Math.cos(angle) * this.speed;
//     this.y += Math.sin(angle) * this.speed * 0.7;

//     if (
//       this.x < -120 ||
//       this.x > w + 120 ||
//       this.y < -120 ||
//       this.y > h + 120
//     ) {
//       this.reset();
//     }
//   }

//   draw() {
//     const glow = CONFIG.GLOW_SIZE * this.depth;

//     const gradient = ctx.createRadialGradient(
//       this.x,
//       this.y,
//       0,
//       this.x,
//       this.y,
//       glow,
//     );

//     gradient.addColorStop(0, `rgba(255, 220, 140, ${this.alpha})`);
//     gradient.addColorStop(0.35, `rgba(255, 195, 100, ${this.alpha * 0.7})`);
//     gradient.addColorStop(0.7, `rgba(255, 170, 80, ${this.alpha * 0.3})`);
//     gradient.addColorStop(1, `rgba(255, 160, 60, 0)`);

//     ctx.fillStyle = gradient;
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//     ctx.fill();
//   }
// }

// /* ======================
//    INIT – 3 CAPAS
// ====================== */
// const particles = [];

// for (let i = 0; i < CONFIG.COUNT; i++) {
//   const layer = i < CONFIG.COUNT * 0.35 ? 0 : i < CONFIG.COUNT * 0.7 ? 1 : 2;

//   particles.push(new Particle(layer));
// }

// /* ======================
//    LOOP
// ====================== */
// function animate(t) {
//   ctx.clearRect(0, 0, w, h);

//   for (const p of particles) {
//     p.update(t);
//     p.draw();
//   }

//   requestAnimationFrame(animate);
// }

// animate(0);

// __________________________________________________________________________

// const canvas = document.getElementById("particles-bg");
// const ctx = canvas.getContext("2d");

// let w, h;
// function resize() {
//   w = canvas.width = window.innerWidth;
//   h = canvas.height = window.innerHeight;
// }
// window.addEventListener("resize", resize);
// resize();

// const particles = [];
// const COUNT = 160;

// class Particle {
//   constructor() {
//     this.reset();
//   }

//   reset() {
//     this.depth = Math.random(); // 🔥 profundidad (0 = lejos, 1 = cerca)

//     this.x = Math.random() * w;
//     this.y = Math.random() * h;

//     // tamaño ligado a profundidad
//     this.radius = 0.6 + this.depth * 2.2;

//     // velocidad real por capa
//     this.speed = 0.05 + this.depth * 0.6;

//     this.angle = Math.random() * Math.PI * 2;

//     // alpha más sutil atrás, más fuerte adelante
//     this.alpha = 0.15 + this.depth * 0.6;
//   }

//   update() {
//     this.x += Math.cos(this.angle) * this.speed;
//     this.y += Math.sin(this.angle) * this.speed * 0.8;

//     if (this.x < -60 || this.x > w + 60 || this.y < -60 || this.y > h + 60) {
//       this.reset();
//     }
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = `rgba(255, 195, 95, ${this.alpha})`;
//     ctx.shadowColor = "rgba(255, 180, 80, 0.9)";
//     ctx.shadowBlur = 15 + this.depth * 10; // 🔥 glow variable
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//   }
// }

// for (let i = 0; i < COUNT; i++) {
//   particles.push(new Particle());
// }

// function animate() {
//   ctx.clearRect(0, 0, w, h);
//   particles.forEach((p) => {
//     p.update();
//     p.draw();
//   });
//   requestAnimationFrame(animate);
// }

// animate();

// __________________________________________________________________________
