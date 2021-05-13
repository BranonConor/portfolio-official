import './spotify-card.css'

import React from 'react'

const SpotifyCard = (props) => {

    return (
        <div className='SpotifyCard'>
            <iframe src={`https://open.spotify.com/embed/album/${props.trackId}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    );
};

export default SpotifyCard