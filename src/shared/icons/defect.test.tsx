import { composeStory } from "@storybook/react";
import { render } from "@testing-library/react";
import Meta, { Default } from "./defect.stories";

describe("[shared/icons] defect.tsx", () => {
  it("should render the Defect component", () => {
    const Composed = composeStory(Default, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
});
