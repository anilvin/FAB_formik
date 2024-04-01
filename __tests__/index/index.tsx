// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import Home from '../../pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
