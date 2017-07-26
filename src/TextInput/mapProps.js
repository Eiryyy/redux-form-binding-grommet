import mapError from '../mapError'

export default ({
  input: { ...inputProps },
  defaultValue,
  suggestions, // TODO: suggestions causes an error "React DOM tree root should always have a node reference"
  onDOMChange,
  onSelect,
  ...props
}) => ({
  onDOMChange: event => {
    inputProps.onChange(event.target.value)
    if (onDOMChange) onDOMChange(event)
  },
  onSelect: event => {
    inputProps.onChange(event.suggestion)
    if (onSelect) onSelect(event)
  },
  value: inputProps.value,
  ...mapError(props)
})
