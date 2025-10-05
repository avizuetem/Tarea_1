// Desplazamiento suave entre secciones
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Alerta simulada del formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por tu mensaje. Te responderé pronto.");
  this.reset();
});
