import './styles.scss'

const Integers = ({ setDataNumber, dataChange }) => {
    const handleButtonFunc = (e) => {
        if (dataChange.length < 25) {
            setDataNumber(prev => prev.concat(e.target.innerText))
        }
    }

    const startsWithFloat = () => {
        if (dataChange.length === 0) {
            setDataNumber(prev => prev = '0.')
        } else {
            setDataNumber(prev => prev += '.')
        }
    }

    return (
        <div className="numbers">
            <button type='button' onClick={handleButtonFunc} className="numbers__item eight">8</button>
            <button type='button' onClick={handleButtonFunc} className="numbers__item seven">7</button>
            <button type='button' onClick={handleButtonFunc} className="numbers__item nine">9</button>
            <button type='button' onClick={handleButtonFunc} className="numbers__item four">4</button>
            <button type='button' onClick={handleButtonFunc} className="numbers__item five">5</button>
            <button type='button' onClick={handleButtonFunc} className="numbers__item six">6</button>
            <button type='button' onClick={handleButtonFunc} className="numbers__item one">1</button>
            <button type='button' onClick={handleButtonFunc} className="numbers__item two">2</button>
            <button type='button' onClick={handleButtonFunc} className="numbers__item three">3</button>
            <button type='button' onClick={handleButtonFunc} className="numbers__item zero">0</button>
            <button type='button' onClick={startsWithFloat} className="numbers__item dot">.</button>
        </div>
    )
}
export default Integers