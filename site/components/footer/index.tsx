import { styled } from '@app/styles';
import Link from 'next/link';
import * as React from 'react';
import { Box } from '../box';
import { Text } from '../text';

const StyledFooter = styled('div', {
  px: '$4',
  py: '$6',
  borderTop: '1px solid $grayA5',
  color: '$slate11',
  fontSize: '$1',
  display: 'flex',
  a: {
    textDecoration: 'underline',
  },
});
export const Footer = () => {
  return (
    <StyledFooter>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$3',
          margin: '0 auto',
          width: 'auto',
          flex: 1,
        }}
      >
        <Box>
          Made with{' '}
          <Text
            css={{
              fontSize: 'inherit',
              color: '$primary',
              display: 'inline',
              lineHeight: 'inherit',
              margin: 0,
            }}
          >
            ♥︎
          </Text>{' '}
          by <Link href="https://twitter.com/prevwong">@prevwong</Link>
        </Box>
        <Box>
          Composite is released under the{' '}
          <Link href="https://github.com/prevwong/LICENSE">MIT license</Link>
        </Box>
      </Box>
    </StyledFooter>
  );
};