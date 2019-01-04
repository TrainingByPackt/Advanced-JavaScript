// math-module.js
export const PI = 3.1415;
export const DEGREES_IN_CIRCLE = 360;
// index1.js
import { PI } from 'math-module.js'
// index2.js
import { PI, DEGREES_IN_CIRCLE } from 'math-module.js'
// index3.js
import { PI as pi, DEGREES_IN_CIRCLE as degInCircle } from 'math-module.js'
// index4.js
import * as MathModule from 'math-module.js'
