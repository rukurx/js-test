import assert from "power-assert" 
describe("DOM TEST", () => {
  // rendering html
  before(() => {
    document.body.innerHTML = window.__html__["test/fixtures/dom.html"];
  });
  // clear
  after(() => {
    document.body.innerHTML = "";
  });

  it("DOM TEST", () => {
    const element = document.getElementById("test");

    element.setAttribute('class', 'test');

    assert(element.getAttribute("class") === "test");
  });
});
