import {Slim} from 'slim-js'
import {tag, template} from 'slim-js/Decorators'
import './vendor/material'
import './index.scss'
import './components/header'
import './components/side-menu'
import './components/simple-router'
// IE11?
// require('babel-polyfill');

@tag('slim-docs')
@template(`
<div vbox id="main_container">
    <slim-docs-header class="mdl-layout__header mdl-layout--fixed-header"></slim-docs-header>
    <div id="docs_container" hbox>
      <side-menu vbox on-item-select="handleItemSelected" items="[[menuItems]]"></side-menu>
      <doc-router vbox routes="[[menuItems]]"></doc-router>
    </div>
</div>
<style>
    slim-docs #docs_container {
        height: 100%
    }
</style>
`)
class _ extends Slim {
  menuItems = [
    { label: 'Getting started', target: '#!/getting-started' },
    { label: 'Create your first custom element', target: '#!/create-your-first-custom-element' },
    { label: 'Data binding', target: '#!/data-binding' },
  ]

  handleItemSelected(item) {
    window.location.hash = item.target
  }

  onAfterUpdate() {
    this.find('side-menu').selectItem(this.menuItems[0])
  }
}

const Root = new _()
document.body.appendChild(Root)
