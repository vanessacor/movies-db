import { shallowMount } from "@vue/test-utils";

import Header from "@/components/AppHeader";

describe("test Header.vue component", () => {
  it("matches the snapshot", () => {
    const wrapper = shallowMount(Header, {
        stubs: ['router-link', 'router-view']
    });
    expect(wrapper).toMatchSnapshot();
  });
});
