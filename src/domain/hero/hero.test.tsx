import { composeStory } from "@storybook/react";
import { render } from "@testing-library/react";
import Meta, { Default, Soon } from "./hero.stories";

describe("[domain/hero] hero.tsx", () => {
  it("should render the default Hero component", () => {
    const Composed = composeStory(Default, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
  it("should render the soon Hero component", () => {
    const Composed = composeStory(Soon, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
});
