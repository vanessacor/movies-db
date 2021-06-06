import { mount } from "@vue/test-utils";
import InputText from "@/components/InputText";

describe("test InputText.vue", () => {
  let wrapper = null;
  const value = "Vanessa trip";
  const label = "Insert the title here";
  beforeEach(() => {
    wrapper = mount(InputText, {
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
    wrapper.vm.$emit("input");
    expect(wrapper.emitted().input).toBeTruthy();
  });

  it("match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
