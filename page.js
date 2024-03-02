const kasha = img("Kasha.png");
const kashaHard = img("KashaHard.gif");

let count = 0;
let hard = false;

const r = router({

  "/": () => {
    const counterElement = div();

    clearInterval(window.counterInterval);

    window.counterInterval = setInterval(function() {
      count += 1;
      counterElement.innerText = "Counter: " + count;
    }, 1000);

    return div(
      h1("Grecha.js"),
      div(a("Foo").att$("href", "#/foo")),
      div(a("Bar").att$("href", "#/bar")),
      div(a("Info").att$("href", "#/info")),
      div(a("About").att$("href", "#/about")),
      counterElement,
    );
  },

  "/foo": () => div(
    h1("Foo"),
    p(LOREM),
    div(a("Home").att$("href", "#")),
  ),
  "/bar": () => div(
    h1("Bar"),
    p(LOREM),
    div(a("Home").att$("href", "#"))
  ),
  "/info": () => infoRoute(),
  "/about": () => aboutRoute(),
});

document.addEventListener("DOMContentLoaded", function() {

  const entry = document.getElementById("entry");
  entry.appendChild(r);
});
