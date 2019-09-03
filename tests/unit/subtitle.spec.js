import { shallowMount } from "@vue/test-utils";
import Subtitle from "@/components/Subtitle.vue";

describe("App.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Stretch your brain with your favorite doggos.";
    const wrapper = shallowMount(Subtitle, {
      propsData: { text: msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
