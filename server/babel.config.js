module.exports = api => {
  api.cache(true)
  const presets = ['@mhirba/next']
  return { presets }
}
