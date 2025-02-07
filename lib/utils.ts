import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// .apexcharts-datalabel-label {
//   fill: #ffffff;
// }
// .apexcharts-text{
//   fill: #ffffff;

// }

// .apexcharts-text {
//   font-size: 20px;
//   /* Default size */
// }

// @media (max-width: 640px) {

//   /* Small screens */
//   .apexcharts-text {
//     font-size: 14px;
//     /* Smaller text on small screens */
//   }
// }

// @media (min-width: 1024px) {

//   /* Large screens */
//   .apexcharts-text {
//     font-size: 18px;
//     /* Larger text on large screens */
//   }
// }
