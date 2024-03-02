const kasha = img("Kasha.png");
const kashaHard = img("KashaHard.gif");

let count = 0;
let hard = false;

const r = router({
  "/": () => {
    let variable = "hello";
    const counterElement = div();
    const inputField = input("text", (value) => {
      variable = value;
      if (variableElement) {
        variableElement.innerText = variable;
      }
    });

    clearInterval(window.counterInterval);

    window.counterInterval = setInterval(() => {
      count += 1;
      counterElement.innerText = "Counter: " + count;
    }, 1000);

    const variableElement = p(variable);

    return div(
      h1("Grecha.js").style$("background-color: #AAAAAA; margin: 0; text-align: center"),
      div(a("Foo").style$("text-decoration:none;").att$("href", "#/foo")),
      div(a("Bar").style$("text-decoration:none; background-color: lightblue; border-radius: 5px; ").att$("href", "#/bar")),
      div(a("Info").att$("href", "#/info")),
      div(a("About").att$("href", "#/about")),
      counterElement,
      inputField,
      variableElement
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
