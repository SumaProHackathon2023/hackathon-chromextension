import {createRoot} from "react-dom/client"
function Content(){
    return (
        <div id="glass" style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: "15px",
            borderBottomColor: "rgba(255,255,255,0.2)",
            borderRightColor: "rgba(255,255,255,0.2)",
            boxShadow: "0 5px 20px rgba(255, 152, 79, 0.5)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
        }}>
            <button 
                onClick={() => {document.getElementById("append-root")?.remove()}}
                id="close"
                style={{display: "none"}}>
                とじる
            </button>
            <h1 style={{fontSize: "3em",textAlign: "center",}}>学外イベントに参加しよう！！</h1>
            <ul>
            {["学内イベントに参加しよう！","学内イベントに参加しよう！","学内イベントに参加しよう！","学内イベントに参加しよう！","学内イベントに参加しよう！","学内イベントに参加しよう！"].map((str,i) => {
                return (
                    <li key={i}>{str}<br/></li>
                )
            })}
            </ul>
        </div>
    )
}
/**
 * Insert Element
 */
const BodyElement = document.body as HTMLBodyElement
const TOPElement = document.getElementsByClassName("TOP") 

const articleElement = document.createElement("article")
articleElement.id = "append-root"

BodyElement.insertBefore(articleElement,TOPElement.item(0) as Element)
createRoot(articleElement as HTMLElement).render(<Content />)



/**
 * Body Element Position Relative for Article Element FadeUp
 */

BodyElement.style.position = "relative"
BodyElement.style.height = "100vh"
BodyElement.style.width = "100vw"

/**
 * Article Element Style
 */
articleElement.style.position = "absolute"
articleElement.style.height = "75vh"
articleElement.style.width = "75vw"
articleElement.style.margin = "auto"
articleElement.style.inset = "auto 0"
articleElement.style.display = "flex"
articleElement.style.justifyContent = "center"
articleElement.style.flexDirection = "column"
articleElement.style.backgroundColor = "rbga(255,255,255,0.5)"
articleElement.style.zIndex = "1000"


/**
 * Animation
 */

const FadeUpkeyframes = new KeyframeEffect(
    articleElement,
    [
        {transform: "translateY(100px)",opacity: "0"},
        {transform: "translateY(0)",opacity: "1"}
    ],
    {
        duration: 10000,
        fill:"forwards"
    }
)


const FadeUpAnimate = new Animation(
    FadeUpkeyframes,
    document.timeline
)


FadeUpAnimate.play()

