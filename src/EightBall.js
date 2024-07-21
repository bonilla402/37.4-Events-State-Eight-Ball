import './EightBall.css';
import './random'
import getRandomAnswer from "./random";
import {useState} from "react";

/**
 * EightBall component that displays a magic eight ball.
 * On clicking the eight ball, it shows a random answer from the provided answers.
 * Includes a reset button to reset the message to the initial state.
 *
 * @param {Array} answers - The array of possible answers.
 * @returns {JSX.Element} The EightBall component.
 */
function EightBall({answers}) {

    const initialMessage = {msg: 'Think of a Question', color: 'white'};
    const [message, setMessage] = useState(initialMessage);

    function resetMessage() {
        setMessage(initialMessage);
    }

    return (
        <div className="container">
            <div className="EightBall"
                 onClick={() => setMessage(getRandomAnswer(answers))}>
                <b className="question"
                   style={{borderColor: message.color, color: message.color}}>{message.msg}</b>
            </div>
            < button className="resetButton" onClick={resetMessage}> Reset< /button>
        </div>);
}

export default EightBall;