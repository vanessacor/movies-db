import { RouterLinkStub, shallowMount } from "@vue/test-utils";

import MovieCard from "@/components/MovieCard";

describe("test Movie Card", () => {
  const wrapper = shallowMount(MovieCard, {
    stubs: {
      RouterLink: RouterLinkStub,
    },

    propsData: {
      movie: {
        title: "Mock movie",
        director: "Vanessa",
        description:
          "lorem Ipsum lorem Ipsumlorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsumlorem Ipsum lorem Ipsumlorem Ipsum lorem Ipsum",
        poster: "https://somewhere.com.somepic.jpg",
        duration: "133",
        rating: "5",
        genre: "Mock",
        year: "1997",
        id: 9,
      },
    },
  });
  it("should render movie title", () => {
    expect(wrapper.text()).toContain("Mock movie");
  });
  it("should render img", () => {
    const image = wrapper.find("img");
    expect(image.exists()).toBe(true);
  });
  it("should render the routerLink", () => {
    const link = wrapper.find(RouterLinkStub);
    expect(link.props().to.name).toEqual("movieDetails");
    expect(link.props().to.params).toEqual({ id: 9 });
  });
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
