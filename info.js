function infoRoute() {
  return div(
    h1("Info").style$("background-color: blue; color: white; padding: 1rem;"), // Adding inline styles
    p("This is my page"),
    div(a("Home").att$("href", "#"))
  );
}
