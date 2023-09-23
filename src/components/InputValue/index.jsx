import './styles.scss'

const InputValue = ({ dataChange, setDataNumber }) => {
    return (
        <div className='input__block'>
            <span>
                {dataChange}
            </span>
            <p className="input__value">{dataChange}</p>
        </div>
    )
}
export default InputValue