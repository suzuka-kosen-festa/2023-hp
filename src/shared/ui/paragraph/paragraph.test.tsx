import { composeStory } from "@storybook/react";
import { render } from "@testing-library/react";
import Meta, { Default } from "./paragraph.stories";

describe("[shared/ui/paragraph] paragraph.tsx", () => {
  it("should render the Paragraph component", () => {
    const Composed = composeStory(Default, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
});
