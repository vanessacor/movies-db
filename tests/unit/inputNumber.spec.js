import { mount } from "@vue/test-utils";
import InputNumber from "@/components/InputNumber";

describe("test InputText.vue", () => {
  let wrapper = null;
  const value = "4";
  const label = "Rate the movie";
  beforeEach(() => {
    wrapper = mount(InputNumber, {
      propsData: { value, label },
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it("renders props when passed", () => {
    expect(wrapper.vm.value).toMatch(value);
    expect(wrapper.vm.label).toMatch(label);
  });

  it("emits an event", () => {
    wrapper.vm.$emit("rating");
    expect(wrapper.emitted().rating).toBeTruthy();
  });
});
