import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    displayTitle: `'Markazi Text', serif;`,
    body: `'Karla', sans-serif`,
  },
  colors: {
    brand: {
      1: "#495E57",
      2: "#F4CE14",
      3: "#EDEFEE"
    }}
})

export default theme