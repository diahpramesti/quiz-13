import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "./homePage";

test('renders learn react link', () => {
    render(<HomePage/>);

    const title = screen.getByText(/Home Page for Posts/i);
    expect(title).toBeInTheDocument();

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Show Detail');

    fireEvent.click(btn)

})