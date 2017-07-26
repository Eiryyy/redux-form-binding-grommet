import mapError from '../mapError'

export default ({
  input: { ...inputProps },
  defaultValue,
  onChange,
  checked,
  ...props
}) => ({
  onChange: event => {
    inputProps.onChange(event.target.value)
    if (onChange) onChange(event)
  },
  checked: inputProps.value,
  ...mapError(props)
})
