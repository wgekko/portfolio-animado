import React, {useRef, useEffect} from 'react'
import './Content.css'
function Content({timeline}) {
    let h1 = useRef(null);
    let pText = useRef(null);
    let btn = useRef(null);
    useEffect(() => {
        timeline.from([h1.children, pText, btn], 1,{
            opacity: 0,
            y: "100",
            skewY: 10,
            stagger: {
                amount: .4
            }
        },"-=1")
    })
    return (
        <div>
            <div className="content">
                <h1 className="content-inner-bold" ref= {el=>h1=el}>
                    <div>El trabajo duro supera al talento</div>
                    <br />
                    <div>cuando el talento no trabaja duro.</div>
                </h1>
                <p ref= {el=>pText=el}>
                    Desarrollo de comentarios y demas items que se deseo explicar o desarrollar

                </p>
                <button ref= {el=>btn=el}>
                    Explorar
                </button>
            </div>
        </div>
    )
}

export default Content
