const mapError = (
  {
    meta: { touched, error, warning } = {},
    input,
    ...props
  }
) => (touched && (error || warning) ? {
  ...props,
  ...input,
  error: error || warning
} : {
  ...input, ...props
})

export default mapError
