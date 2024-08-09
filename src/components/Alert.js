import React from 'react'

export default function Alert(props){
    return (
        // this is tpo handle null values 
        props.alert && <div className={'alert alert-' +props.alert.type+' alert-dismissble fade show'} role="alert">
            <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
    )
}
