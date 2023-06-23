import { composeStory } from "@storybook/react";
import { render } from "@testing-library/react";
import Meta, { Default } from "./cloud-3.stories";

describe("[shared/icons] cloud-3.tsx", () => {
  it("should render the Cloud component", () => {
    const Composed = composeStory(Default, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
});
