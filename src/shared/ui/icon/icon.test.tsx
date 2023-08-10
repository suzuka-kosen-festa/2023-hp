import { composeStory } from "@storybook/react";
import { render } from "@testing-library/react";
import Meta, {
  Cloud1,
  Cloud2,
  Cloud3,
  Cloud4,
  Cloud5,
  Defect,
  LogoStatic,
} from "./icon.stories";

describe("[shared/ui/icon] icon.tsx", () => {
  it("should render the defect component", () => {
    const Composed = composeStory(Defect, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
  it("should render the cloud1 component", () => {
    const Composed = composeStory(Cloud1, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
  it("should render the cloud2 component", () => {
    const Composed = composeStory(Cloud2, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
  it("should render the cloud3 component", () => {
    const Composed = composeStory(Cloud3, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
  it("should render the cloud4 component", () => {
    const Composed = composeStory(Cloud4, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
  it("should render the cloud5 component", () => {
    const Composed = composeStory(Cloud5, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
  it("should render the logoStatic component", () => {
    const Composed = composeStory(LogoStatic, Meta);
    const { container } = render(<Composed />);
    expect(container).toMatchSnapshot();
  });
});
