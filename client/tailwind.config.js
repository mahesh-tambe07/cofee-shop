// module.exports = {
//   content: ["./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {
//       textStrokeWidth: {
//         2: "2px",
//       },
//       textStrokeColor: {
//         white: "#ffffff",
//       },
//     },
//   },
//   plugins: [],
// };


module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      textStrokeWidth: {
        2: "2px",
      },
      textStrokeColor: {
        white: "#ffffff",
      },

      // -------------------------------
      // Animation + keyframes for star border movement
      // -------------------------------
      animation: {
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
      },
      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

// -------------------------------
// This combined tailwind.config.js merges:
// - Your original text stroke settings
// - The star movement animations + keyframes
// - And keeps your comments explaining them
// -------------------------------
