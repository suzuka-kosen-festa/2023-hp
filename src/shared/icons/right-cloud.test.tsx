import { composeStory } from "@storybook/react";
import { render } from "@testing-library/react";
import Meta, { Default } from "./right-cloud.stories";

describe("[shared/icons] right-cloud.tsx", () => {
  it("should render the Right Cloud component", () => {
    const Composed = composeStory(Default, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
});
