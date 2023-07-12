import { useEffect, useState } from "react"

import TextBox from "./components/TextBox"
import Arrows from "./components/Arrows"
import Button from "./components/Button"
import Modal from "./components/Modal"
import axios from "axios"

const App = () => {

  const [showModal, setShowModal] = useState(null)
  const [inputLang, setInputLang] = useState('English')
  const [outputLang, setOutputLang] = useState('French')
  const [lang, setLang] = useState(null)
  const [langDictionary, setLangDictionary] = useState({})
  const [textToTranslate, setTextToTranslate] = useState('')
  const [translatedText, setTranslatedText] = useState('')

  const getLang = async () => {
    const options = {
      method: 'GET',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
      headers: {
        'X-RapidAPI-Key': "Enter your API key",
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const arrayOfLang = [];
      let langName = new Intl.DisplayNames(["en"], { type: "language" });
      response.data.data.languages.forEach(element => {
        const key = langName.of(element.language)
        const value = element.language
        if (langName.of(element.language)[0] === langName.of(element.language)[0].toUpperCase()) {
          arrayOfLang.push(langName.of(element.language));
          setLangDictionary(langDictionary => ({ ...langDictionary, [key]: value }))
        }
      })

      setLang(arrayOfLang)

    } catch (error) {
      console.error(error);
    }
  }

  const translate = async () => {

    const encodedParams = new URLSearchParams();
    encodedParams.set('q', textToTranslate);
    encodedParams.set('target', langDictionary[outputLang]);
    encodedParams.set('source', langDictionary[inputLang]);

    const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': "Enter your API key",
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data.translations[0].translatedText);
      setTranslatedText(response.data.data.translations[0].translatedText)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getLang()
  }, [])

  const handleClick = () => {
    setInputLang(outputLang)
    setOutputLang(inputLang)
  }

  return (
    <div className="app">
      {!showModal && <>
        <TextBox
          selectedLang={inputLang}
          style='input'
          setShowModal={setShowModal}
          textToTranslate={textToTranslate}
          setTextToTranslate={setTextToTranslate}
          setTranslatedText={setTranslatedText}
        />
        <div className="arrow-container" onClick={handleClick}>
          <Arrows />
        </div>
        <TextBox
          selectedLang={outputLang}
          style='output'
          setShowModal={setShowModal}
          translatedText={translatedText}
        />
        <div className="button-container" onClick={translate}>
          <Button />
        </div>
      </>}
      {showModal &&
        <Modal
          setShowModal={setShowModal}
          lang={lang}
          selectedLang={showModal == 'input' ? inputLang : outputLang}
          setSelectedLang={showModal == 'input' ? setInputLang : setOutputLang}
        />}
    </div>
  )
}

export default App