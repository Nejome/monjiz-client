import { render, screen } from "@testing-library/react";
import Provider from "../components/Provider";

describe("Provider component", () => {
    it("should render Provider component correctly", () => {
        const provider = {
            user: {
                name: 'علي',
            },
            image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            category: {
                title: 'البرمجة والتطوير'
            },
            country: 'السودان'
        }

        render(<Provider provider={provider}/>);

        const element = screen.getByText('علي');

        expect(element).toBeInTheDocument();
    });
});