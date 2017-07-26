import mapError from '../mapError'

export default ({
  input: { ...inputProps },
  defaultValue,
  onChange,
  ...props
}) => ({
  onChange: event => {
    inputProps.onChange(event.target.value)
    if (onChange) onChange(event)
  },
  value: inputProps.value,
  ...mapError(props)
})
