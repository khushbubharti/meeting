


import '@testing-library/jest-dom';
import React from 'react';

import Flex from '../../../../src/components/ui/Flex';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('Flex', () => {
  it('should render a Flex without specified props', () => {
    const component = <Flex />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const element = getByTestId('flex');

    expect(element).toBeInTheDocument();
  });

  it('should render a Flex with text', () => {
    const childrenContent = 'children-content';
    const component = <Flex>{childrenContent}</Flex>;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const element = getByTestId('flex');

    expect(element).toHaveTextContent(childrenContent);
  });
});
