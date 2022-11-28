import renderer from "react-test-renderer";

import IndexPage from "../pages/test";

it("renders index unchanged", () => {
  const tree = renderer.create(<IndexPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
