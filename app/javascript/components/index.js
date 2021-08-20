import { render } from "react-dom"
import h from "components/htm_create_element"

// Vue Components
import "components/reverse_component"

// React Components
import Clock from "components/clock"
import "components/first_component"

render(
  h`<%${Clock} date="${new Date()}" />`,
  document.getElementById("clock")
)