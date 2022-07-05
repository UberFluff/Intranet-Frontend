import {useState} from 'react';

function BottomCredits(props) {
    const [secretCount, setSecretCount] = useState(0)
    const [opacitySecret, setOpacitySecret]= useState(0)
    const [opacityCounter, setOpacityCounter] = useState(0)
    const [visibility, setVisibility] = useState(0)

    const handleClick = () => {
        let delayTime = 2000
        setOpacityCounter(opacityCounter + delayTime)
        setSecretCount(secretCount+1)
        if(secretCount+1 == 72) {
            setVisibility(1)
            setTimeout(() => {setVisibility(0)},5000)
            setSecretCount(0)
        }
        setOpacitySecret(1)
        setTimeout(() => {if(opacityCounter - delayTime <= 0) {setOpacitySecret(0); setOpacityCounter(0)}}, delayTime)
    }
    return (
        <p id="bottomCredits" onClick={handleClick}>Intranet v0.0.1 - Made with ❤️<span style={{opacity: opacitySecret}}className="tooltipSecret">You clicked me {secretCount} times</span>
        <img src={require('../assets/images/PPD.gif')} style={{opacity: visibility, transition: 'all .3s', width: '50px', position: 'fixed', bottom: 55, left: 90}}/>
        <img src={require('../assets/images/72.png')} style={{opacity: visibility, transition: 'all .3s', width: '25px', position: 'fixed', bottom: 55, left: 60}}/>
        <img src={require('../assets/images/PPG.gif')} style={{opacity: visibility, transition: 'all .3s', width: '50px', position: 'fixed', bottom: 55, left: 0}}/>
        </p>
    )
}

export default BottomCredits