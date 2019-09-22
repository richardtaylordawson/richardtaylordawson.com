export const Breakpoints = {
  "small": [0, 576],
  "small-up": [0],
  "small-down": [576],
  "medium": [768, 992],
  "medium-up": [768],
  "medium-down": [991],
  "large": [992, 1200],
  "large-up": [992]
}

Object.keys(Breakpoints).map(key => {
  return Breakpoints[key] = Breakpoints[key].length !== 2
    ? key.includes("up")
    ? `@media screen and (min-width: ${Breakpoints[key][0]}px)`
    : `@media screen and (max-width: ${Breakpoints[key][0]}px)`
    : `@media screen and (min-width: ${Breakpoints[key][0]}px) and (max-width: ${Breakpoints[key][1]}px)`
})
