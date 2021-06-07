import { RouterLinkStub, shallowMount, mount } from "@vue/test-utils";

import Movies from "@/views/Movies";

describe("test Movies component", () => {
  const movies = [
    {
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
  ];
  it("should call getMovies", async () => {
    const mockMethod = jest.spyOn(Movies.methods, "getMovies");
    await shallowMount(Movies, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
      propsData: {
        movies: movies,
      },
    });
    expect(mockMethod).toHaveBeenCalled();
  });

  it("should render Loader", () => {
    const wrapper = mount(Movies, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    expect(wrapper.contains(".loader")).toBe(true);
    expect(wrapper.contains(".movie-list")).toBe(false);
  });

  it("should render Movies List when isLoading is false", async () => {
    const wrapper = mount(Movies, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    await wrapper.setData({ movies: movies, isloading: false });
    expect(wrapper.contains(".loader")).toBe(false);
    expect(wrapper.contains(".movie-list")).toBe(true);
  });
});
