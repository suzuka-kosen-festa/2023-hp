import { composeStory } from "@storybook/react";
import { render } from "@testing-library/react";
import Meta, { Default } from "./right-big-cloud.stories";

describe("[shared/icons] right-big-cloud.tsx", () => {
  it("should render the Right Big Cloud component", () => {
    const Composed = composeStory(Default, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
});
