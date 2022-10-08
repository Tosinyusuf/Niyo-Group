
import { render } from '@testing-library/react';
import Collection from '../../pages/Home';
import { Gallery } from '../../pages/Home/components/Gallery'
import { MemoryRouter as Router } from 'react-router-dom';

describe('Test for Collection card availability', () => {

  it("test if input locates in component", () => {
    const { getByTestId } = render(<Collection />);
    const searched = getByTestId("search");
    expect(searched).toBeTruthy();
  });

  it("test if data is rendered in the component", () => {
    const { getByTestId } = render(<Router><Gallery /></Router>);
    const result = getByTestId("displaySearch");
    expect(result).toBeTruthy();
  });

});
