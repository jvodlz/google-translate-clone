import { useState } from "react"

const Modal = ({ 
                    setShowModal, 
                    lang, 
                    selectedLang, 
                    setSelectedLang 
                }) => {
    const [searchedLang, setSearchedLang] = useState('')
    
    const filteredLang = lang.filter((lang) => lang.toLowerCase().startsWith(searchedLang.toLowerCase()))
    
    const handleClick = (e) => {
        setSelectedLang(e.target.textContent)
        setShowModal(null)
    }

    const handleChange = (e) => {
        setSearchedLang(e.target.value)
        setSelectedLang(e.target.value)
    }

    return (
        <div className="option-list">
            <div className="search-bar">
                <input value={ searchedLang } onChange={ handleChange }/>
                <div className="close-button" onClick={ () => setShowModal(null) }>
                    <svg
                        focusable="false"
                        xmlns="http://www.w8.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="option-container">
                <ul>
                    { filteredLang?.map((filteredLang, _index) => (
                        <div className="list-item">
                            <div className="icon">
                                { selectedLang === filteredLang ? '✔': '' }
                            </div>
                            <li 
                                key={ _index }
                                onClick={ handleClick }
                                style={{ color: selectedLang === filteredLang ? '#8ab4f8' : null }}
                                >
                                { filteredLang }
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Modal