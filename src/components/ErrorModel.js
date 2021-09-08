import React from 'react'

function ErrorModel(props) {
    return (
        <div>
            <header>{props.title}</header>
        <body>{props.message}</body>
        
        <button onClick={props.onConfirm}> 
                okey
            </button>

        </div>
    )
}

export default ErrorModel
