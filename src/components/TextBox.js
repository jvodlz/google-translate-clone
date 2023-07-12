import SelectDropDown from "./SelectDropDown"

const TextBox = ({ 
                    selectedLang, 
                    style, 
                    setShowModal, 
                    setTextToTranslate, 
                    textToTranslate, 
                    translatedText, 
                    setTranslatedText 
                }) => {

    const handleClick = () => {
        setTranslatedText('')
        setTextToTranslate('')
    }

    return (
        <div className={style}>
            <SelectDropDown
                style={style}
                setShowModal={setShowModal}
                selectedLang={selectedLang}
            />
            <textarea
                placeholder={style == 'input' ? 'Enter Text' : 'Translation'}
                disabled={style === 'output'}
                onChange={(e) => setTextToTranslate(e.target.value)}
                value={style === 'input' ? textToTranslate : translatedText}
            />
            { style === 'input' && (
                <div className="delete" onClick={handleClick}>
                    <div class="close-button">
                        <svg focusable="false" xmlns="http://www.w8.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                            </path>
                        </svg>
                    </div>
                </div>
            ) }
        </div>
    )
}
export default TextBox