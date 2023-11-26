function customRender(reactElement, container) {
  // version 1 code by not applying for loop

  // const domElement = document.createElement(reactElement.type);
  // domElement.innerHTML = reactElement.children;
  // domElement.setAttribute("href", reactElement.props.href);
  // domElement.setAttribute("target", reactElement.props.target);
  // container.appendChild(domElement);

  // version 2 code

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

// how react see the element
// react try to make a tree in this format of html element
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click to visit google",
};

const mainContainer = document.querySelector("#root");

// method to add or render the above element or can say inject the element in the root
// what to inject // where to inject
// but have to design customRender method
customRender(reactElement, mainContainer);
