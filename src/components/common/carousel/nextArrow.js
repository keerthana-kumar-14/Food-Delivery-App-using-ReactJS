import React from 'react'

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className}
        style={{ ...style, 
        background: 'white',
        borderRadius: '50%',
        display: 'flex',
        padding: '4px',
        justifyContent: 'center',
        alignItems: 'center',
        }}
        onClick={onClick} >
        
        </div>
    )
}

export default NextArrow
