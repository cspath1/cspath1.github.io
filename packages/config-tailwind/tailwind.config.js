// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "../../apps/stories/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        bp: {
          black: "#010814",
          lGray: "#F9F9FC",
          gray98: "#FAFAFA",
          gray: "#DFD8E3",
          dkGray: "#707070",
          purple: "#7211B6",
          indigo: "#3A0CA2",
          pink: "#B4269D",
          yellow: "#FFB603",
          green: "#64EDC2",
          red: "#EA6262"
        }
      },
      keyframes: {
        scale: {
          "0%, 100%": {
            transform: "scale(0.0)",
            "-webkit-transform": "scale(0.0)"
          },
          "50%": { transform: "scale(1.0)", "-webkit-transform": "scale(1.0)" }
        },
        scale1: {
          "0%, 100%": {
            transform: "scale(1.0)",
            "-webkit-transform": "scale(1.0)"
          },
          "50%": { transform: "scale(0.0)", "-webkit-transform": "scale(0.0)" }
        },
        dotBricksGray: {
          "0%": {
            "box-shadow":
              "9999px -8px 0 0 #DFD8E3, 9999px 0 0 0 #DFD8E3, 10007px 0 0 0 #DFD8E3"
          },
          "8.333%": {
            "box-shadow":
              "10007px -8px 0 0 #DFD8E3, 9999px 0 0 0 #DFD8E3, 10007px 0 0 0 #DFD8E3"
          },
          "16.667%": {
            "box-shadow":
              "10007px -8px 0 0 #DFD8E3, 9999px -8px 0 0 #DFD8E3, 10007px 0 0 0 #DFD8E3"
          },
          "25%": {
            "box-shadow":
              "10007px -8px 0 0 #DFD8E3, 9999px -8px 0 0 #DFD8E3, 9999px 0 0 0 #DFD8E3"
          },
          "33.333%": {
            "box-shadow":
              "10007px 0 0 0 #DFD8E3, 9999px -8px 0 0 #DFD8E3, 9999px 0 0 0 #DFD8E3"
          },
          "41.677%": {
            "box-shadow":
              "10007px 0 0 0 #DFD8E3, 10007px -8px 0 0 #DFD8E3, 9999px 0 0 0 #DFD8E3"
          },
          "50%": {
            "box-shadow":
              "10007px 0 0 0 #DFD8E3, 10007px -8px 0 0 #DFD8E3, 9999px -8px 0 0 #DFD8E3"
          },
          "58.333%": {
            "box-shadow":
              "9999px 0 0 0 #DFD8E3, 10007px -8px 0 0 #DFD8E3, 9999px -8px 0 0 #DFD8E3"
          },
          "66.667%": {
            "box-shadow":
              "9999px 0 0 0 #DFD8E3, 10007px 0 0 0 #DFD8E3, 9999px -8px 0 0 #DFD8E3"
          },
          "75%": {
            "box-shadow":
              "9999px 0 0 0 #DFD8E3, 10007px 0 0 0 #DFD8E3, 10007px -8px 0 0 #DFD8E3"
          },
          "83.333%": {
            "box-shadow":
              "9999px -8px 0 0 #DFD8E3, 10007px 0 0 0 #DFD8E3, 10007px -8px 0 0 #DFD8E3"
          },
          "91.667%": {
            "box-shadow":
              "9999px -8px 0 0 #DFD8E3, 9999px 0 0 0 #DFD8E3, 10007px -8px 0 0 #DFD8E3"
          },
          "100%": {
            "box-shadow":
              "9999px -8px 0 0 #DFD8E3, 9999px 0 0 0 #DFD8E3, 10007px 0 0 0 #DFD8E3"
          }
        }
      },
      animation: {
        scale: "scale 2s ease-in-out infinite",
        scale1: "scale1 2s ease-in-out infinite",
        dotBricksGray: "dotBricksGray 2s ease infinite",
        "spin-slower": "spin 3s linear infinite"
      },
      boxShadow: {
        dotBricks:
          "9991px -8px 0 0 #DFD8E3, 9991px 0 0 0 #DFD8E3, 10007px 0 0 0 #DFD8E3",
        progressBar: "inset 0 -1px 1px rgba(255, 255, 255, 0.3)"
      },
      screens: {
        lgh: { raw: "(max-height: 1100px)" }
      }
    }
  },

  plugins: []
};
