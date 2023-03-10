import React, { useState } from 'react'
import Alert from './Alert';

export default function AlertBox() {
    const [showAlert, setAlert] = useState(true);
    const [closeAlert, setClose] = useState(true);

    function EventClick(e) {
        e.target.parentElement.parentElement.classList.add("fade-alert");
        if (e) {
            setTimeout(() => {
                setAlert(false);
            }, 500);
        }
        else {
            console.log("hello");
        }
    }
   
    return (
        <div>
            <h1 className='title'>Alert Box - APP</h1>
            <div>
                {showAlert && (
                    <Alert clickicon={'x'} title={'Cross Click Alert'} className={'sucess-alert'} event={EventClick} />
                )}
            </div>
            <div>
                {closeAlert && (
                    <Alert title={'Auto Close Alert (5 Seconds)'} className={'close-alert'} event={setTimeout((e) => {
                        setClose(false);
                    }, 5000)} />
                )}
            </div>
        </div>
    )
}
