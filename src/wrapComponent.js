import React, { Component } from 'react'

export default function wrapComponent(GrommetComponent, mapProps) {
  class WrappedComponent extends Component {
    getRenderedComponent() {
      return this.grommetComponent
    }

    render() {
      return (
        <GrommetComponent
          ref={component => this.grommetComponent = component}
          {...mapProps(this.props)} />
      )
    }
  }
  WrappedComponent.displayName = `ReduxFormBindingGrommet${GrommetComponent.name}`
  return WrappedComponent
}
