import { css } from 'styled-components';
import { breakpoints } from './_variables';

// interface AccumulatorT {
//   [prop: string]: string;
// }

// export const respondTo = Object.keys(breakpoints).reduce(
//   (accumulator:AccumulatorT, label: string) => {
//     accumulator[label] = (...args) => css`
//       @media (min-width: ${breakpoints[label]}) {
//         ${css(...args)};
//       }
//     `;
//     return accumulator;
//   },
//   {}
// );