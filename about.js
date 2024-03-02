function aboutRoute() {
  return div(
    h1("About"),
    p("This is my about page"),
    div(a("Home").att$("href", "#"))
  );
}
