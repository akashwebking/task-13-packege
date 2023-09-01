import React from 'react';
import datapackege from './packegeContent';

function Packege() {
    return (
        <div>
            <h1 className='text-center'>Packege</h1>
            {datapackege.map((result, index) => (
                <div className="container my-5 gx-5" key={index}>
                   <h3 className='text-center mb-5'> {result.title+" "+"Other Tourist Place"}</h3>
                    <div className="row">
                        
                        <div className="col">
                            <div className="accordion accordion-flush border" id={`accordionFlushExample-${index}`}>
                                {result.places.map((place, placeIndex) => (
                                    <div className="accordion-item" key={placeIndex}>
                                        <h2 className="accordion-header" id={`flush-heading-${index}-${placeIndex}`}>
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${index}-${placeIndex}`} aria-expanded="false" aria-controls={`flush-collapse-${index}-${placeIndex}`}>
                                                {`${result.title} ${place}`}
                                            </button>
                                        </h2>
                                        <div id={`flush-collapse-${index}-${placeIndex}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading-${index}-${placeIndex}`} data-bs-parent={`#accordionFlushExample-${index}`}>
                                            <div className="accordion-body">
                                                <h5>{result[`d${placeIndex + 1}roadhed`]}</h5>
                                                <p>{result[`d${placeIndex + 1}road`]}</p>
                                                <h5>{result[`d${placeIndex + 1}trainhed`]}</h5>
                                                <p>{result[`d${placeIndex + 1}train`]}</p>
                                                <h5>{result[`d${placeIndex + 1}airhed`]}</h5>
                                                <p>{result[`d${placeIndex + 1}air`]}</p>
                                                <h4>NOTE:{result.note}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Packege;
