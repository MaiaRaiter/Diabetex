import React, { useState } from 'react';
import Html5QrcodePlugin from './ScannerPlugin'
import {Navbar} from './Navbar'
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";


function filterResults (results) {
    let filteredResults = [];
    for (var i = 0; i < results.length; ++i) {
        if (i === 0) {
            filteredResults.push(results[i]);
            continue;
        }

        if (results[i].decodedText !== results[i - 1].decodedText) {
            filteredResults.push(results[i]);
        }
    }
    return filteredResults;
}

const ResultContainerTable = ({ data }) => {
    const results = filterResults(data);
    return (
        <table className={'Qrcode-result-table'}>
            <thead>
                <tr>
                  
                </tr>
            </thead>
            <tbody>
                {
                    results.map((result, i) => {
                        console.log(result);
                        return (<tr key={i}>
                            <td>{i}</td>
                            <td>{result.decodedText}</td>
                            <td>{result.result.format.formatName}</td>
                        </tr>);
                    })
                }
            </tbody>
        </table>
    );
};

const ResultContainerPlugin = (props) => {
    const results = filterResults(props.results);
    return (
        <div className='Result-container'>
            <div className='Result-header'>Scanned results ({results.length})</div>
            <div className='Result-section'>
               
            </div>
        </div>
    );
};

const App = (props) => {
  const [decodedResults, setDecodedResults] = useState([]);
  const [decodedText, setDecodedText] = useState(""); 
  const navigate = useNavigate();

  const onNewScanResult = (decodedText, decodedResult) => {
      console.log("App [result]", decodedResult);
      console.log("AdecodedText", decodedText);
      setDecodedText(decodedText);
      setDecodedResults(prev => [...prev, decodedResult]);
      console.log(props)
      navigate(`/Producto/${decodedText}`)
  };

  return (
      <div className="App">
          <section className="App-section">
              <div className="App-section-title"> </div>
              <br />
              <br />
              <br />
              <Html5QrcodePlugin
                  fps={10}
                  qrbox={250}
                  disableFlip={false}
                  qrCodeSuccessCallback={onNewScanResult}
              />

          </section>
          <Navbar />
      </div>
      
       
  );

};

export default App;
