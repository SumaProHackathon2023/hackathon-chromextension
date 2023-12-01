const Tailwind = document.createElement("script") as HTMLScriptElement
Tailwind.src = "https://cdn.tailwindcss.com"
const DaisyUI = document.createElement("link") as HTMLLinkElement
DaisyUI.href = "https://cdn.jsdelivr.net/npm/daisyui@4.4.17/dist/full.min.css"
DaisyUI.rel = "stylesheet"
DaisyUI.type = "text/css"
document.getElementsByTagName("head")[0].appendChild(Tailwind)
document.getElementsByTagName("head")[0].appendChild(DaisyUI)


const SpamLikeAricle = document.createElement("article") as HTMLElement
SpamLikeAricle.id = "spam-like"
SpamLikeAricle.innerHTML = `
<h1 class="text-3xl">Spam Like</h1>
`
document.body.appendChild(SpamLikeAricle)
