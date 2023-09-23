import './styles.scss'

const CalculateSymbols = ({ setDataSymbol, dataChange }) => {

    const calcResult = () => {
        const arr = dataChange.split(' ')
        if (arr.length <= 2) return arr[0]
        const val1 = parseFloat(arr[0])
        const val2 = parseFloat(arr[2])
        let resultValue;

        switch (arr[1]) {
            case '÷':
                resultValue = val1 / val2
                break;
            case '×':
                resultValue = val1 * val2
                break;
            case '−':
                resultValue = val1 - val2
                break;
            case '+':
                resultValue = val1 + val2
                break;
            case '%':
                resultValue = (val1 / 100) / val2
                break;
            default:
                console.log('Error symbol')
        }
        setDataSymbol(resultValue.toString())
    }

    const handleSymbolChange = (e) => {
        if (/[+-\/\*\%]\s\d/.test(dataChange)) {
            calcResult()
        }
        if (!/\d/.test(dataChange.at(-1)) && e.target.innerText !== '-') return
        setDataSymbol(prev => prev + ' ' + e.target.innerText + ' ')
    }

    const removeValue = () => setDataSymbol(prev => prev = '')
    const removeLastItem = () => setDataSymbol(prev => prev = prev.slice(0, -1))

    return (
        <div className="symbol">
            <button type='button' onClick={removeValue} className="symbol__item">AC</button>
            <button type='button' onClick={removeLastItem} className="symbol__item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>
            </button>
            <button type='button' onClick={handleSymbolChange} className="symbol__item"> ÷ </button>
            <button type='button' onClick={handleSymbolChange} className="symbol__item"> × </button>
            <button type='button' onClick={handleSymbolChange} className="symbol__item"> − </button>
            <button type='button' onClick={handleSymbolChange} className="symbol__item"> + </button>
            <button type='button' onClick={calcResult} className="symbol__item"> = </button>
            <button type='button' onClick={handleSymbolChange} className="symbol__item"> % </button>
        </div>
    )
}
export default CalculateSymbols