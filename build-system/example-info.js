// Our overall example order
const exampleOrder = [
  "introduction",
  "hello-world",
  "exports",
  "webassembly-linear-memory",
  "importing-javascript-functions-into-webassembly",
  "reading-and-writing-graphics",
  "reading-and-writing-audio",
  "passing-high-level-data-types-with-wasm-bindgen",
  "passing-high-level-data-types-with-as-bind",
  "strings",
  "classes",
  "wasi-introduction",
  "wasi-hello-world"
];

// Catgeories
const concepts = {
  title: "Concepts",
  description:
    "Examples that express some of the major underlying concepts in WebAssembly. Some of these examples are not the most convenient or productive way for building projects with WebAssembly. However, these minimal examples are great for learning, or developing straightforward / lower-level parts of an application.",
  examples: [
    "introduction",
    "hello-world",
    "exports",
    "webassembly-linear-memory",
    "importing-javascript-functions-into-webassembly"
  ]
};

const applyingTheConcepts = {
  title: "Applying the Concepts",
  description:
    "Examples that expand on the conceptual examples to show how these minimal examples could be used to build common features in larger applications.",
  examples: ["reading-and-writing-graphics", "reading-and-writing-audio"]
};

const ecosystemAndLanguage = {
  title: "Ecosystem tools and Language features",
  description:
    "Examples that highlight tools, libraries, and features of your selected programming language. These ecosystem components can drastically help in building powerful applications. For example, tools can be used to help pass data between your host runtime and WebAssembly module, and/or languages features can abstract away some of the lower-level parts of WebAssembly such as memory management.",
  examples: [
    "passing-high-level-data-types-with-wasm-bindgen",
    "passing-high-level-data-types-with-as-bind",
    "strings",
    "classes"
  ]
};

const webassemblyOutsideTheBrowser = {
  title: "WebAssembly Outside of the Browser",
  description:
    "Examples that highlight the WebAssembly System Interface (WASI), standalone WebAssembly runtimes, tools for applications that use WASI, and use cases for tasks like cloud computing and internet-of-things devices. WebAssembly has a lot of key features that make it great for the browser web, and these same features make it a popular choice for uses outside of the browser as well.",
  examples: ["wasi-introduction", "wasi-hello-world"]
};

module.exports = {
  exampleOrder,
  categories: [
    concepts,
    applyingTheConcepts,
    ecosystemAndLanguage,
    webassemblyOutsideTheBrowser
  ]
};
