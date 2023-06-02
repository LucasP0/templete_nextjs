import { CloneMe } from './CloneMe';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<CloneMe />', () => {
  it('should render', () => {
    renderTheme(<CloneMe text="Olá" />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
