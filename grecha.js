const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


function tag(name, ...children) {
  const result = document.createElement(name);

  for (const child of children) {
    if (typeof child === 'string') {
      result.appendChild(document.createTextNode(child));
    } else {
      result.appendChild(child);
    }
  }

  result.att$ = function(name, value) {
    this.setAttribute(name, value);
    return this;
  };

  result.onclick$ = function(callback) {
    this.onclick = callback;
    return this;
  };

  result.style$ = function(styles) {
    this.setAttribute('style', styles);
    return this;
  };

  return result;
}




const MUNDANE_TAGS = ["canvas", "h1", "h2", "h3", "p", "a", "div", "span", "select", "button"];
for (let tagName of MUNDANE_TAGS) {
  window[tagName] = (...children) => tag(tagName, ...children);
}

function img(src) {
  return tag("img").att$("src", src);
}


function input(type, onChange) {
  const inputElement = tag("input").att$("type", type);

  if (typeof onChange === "function") {
    inputElement.oninput = function() {
      onChange(this.value);
    };
  }

  return inputElement;
}


const routes = {};

function router(newRoutes) {
  Object.assign(routes, newRoutes);
  const result = div();

  function syncHash() {
    let hashLocation = document.location.hash.split('#')[1] || '/';

    if (!(hashLocation in routes)) {
      // Handle 404 or redirect to a default route
      hashLocation = '/404';
    }

    result.replaceChildren(routes[hashLocation]());

    return result;
  }

  syncHash();

  window.addEventListener("hashchange", syncHash);

  result.refresh = syncHash;

  return result;
}

