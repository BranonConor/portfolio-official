import styled from 'styled-components';
import React from 'react';

export const DocsLayout = (props) => {
	const { children } = props;
	return <StyledWrapper>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
	width: 100%;
	margin: 64px 0 32px 0;

	.title {
		background: var(--dark-bg);
		border-radius: 10px;
		box-shadow: var(--nav-shadow);
		padding: 16px;
		box-sizing: border-box;
		margin: 8px 0;
	}
	.content {
		background: var(--dark-bg);
		border-radius: 10px;
		box-shadow: var(--nav-shadow);
		padding: 0;
		box-sizing: border-box;
		margin: 8px 0;
	}
`;
