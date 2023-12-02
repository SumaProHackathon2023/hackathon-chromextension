import {createRoot} from "react-dom/client"
function Content(){
    return (
        <>
            <div>
                <h1 style={{fontSize: "3em",zIndex: 99,textAlign: "center"}}>デデドン！！</h1>
            </div>
        </>
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

