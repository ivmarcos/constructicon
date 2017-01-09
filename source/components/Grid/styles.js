export default (props, traits) => {
  const {
    calculateSpacing,
    rhythm
  } = traits

  const {
    spacing,
    styles
  } = props

  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: props.align,
      justifyContent: props.justify,
      direction: props.direction,
      ...calculateSpacing(spacing, 'margin', { multiplier: -0.5 }),
      ...styles,

      '> *': {
        ...calculateSpacing(spacing, 'padding', { multiplier: 0.5 })
      }
    }
  }
}