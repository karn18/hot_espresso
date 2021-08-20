import { render } from 'react-dom'
import h from 'components/htm_create_element'

render(
  h`<h1>Hello world from HTM</h1`,
  document.getElementById("root")
)