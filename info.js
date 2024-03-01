function infoRoute() {
  return div(
    h1("Info"),
    p("This is my page"),
    div(a("Home").att$("href", "#"))
  );
}
