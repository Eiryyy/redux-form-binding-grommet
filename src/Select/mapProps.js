import mapError from '../mapError'

export default ({
  input: { ...inputProps },
  defaultValue,
  onChange,
  options,
  ...props
}) => ({
  onChange: ({ value }) => {
    if (typeof value === 'object') {
      inputProps.onChange(value.value)
    } else {
      inputProps.onChange(value)
    }
    if (onChange) onChange(event)
  },
  value: (options && options.find(option => option === inputProps.value)) ?
    inputProps.value : options.find(option => option.value === inputProps.value),
  ...mapError({ options, ...props })
})
