import { composeStory } from "@storybook/react";
import { render } from "@testing-library/react";
import Meta, { H1, H2, H3, H4, H5, H6 } from "./heading.stories";

describe("[shared/ui/heading] heading.tsx", () => {
  it("should render the h1 component", () => {
    const Composed = composeStory(H1, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
  it("should render the h2 component", () => {
    const Composed = composeStory(H2, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
  it("should render the h3 component", () => {
    const Composed = composeStory(H3, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
  it("should render the h4 component", () => {
    const Composed = composeStory(H4, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
  it("should render the h5 component", () => {
    const Composed = composeStory(H5, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
  it("should render the h6 component", () => {
    const Composed = composeStory(H6, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
});
