import { composeStory } from "@storybook/react";
import { render } from "@testing-library/react";
import Meta, { Default } from "./left-big-cloud.stories";

describe("[shared/icons] left-big-cloud.tsx", () => {
  it("should render the Left Big Cloud component", () => {
    const Composed = composeStory(Default, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
});
