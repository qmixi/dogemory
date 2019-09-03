import { shallowMount } from "@vue/test-utils";
import Title from "@/components/Title.vue";

describe("App.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Dogemory";
    const wrapper = shallowMount(Title, {
      propsData: { text: msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
