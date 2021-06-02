import { mount } from "@vue/test-utils";
import BaseButton from "@/components/BaseButton";

describe("BaseButton.vue", () => {
  let wrapper = null;
  const title = "Delete";
  const type = "clear";
  beforeEach(() => {
    wrapper = mount(BaseButton, {
      propsData: { title, type },
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it("renders props when passed", () => {
    expect(wrapper.vm.title).toMatch(title);
    expect(wrapper.vm.type).toMatch(type);
  });

  it("emits an event", () => {
    wrapper.vm.$emit("delete");
    expect(wrapper.emitted().delete).toBeTruthy();
  });
});
