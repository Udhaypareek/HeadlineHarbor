import React from 'react'

export default function Spinner(){
    return (
        <>
        <div className="text-center justify-content-center">
        <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        </>
    )
}
