import React from 'react'

const GifList = (props) => {
    // is a presentational component
    return(
        <div>
            <ul>
                {props.gifArr.map(gif => <li key={gif.id} ><img src={gif.images.original.url} alt=''/></li>)}
            </ul>
        </div>
    )
}

export default GifList;