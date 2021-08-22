const importmap = JSON.parse(document.querySelector("script[type=importmap]").text)
const componentsPaths = Object.keys(importmap.imports).filter((e) => e.match("components/"))

componentsPaths.forEach(function(path) {
  const name = path.replace("components/", "") //.replace("_component", "").replace(/\//g, "--").replace(/_/g, "-")

  import(path)
    .then(module => console.log(module))
    .catch(error => console.log(`Failed to autoload components: ${name}`, error))
})
