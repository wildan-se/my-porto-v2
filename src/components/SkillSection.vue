<script setup>
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgMysql   from "../assets/mysql.webp?url";
import imgPhpSvg  from "../assets/php-logo.svg?url";
import imgMongoSvg from "../assets/mongodb-logo.svg?url";

gsap.registerPlugin(ScrollTrigger);

const techSvgs = {
  js: {
    viewBox: "0 0 48 48", color: "#ffd600",
    paths: [
      { d: "M6,42V6h36v36H6z", fill: "#ffd600" },
      { d: "M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z", fill: "#000001" },
    ],
  },
  vue: {
    viewBox: "0 0 24 24", color: "#4FC08D",
    paths: [
      { d: "M24,1.61H14.06L12,5.16L9.94,1.61H0L12,22.39L24,1.61Z", fill: "#4FC08D" },
      { d: "M12,18.49L3.44,4.05H8.53L12,10.08L15.47,4.05H20.56L12,18.49Z", fill: "#35495E" },
    ],
  },
  php: {
    viewBox: "0 0 32 32", color: "#7182b8",
    paths: [
      // Body (flat gradient midpoint color)
      { d: "M4.052,22.683c-.225-1.474-.454-4.075.6-5.315a3.452,3.452,0,0,1,.27-.321c1.663-1.566,3.112-.219,3.505,1.515a27.314,27.314,0,0,1,.051,3.295,1.109,1.109,0,0,0,1.051.6c.153.316.112.551.286.76a2.5,2.5,0,0,0,2.7.694,8.441,8.441,0,0,0,.913-.454,10.14,10.14,0,0,0-.1-4.045c0-.184-.061-.306-.061-.49a.626.626,0,0,1,.311.138c-.2.734,2.556,1.239,5.771.352.036-.128-.026-.286.051-.332a.4.4,0,0,1,.337-.041c.015.235.02.464.036.7a4.654,4.654,0,0,0,.75.01.838.838,0,0,1-.6.214c.056,0-.031.107.02.117.148.036.429-.02.546.031-.219.128-.464.056-.612.2.036.78.056,1.617.087,2.4a2.591,2.591,0,0,0,3.311-.148,28.633,28.633,0,0,0-.1-4.7c-.117-.015-.235-.036-.352-.051,1.827-2.458,2.179-4.973.648-7.243-.015-.1-.082-.2-.1-.3,1.332-.051,2.7.087,4.036.036a6.478,6.478,0,0,0,1.112.311c.393-.138.464-1.229.077-1.107s-.6.367-1.015.52c-1.531,0-3.23-.061-4.76-.061a9.5,9.5,0,0,0-9-1.551,8.371,8.371,0,0,1,.26,6.427c-.087.286-1.408,1.122-.327.209,1.092-.928.408-7.375-.934-7.386a6.327,6.327,0,0,0-4.25,1.7c-.209-.224-.194-.133-.1-.449a9.863,9.863,0,0,0-3.4.3,1.428,1.428,0,0,0-1.3.949,33.949,33.949,0,0,0-1.2,11.094,4.574,4.574,0,0,0,.352,1.3c.6.658.924.469,1.123.122Z", fill: "#7182b8" },
      // Dark outline/shadow
      { d: "M13.891,19.981a17.345,17.345,0,0,1-.046,3.133.835.835,0,0,1-.439.709c-.831.617-3.616.765-3.963-.546-.128-.005-.026-.429-.148-.413a1.561,1.561,0,0,1-1.2-.735c.005-1.434.163-6.607-2.4-5.214a2.506,2.506,0,0,0-1.168,1.429,4.91,4.91,0,0,0-.24,1.643c-.02.714.158,1.495.184,2.352.01.383.071.48-.214.806-.459.525-1.26.082-1.693-.495a1.893,1.893,0,0,1-.291-.969,31.065,31.065,0,0,1,1-11.148c.367-1.23.495-1.408,1.663-1.684a12.948,12.948,0,0,1,4.05-.24c1.051-.342,3.545-2.194,4.621-.724a12.527,12.527,0,0,1,9.579,1.75,37.083,37.083,0,0,0,4.259.077c.2-.128.434-.265.638-.383a1.381,1.381,0,0,1,.495-.209c.23-.036.53-.046.6.24a3.292,3.292,0,0,1,.061.893.808.808,0,0,1-.643.76,4.02,4.02,0,0,1-1.148-.372c-1.3.036-2.1-.036-3.4,0,.209.224.2.372.352.668a6.381,6.381,0,0,1-.775,5.979c-.092,1.49.02,2.995.031,4.49.005.515.041,1.005-.444,1.347a3.263,3.263,0,0,1-2.867.24,2.523,2.523,0,0,1-.668-.556,2.807,2.807,0,0,1-.5.01,1.213,1.213,0,0,1-.689-.505,3.606,3.606,0,0,1-.235-.525c0-.7-.026-.974-.026-1.673a10.67,10.67,0,0,1-4.346-.122Z", fill: "#373435" },
      // PHP text white
      { d: "M9.624,16.894c.255-1.322.515-2.644.771-3.961a.426.426,0,0,1,.449-.449h2.348a1.231,1.231,0,0,1,1.107.623,1.587,1.587,0,0,1,.189.934,2.35,2.35,0,0,1-.694,1.465,2.186,2.186,0,0,1-1.148.5c-.4.01-.8.015-1.2.026-.23-.02-.459.041-.515.225-.071.25-.122.5-.194.745a.42.42,0,0,1-.265.23c-.23.005-.464.005-.694.01C9.532,17.246,9.583,17.1,9.624,16.894Zm1.638-2.266c.066-.347.148-.74.209-1.046a.452.452,0,0,1,.449-.3,1.825,1.825,0,0,1,.715.092.766.766,0,0,1,.383,1.082,1.437,1.437,0,0,1-.852.7,1.651,1.651,0,0,1-.51.051c-.439-.046-.475-.163-.4-.582Z", fill: "#fefefe" },
      { d: "M14.443,15.459c.26-1.24.515-2.48.775-3.725.041-.291.117-.551.423-.577h.372c.224,0,.352.133.372.4l-.076.551c.01.225.148.352.423.373.372.015.75.036,1.122.051.561.036.938.276.9.975-.117.617-.235,1.235-.352,1.847a.725.725,0,0,1-.474.648c-.168-.01-.357.01-.525,0-.291.015-.459-.092-.352-.475.107-.485.24-1.092.352-1.577.041-.577-.173-.607-.4-.648-.194-.026-.382,0-.576-.026-.286.041-.393.316-.474.623-.122.515-.25,1.031-.372,1.551-.056.281-.117.464-.326.551h-.622q-.352-.077-.2-.551Z", fill: "#fefefe" },
      { d: "M18.545,16.894c.255-1.322.515-2.644.771-3.961a.426.426,0,0,1,.449-.449h2.348a1.231,1.231,0,0,1,1.107.623,1.587,1.587,0,0,1,.189.934,2.35,2.35,0,0,1-.694,1.465,2.186,2.186,0,0,1-1.148.5c-.4.01-.8.015-1.2.026-.23-.02-.459.041-.515.225-.071.25-.122.5-.194.745a.42.42,0,0,1-.265.23c-.23.005-.464.005-.694.01C18.453,17.246,18.5,17.1,18.545,16.894Zm1.638-2.266c.066-.347.148-.74.209-1.046a.452.452,0,0,1,.449-.3,1.825,1.825,0,0,1,.715.092.766.766,0,0,1,.383,1.082,1.437,1.437,0,0,1-.852.7,1.651,1.651,0,0,1-.51.051c-.439-.046-.475-.163-.4-.582Z", fill: "#fefefe" },
    ],
  },
  iot: {
    viewBox: "0 0 24 24", color: "#0091EA",
    paths: [
      { d: "M5 13v9H3v-9Zm18 0v2h-2v7h-2v-7h-2v-2Zm-11-2a7.537 7.537 0 0 1 3.96 1.149l1.447-1.45A9.522 9.522 0 0 0 12 9a9.363 9.363 0 0 0-5.333 1.68l1.449 1.453A7.36 7.36 0 0 1 12 11Z", fill: "#0091EA" },
      { d: "M12 7a11.494 11.494 0 0 1 6.834 2.27l1.427-1.43A13.48 13.48 0 0 0 12 5a13.333 13.333 0 0 0-8.186 2.822l1.426 1.43A11.343 11.343 0 0 1 12 7Z", fill: "#0091EA" },
      { d: "M12 3a15.471 15.471 0 0 1 9.687 3.41l1.427-1.429A17.43 17.43 0 0 0 .96 4.964l1.427 1.429A15.328 15.328 0 0 1 12 3Zm0 10a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 12 13Zm0 7a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 12 20Z", fill: "#0091EA" },
    ],
  },
  mikrotik: {
    viewBox: "0 0 24 24", color: "#E53935",
    paths: [
      { d: "M23.041 6.188a1.404 1.404 0 0 0-.218-.36c-.24-.296-.634-.586-1.14-.864l-4.052-2.22L13.576.519C13.074.243 12.61.065 12.22.013A1.772 1.772 0 0 0 12 0c-.432 0-.974.192-1.576.52L6.37 2.74L2.317 4.96c-.504.279-.9.569-1.14.867a1.59 1.59 0 0 0-.122.17a1.654 1.654 0 0 0-.096.19c-.15.348-.22.816-.22 1.368v8.887c0 .66.1 1.2.316 1.558c.216.356.66.706 1.262 1.036l4.054 2.22l4.053 2.223c.504.276.966.456 1.36.506c.145.02.291.02.436 0c.39-.05.852-.228 1.356-.506l8.107-4.443c.6-.33 1.046-.68 1.262-1.036c.036-.06.068-.123.096-.188c.15-.348.22-.818.22-1.37V7.556c0-.552-.07-1.02-.22-1.368z", fill: "#E53935" },
      { d: "M7.233 16.618c0 .2-.218.33-.396.233l-1.45-.796a1.066 1.066 0 0 1-.552-.934v-4.296c0-.2.216-.33.394-.235l1.728.947a.53.53 0 0 1 .276.468v4.612z", fill: "#FFFFFF" },
      { d: "M19.167 15.121c0 .39-.213.748-.554.936l-1.45.794a.266.266 0 0 1-.394-.234v-5.692c0-.2-.217-.33-.395-.232l-2.62 1.434c-.34.187-.552.545-.552.934v5.646a.532.532 0 0 1-.278.468l-.41.224c-.32.176-.707.176-1.026 0l-.408-.224a.532.532 0 0 1-.278-.468v-5.646c0-.389-.212-.747-.552-.934L4.835 9.16v-.28c0-.388.212-.746.552-.934l.6-.328a1.064 1.064 0 0 1 1.022 0l4.48 2.452c.318.176.704.176 1.021 0l2.07-1.134a.266.266 0 0 0 0-.468L9.932 5.922a.266.266 0 0 1 0-.468l1.556-.852c.32-.176.707-.176 1.026 0l6.1 3.34c.342.188.554.547.553.936v6.243z", fill: "#FFFFFF" },
    ],
  },
  html: {
    viewBox: "0 0 256 256", color: "#E34C26",
    paths: [
      { d: "M0 0h256v256H0z", fill: "none" },
      { d: "m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38H48Z", fill: "#E34C26" },
      { d: "M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128V38Zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014v-33.227Z", fill: "#F06529" },
    ],
  },
  css: {
    viewBox: "0 0 256 361", color: "#264DE4",
    paths: [
      { d: "M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36l-104.47 28.962Z", fill: "#264DE4" },
      { d: "m212.417 314.547l19.86-222.49H128V337.95l84.417-23.403Z", fill: "#2965F1" },
      { d: "m53.669 188.636l2.862 31.937H128v-31.937H53.669Zm-5.752-64.641l2.903 31.937H128v-31.937H47.917ZM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58Z", fill: "#EBEBEB" },
      { d: "m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576Z", fill: "#FFF" },
    ],
  },
  express: {
    viewBox: "0 0 256 256", color: "#a1a1aa",
    paths: [
      { d: "M228 182.937a12.732 12.732 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.289 13.289 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.952 11.952 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.558 5.558 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433ZM28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.864 33.864 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.145 45.145 0 0 1-21.573 32.972a52.263 52.263 0 0 1-60.884-7.784a54.767 54.767 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A860.69 860.69 0 0 1 28 124.5Zm9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869l.056.111Z", fill: "#0F0F0F" },
    ],
  },
  mysql: {
    viewBox: "0 0 512 349", color: "#00758F",
    paths: [
      { d: "m152.31 230.297l15.56 50.487c3.496 11.463 4.954 19.465 4.37 24.026c8.51-22.792 14.456-47.63 17.839-74.513h18.71c-8.045 43.766-18.656 75.57-31.827 95.41c-10.262 15.289-21.504 22.933-33.746 22.933c-3.264 0-7.288-.986-12.063-2.944v-10.55c2.333.342 5.07.525 8.218.525c5.711 0 10.314-1.583 13.816-4.742c4.193-3.849 6.292-8.175 6.292-12.97c0-3.274-1.637-9.993-4.896-20.157l-21.68-67.505h19.406ZM33.223 199.266l28.5 86.956h.176l28.675-86.956h23.428c5.13 43.124 8.16 82.581 9.09 118.346H103.34c-.695-33.433-2.62-64.871-5.768-94.32H97.4l-30.078 94.32H52.28l-29.896-94.32h-.176c-2.218 28.282-3.614 59.72-4.196 94.32H0c1.164-42.08 4.077-81.525 8.739-118.346h24.485Z", fill: "#00758F" },
      { d: "M352.498 197.51c30.657 0 45.986 19.586 45.986 58.739c0 21.276-4.61 37.347-13.821 48.204c-8.392 9.944-20.11 14.909-35.148 14.909c-15.053 0-26.297-4.387-33.731-13.15c-8.16-9.694-12.238-24.955-12.238-45.757c0-21.156 4.602-37.166 13.816-48.037c8.392-9.944 20.11-14.909 35.148-14.909Zm0 14.554c-18.066 0-27.104 14.91-27.104 44.71c0 29.8 9.037 44.866 27.104 44.866c18.066 0 27.103-15.026 27.103-45.064c0-29.932-9.037-44.512-27.103-44.512Z", fill: "#F29111" },
    ],
  },
  node: {
    viewBox: "0 0 32 32", color: "#8bc34a",
    paths: [
      { d: "M16 20.003v2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2v-2h4v-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2Z", fill: "#8bc34a" },
      { d: "m16 3.003l-12 7v14l4 2h6v-13.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v11.5H8l-2-1.034V11.15l10-5.833l10 5.833v11.703l-10 5.833l-1.745-1.022L13 29.253l3 1.75l12-7v-14Z", fill: "#8bc34a" },
    ],
  },
  bootstrap: {
    viewBox: "0 0 256 204", color: "#7E13F8",
    paths: [
      { d: "M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197c4.343 14.069 4.947 31.32 4.482 44.641c-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65c-.464-13.32.139-30.572 4.482-44.641c4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196c-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063c0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764c0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965c0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z", fill: "#7E13F8" },
    ],
  },
  mongodb: {
    viewBox: "0 -183 512 512", color: "#499D4A",
    paths: [
      // right leaf (dark green)
      { d: "M37.084 123.676C37.084 123.676 70.213 101.897 62.461 56.587C54.987 23.643 37.36 12.846 35.423 8.693C33.3 5.74 31.27 0.572 31.27 0.572L32.655 92.207C32.655 92.3 29.794 120.261 37.084 123.676", fill: "#499D4A" },
      // left leaf (lighter green)
      { d: "M29.333 124.875C29.333 124.875 -1.767 103.65 0.079 66.277C1.832 28.903 23.795 10.539 28.04 7.216C30.809 4.264 30.901 3.156 31.086 0.203C33.024 4.356 32.655 62.309 32.931 69.137C33.762 95.437 31.455 119.893 29.333 124.875", fill: "#58AA50" },
      // stem (grey)
      { d: "M35.053 142.317L31.27 141.024C31.27 141.024 31.732 121.738 24.811 120.354C20.197 115.001 25.549 -106.659 42.159 119.615C42.159 119.615 36.438 122.476 35.423 127.367C34.315 132.166 35.053 142.317 35.053 142.317", fill: "#A6A385" },
    ],
  },
  tailwind: {
    viewBox: "0 0 24 24", color: "#38B2AC",
    paths: [
      { d: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z", fill: "#38B2AC" },
    ],
  },
};

const skills = [
  { name: "HTML",         icon: techSvgs.html      },
  { name: "CSS",          icon: techSvgs.css       },
  { name: "JavaScript",   icon: techSvgs.js        },
  { name: "Vue.js",       icon: techSvgs.vue       },
  { name: "Tailwind CSS", icon: techSvgs.tailwind  },
  { name: "Node.js",      icon: techSvgs.node      },
  { name: "PHP",          icon: techSvgs.php,       img: imgPhpSvg   },
  { name: "Bootstrap",    icon: techSvgs.bootstrap },
  { name: "Express",      icon: techSvgs.express   },
  { name: "IoT",          icon: techSvgs.iot       },
  { name: "Mikrotik",     icon: techSvgs.mikrotik  },
  { name: "MongoDB",      icon: techSvgs.mongodb,   img: imgMongoSvg },
  { name: "MySQL",        icon: techSvgs.mysql,     img: imgMysql   },
];

let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    // ── Desktop: 3D Carousel ──────────────────────────────────────────────
    mm.add("(min-width: 768px)", () => {
      const cards = document.querySelectorAll(".client-card");
      const angle = 360 / cards.length;

      cards.forEach((card, i) => {
        card.style.setProperty("--index", i);
        card.style.setProperty("--angle", `${angle}deg`);
      });

      // Entry: fire once on scroll, no scrub — just a one-shot tween
      gsap.from(".client-card", {
        opacity: 0,
        scale: 0.5,
        duration: 1.2,
        stagger: 0.07,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: "#skills",
          start: "top 75%",
          once: true,       // fires once, then kills itself — no ongoing work
        },
      });
    });

    // ── Mobile: IntersectionObserver + CSS, neural line only ─────────────
    mm.add("(max-width: 767px)", () => {
      const hexToRgb = (hex) => {
        const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : null;
      };

      document.querySelectorAll(".curve-card").forEach((card, i) => {
        const skill = skills[i];
        const brandColor = skill.name === "Express" ? "#a1a1aa" : (skill.icon.color || "#10b981");
        const rgb = hexToRgb(brandColor) || "16,185,129";
        const label = card.querySelector(".skill-label");
        if (label) {
          label.style.color = brandColor;
          label.style.borderColor = `rgba(${rgb},0.45)`;
          label.style.backgroundColor = `rgba(${rgb},0.08)`;
        }
        card.dataset.visible = "false";
      });

      // Neural line draw — single element, cheap scrub
      gsap.fromTo(".neural-line-path",
        { strokeDashoffset: 2000 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".mobile-curve-track",
            start: "top center",
            end: "bottom center",
            scrub: 0.4,
          },
        }
      );

      // IntersectionObserver — zero JS per scroll tick
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          e.target.dataset.visible = e.isIntersecting ? "true" : "false";
        });
      }, { rootMargin: "-12% 0px -12% 0px" });

      document.querySelectorAll(".curve-card").forEach(c => io.observe(c));

      return () => io.disconnect();
    });
  });
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>

<template>
  <section id="skills" class="py-16 sm:py-20 md:py-24 transition-colors">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Header — isolated stacking context so carousel never overlaps it -->
      <div class="relative z-10 text-center mb-10 sm:mb-14 md:mb-16">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 border border-emerald-300/70 dark:border-emerald-700/50 mb-3">
          Tech Stack
        </span>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-zinc-800 dark:text-white">
          Skills &amp; <span class="text-emerald-600 dark:text-emerald-400">Tools</span>
        </h2>
        <div class="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      <!-- ── Mobile: Curved path ── -->
      <div class="flex md:hidden relative w-full flex-col justify-center items-center z-10 px-2 mt-4 pb-24 overflow-visible">

        <!-- Static glow — no GSAP parallax -->
        <div class="absolute top-20 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-500/15 dark:bg-emerald-600/20 rounded-full blur-[60px] pointer-events-none"></div>

        <!-- Neural line SVG -->
        <div class="absolute inset-0 z-0 pointer-events-none flex justify-center mt-16 pb-16">
          <svg class="h-full w-full max-w-[300px]" preserveAspectRatio="none" viewBox="0 0 200 1000" aria-hidden="true">
            <path
              d="M 100 0 C 180 150, 20 250, 100 400 C 180 550, 20 650, 100 800 C 180 950, 20 1000, 100 1000"
              fill="none" stroke="rgba(16,185,129,0.12)" stroke-width="4" vector-effect="non-scaling-stroke"
            />
            <path
              class="neural-line-path"
              d="M 100 0 C 180 150, 20 250, 100 400 C 180 550, 20 650, 100 800 C 180 950, 20 1000, 100 1000"
              fill="none" stroke="url(#ng)" stroke-width="5" stroke-linecap="round" vector-effect="non-scaling-stroke"
            />
            <defs>
              <linearGradient id="ng" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stop-color="#ffffff" stop-opacity="0.8"/>
                <stop offset="35%"  stop-color="#34d399" stop-opacity="1"/>
                <stop offset="70%"  stop-color="#10b981" stop-opacity="1"/>
                <stop offset="100%" stop-color="#ffffff" stop-opacity="0.6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <!-- Cards -->
        <div class="mobile-curve-track w-full flex flex-col items-center gap-14 relative py-16">
          <div
            v-for="(skill, index) in skills"
            :key="'m-' + skill.name"
            class="curve-card relative bg-white/75 dark:bg-zinc-800/80 border border-white/40 dark:border-zinc-700/40 rounded-full p-4 flex flex-col items-center justify-center w-[80px] h-[80px] z-10"
            :style="{ transform: `translateX(${Math.sin((index / (skills.length - 1)) * Math.PI * 3.5) * 72}px)` }"
          >
            <div class="w-9 h-9 flex items-center justify-center pointer-events-none">
              <img
                v-if="skill.img"
                :src="skill.img"
                :alt="skill.name"
                class="curve-icon w-full h-full object-contain "
                draggable="false"
              />
              <svg
                v-else
                :viewBox="skill.icon.viewBox"
                class="curve-icon w-full h-full"
                :class="{ 'invert dark:invert': skill.name === 'Express' }"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  v-for="(path, i) in skill.icon.paths"
                  :key="i"
                  :d="path.d"
                  :fill="path.fill"
                  :fill-rule="path.fillRule"
                />
              </svg>
            </div>
            <span class="skill-label absolute -bottom-9 whitespace-nowrap text-[11px] font-bold px-2.5 py-1 rounded-full pointer-events-none font-sans border">
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- ── Desktop: 3D Rotating Carousel ── -->
      <!-- overflow-visible so cards that translateZ toward viewer aren't clipped,
           but the container itself doesn't grow into the header above. -->
      <div class="hidden md:block client-gallery relative" style="height: 480px; perspective: 1100px; overflow: visible;">

        <!-- Static blob — CSS opacity only, no transform animation -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <div class="w-[380px] h-[380px] bg-emerald-500/15 dark:bg-emerald-500/20 rounded-full blur-[90px] skill-blob"></div>
        </div>

        <!-- gallery-container fills the exact 480px box, centers the track -->
        <div class="absolute inset-0 gallery-container" style="transform-style: preserve-3d;">
          <div class="absolute inset-0 flex items-center justify-center gallery-track" style="transform-style: preserve-3d;">
            <div
              v-for="skill in skills"
              :key="skill.name"
              class="client-card group"
            >
              <div class="card-floater">
                <div class="relative p-5 md:p-6 w-36 h-28 md:w-40 md:h-32 flex items-center justify-center glass-card rounded-2xl shadow-lg pointer-events-auto hover:scale-110 hover:shadow-xl hover:z-50 transition-transform duration-300 cursor-default">
                  <img
                    v-if="skill.img"
                    :src="skill.img"
                    :alt="skill.name"
                    class="w-12 h-12 md:w-14 md:h-14 object-contain transition-[filter] duration-300 grayscale group-hover:grayscale-0 "
                    draggable="false"
                  />
                  <svg
                    v-else
                    :viewBox="skill.icon.viewBox"
                    class="w-12 h-12 md:w-14 md:h-14 transition-[filter] duration-300 grayscale"
                    :class="{
                      'group-hover:grayscale-0': skill.name !== 'Express',
                      'group-hover:invert':      skill.name === 'Express',
                    }"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect width="100%" height="100%" fill="white" fill-opacity="0"/>
                    <path
                      v-for="(path, i) in skill.icon.paths"
                      :key="i"
                      :d="path.d"
                      :fill="path.fill"
                      :fill-rule="path.fillRule"
                    />
                  </svg>

                  <span class="text-xs font-bold text-emerald-600 dark:text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-8 bg-white/90 dark:bg-zinc-800/90 px-3 py-1 rounded-full shadow backdrop-blur-sm whitespace-nowrap border border-emerald-100 dark:border-emerald-800">
                    {{ skill.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ── Desktop 3D Carousel ────────────────────────────────────────── */

/* gallery-track: single rotating element — 1 compositor layer */
.gallery-track {
  will-change: transform;
  animation: rotate 45s linear infinite;
}
.gallery-track:has(.client-card:hover) {
  animation-play-state: paused;
}

@keyframes rotate {
  to { transform: rotateY(-360deg); }
}

/* Each card: positioned in 3D space */
.client-card {
  position: absolute;
  /* center in the track — width/height fit-content keeps card from stretching */
  top: 50%;
  left: 50%;
  width: fit-content;
  height: fit-content;
  /* shift back to true center after top/left 50% */
  margin-top: -56px;  /* half of card h-28 = 112px / 2 */
  margin-left: -72px; /* half of card w-36 = 144px / 2 */
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--index) * var(--angle))) translateZ(300px);
  pointer-events: none;
  overflow: visible; /* let tooltip show without clipping */
}

@media (min-width: 640px) {
  .client-card { transform: rotateY(calc(var(--index) * var(--angle))) translateZ(380px); }
}
@media (min-width: 768px) {
  .client-card {
    transform: rotateY(calc(var(--index) * var(--angle))) translateZ(460px);
    margin-top: -64px;  /* half of md:h-32 = 128px / 2 */
    margin-left: -80px; /* half of md:w-40 = 160px / 2 */
  }
}

/* card-floater: translateY only — compositor-only, no repaint.
   will-change promoted here (not on parent) to minimize layer count. */
.card-floater {
  will-change: transform;
  animation: float 5s ease-in-out infinite;
  animation-delay: calc(var(--index) * -0.38s);
  pointer-events: auto;
}
.card-floater:hover {
  animation-play-state: paused;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}

/* Static blob — opacity animation only, never triggers layout/paint */
.skill-blob {
  animation: blob-fade 6s ease-in-out infinite;
}
@keyframes blob-fade {
  0%, 100% { opacity: 0.65; }
  50%       { opacity: 1; }
}

/* ── Mobile curved path ────────────────────────────────────────── */

.curve-card {
  transition: transform 0.35s ease, opacity 0.35s ease;
  opacity: 0.35;
}
.curve-card[data-visible="true"] {
  opacity: 1;
}

.curve-card .curve-icon {
  transition: filter 0.35s ease;
  filter: grayscale(90%);
}
.curve-card[data-visible="true"] .curve-icon {
  filter: grayscale(0%);
}

.curve-card .skill-label {
  transition: opacity 0.35s ease, transform 0.35s ease;
  opacity: 0;
  transform: translateY(6px);
}
.curve-card[data-visible="true"] .skill-label {
  opacity: 1;
  transform: translateY(0);
}

.neural-line-path {
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
}

</style>
