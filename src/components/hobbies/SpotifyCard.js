import React from 'react';
import styled from 'styled-components';

const SpotifyCard = (props) => {
	return (
		<StyledWrapper>
			<iframe
				src={`https://open.spotify.com/embed/album/${props.trackId}`}
				frameborder='0'
				allowtransparency='true'
				allow='encrypted-media'></iframe>
		</StyledWrapper>
	);
};

export default SpotifyCard;

const StyledWrapper = styled.div`
	width: 100%;
	height: 200px;
	border-radius: 10px;
	padding: 0;
	margin: 0 16px 16px 0;

	iframe {
		width: 100%;
		height: 300px;
		border-radius: 10px;
	}
`;
