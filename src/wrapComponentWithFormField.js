import React, { Component } from 'react'
import FormField from 'grommet/components/FormField'

export default function wrapComponentWithFormField(GrommetComponent, mapProps) {
  class WrappedComponent extends Component {
    getRenderedComponent() {
      return this.grommetComponent
    }

    render() {
      const { help, label, error, ...rest } = mapProps(this.props)
      return (
        <FormField
          htmlFor={rest.id}
          help={help}
          label={label}
          error={error}>
          <GrommetComponent
            ref={component => this.grommetComponent = component}
            {...rest} />
        </FormField>
      )
    }
  }
  WrappedComponent.displayName = `ReduxFormBindingGrommet${GrommetComponent.name}WithFormField`
  return WrappedComponent
}
