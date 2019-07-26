import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  let wrapper;

  const mockedHandleFormChange = jest.fn();

  beforeEach(() => {
    wrapper = shallowMount(App, {});
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('App snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('App contains all elements and child elements', () => {
    expect(wrapper.find('.app').exists()).toBe(true);
    expect(wrapper.find('.title').exists()).toBe(true);
    expect(wrapper.findAll('.subtitle').exists()).toBe(true);
  });

  test('App has only form section when inputData is not set', () => {
    expect(wrapper.findAll('.section').length).toBe(1);
    expect(wrapper.find('form-stub').exists()).toBe(true);
    expect(wrapper.find('table-stub').exists()).toBe(false);
    expect(wrapper.find('charts-stub').exists()).toBe(false);
  });

  test('App has table section when inputData is set', () => {
    expect(wrapper.find('table-stub').exists()).toBe(false);

    wrapper.setData({ inputData: ['cat'] });

    expect(wrapper.find('table-stub').exists()).toBe(true);
  });

  test('App has chart section when inputData is set', () => {
    expect(wrapper.find('charts-stub').exists()).toBe(false);

    wrapper.setData({ inputData: ['cat'] });

    expect(wrapper.find('charts-stub').exists()).toBe(true);
  });

  test('Getter showTable returns correct value when inputData is set', () => {
    expect(wrapper.vm.showTable).toBe(false);

    wrapper.setData({ inputData: ['cat'] });

    expect(wrapper.vm.showTable).toBe(true);
  });

  test('Getter showCharts returns correct value when inputData is set', () => {
    expect(wrapper.vm.showCharts).toBe(false);

    wrapper.setData({ inputData: ['cat'] });

    expect(wrapper.vm.showCharts).toBe(true);
  });

  test('Form handleFormChange method is called when fileUpload event is triggered from child', () => {
    wrapper.setMethods({ handleFormChange: mockedHandleFormChange });

    wrapper.find('form-stub').vm.$emit('fileUpload');

    expect(mockedHandleFormChange).toBeCalled();
  });
});
