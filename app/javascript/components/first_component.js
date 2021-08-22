import { render } from 'react-dom'
import h from 'helpers/htm_create_element'
import a from 'components/basic/a'

a()

render(
  h`<h1>Hello world from HTM</h1`,
  document.getElementById("root")
)