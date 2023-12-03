/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    darkMode: "class",
    content: ["./**/*.tsx"],
    plugins: [
        require("daisyui")
    ],
    theme: {
        extend: {
            animation: {
                "FadeUp": "FadeUpKeyframes 10s forwards"
            },
            keyframes: {
                "FadeUpKeyframes": {
                    "0%": {
                        transform: "translateY(100px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateY(0)",
                        opacity: "1"
                    }
                }
            }
        }
    }
}

// https://docs.plasmo.com/framework/content-scripts-ui/life-cycle#anchor
// あとで上を参考にして、フェードアップのアニメーションを実装する