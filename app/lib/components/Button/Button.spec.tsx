import { render, screen } from '@testing-library/react';
import { Button } from '~/lib/components/Button';

describe('Button tests', () => {
  test('should render button', () => {
    render(<Button />);

    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });
});
