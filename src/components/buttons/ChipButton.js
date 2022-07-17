import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ChipButton = (props) => {
	const {
		content,
		link,
		isSecondary,
		isTertiary,
		animationTime,
		animationType,
	} = props;

	return (
		<StyledChip
			initial={{ rotate: 345, scale: 0, opacity: 0 }}
			animate={{
				rotate: 360,
				scale: 1,
				opacity: 1,
			}}
			transition={{
				type: animationType,
				duration: animationTime,
			}}
			isSecondary={isSecondary}
			isTertiary={isTertiary}
			href={link}>
			{content}
		</StyledChip>
	);
};

export default ChipButton;

const StyledChip = styled(motion.a)(
	({ isSecondary, isTertiary }) => `
  height: auto;
  width: auto;
  padding: 8px 16px;
  background: ${
		(isSecondary && '#0080c7') || (isTertiary ? '#111111' : '#ff0096')
  };
  border-radius: 20px;
  margin: 4px;

  &:hover {
    background: ${isTertiary ? '#222222' : '#189ee6'};
  }
`
);
