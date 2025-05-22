import { render, screen, fireEvent } from '@testing-library/react';
import MobileMenu from './MobileMenu';
import { menuItems } from './Menu';

describe('MobileMenu Component', () => {
  it('renders the hamburger menu icon', () => {
    render(<MobileMenu />);
    const hamburger = screen.getByLabelText(/ouvrir le menu/i);
    expect(hamburger).toBeInTheDocument();
  });

  it('toggles the menu on hamburger button click', () => {
    render(<MobileMenu />);
    const hamburger = screen.getByLabelText(/ouvrir le menu/i);

    fireEvent.click(hamburger);
    expect(screen.getByLabelText(/fermer le menu/i)).toBeInTheDocument();

    fireEvent.click(hamburger);
    expect(screen.getByLabelText(/ouvrir le menu/i)).toBeInTheDocument();
  });

  it('renders menu items when the menu is open', () => {
    render(<MobileMenu />);
    const hamburger = screen.getByLabelText(/ouvrir le menu/i);

    fireEvent.click(hamburger);
    menuItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it('renders the correct hamburger icon when the menu is closed', () => {
    render(<MobileMenu />);
    const hamburger = screen.getByLabelText(/ouvrir le menu/i);
    expect(hamburger).toContainHTML('<span class="hamburger-bar"></span>');
  });

  it('renders the correct cross icon when the menu is open', () => {
    render(<MobileMenu />);
    const hamburger = screen.getByLabelText(/ouvrir le menu/i);
    fireEvent.click(hamburger);
    expect(screen.getByLabelText(/fermer le menu/i)).toContainHTML(
      '<span class="hamburger-cross">×</span>'
    );
  });
});
