import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
.centerAlign {
  display: flex;
  align-items: center;
}
`;

export default GlobalStyle;
