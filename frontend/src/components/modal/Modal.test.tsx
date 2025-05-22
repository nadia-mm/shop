import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Component", () => {
  it("should render modal when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={jest.fn()}>
        <p>Modal Content</p>
      </Modal>
    );

    expect(screen.getByText(/Modal Content/i)).toBeInTheDocument();
  });

  it("should not render modal when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={jest.fn()}>
        <p>Modal Content</p>
      </Modal>
    );

    expect(screen.queryByText(/Modal Content/i)).toBeNull();
  });

  it("should call onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        <p>Modal Content</p>
      </Modal>
    );

    fireEvent.click(screen.getByLabelText(/Fermer/i));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onSubmit when submit button is clicked", () => {
    const onSubmit = jest.fn();
    render(
      <Modal isOpen={true} onClose={jest.fn()} onSubmit={onSubmit}>
        <p>Modal Content</p>
      </Modal>
    );
    fireEvent.click(screen.getByText(/Enregistrer/i));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when "Annuler" button is clicked', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        <p>Modal Content</p>
      </Modal>
    );

    fireEvent.click(screen.getByText(/Annuler/i));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should display "Chargement..." when isLoading is true', () => {
    render(
      <Modal isOpen={true} onClose={jest.fn()} isLoading={true}>
        <p>Modal Content</p>
      </Modal>
    );

    expect(screen.getByText(/Chargement.../i)).toBeInTheDocument();
  });

  it('should call onClose when "Escape" key is pressed', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        <p>Modal Content</p>
      </Modal>
    );

    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should call onSubmit when "Enter" key is pressed', async () => {
    const onSubmit = jest.fn();
    render(
      <Modal isOpen={true} onClose={jest.fn()} onSubmit={onSubmit}>
        <p>Modal Content</p>
      </Modal>
    );

    fireEvent.keyDown(document, { key: "Enter", code: "Enter" });
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  it('should not call onSubmit when "Enter" key is pressed if modal is closed', () => {
    const onSubmit = jest.fn();
    render(
      <Modal isOpen={false} onClose={jest.fn()} onSubmit={onSubmit}>
        <p>Modal Content</p>
      </Modal>
    );

    fireEvent.keyDown(document, { key: "Enter", code: "Enter" });
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
