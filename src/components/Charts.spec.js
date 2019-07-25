import { shallowMount } from '@vue/test-utils';
import 'jest-canvas-mock';
import Charts from '@/components/Charts.vue';

const chartData = [
  { name: 'Bob', age: '15' },
  { name: 'Boots', age: '21' },
  { name: 'Cat', age: '32' },
  { name: 'Felix', age: '44' },
  { name: 'Garfield', age: '51' },
];

describe('Charts', () => {
  let wrapper;

  const mockedCreateBarChart = jest.fn();
  const mockedCreateCircleChart = jest.fn();

  beforeEach(() => {
    wrapper = shallowMount(Charts, {
      propsData: {
        chartData,
      },
      attachToDocument: true,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('Charts snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Charts contains all elements and child elements', () => {
    expect(wrapper.find('.charts').exists()).toBe(true);
    expect(wrapper.find('.chart-container:nth-child(1)').exists()).toBe(true);
    expect(wrapper.find('.chart-container:nth-child(2)').exists()).toBe(true);
    expect(wrapper.find('.barchart').exists()).toBe(true);
    expect(wrapper.find('.circlechart').exists()).toBe(true);
  });

  test('Getter chartLabels returns array of strings', () => {
    expect(wrapper.vm.chartLabels).toEqual(['Bob', 'Boots', 'Cat', 'Felix', 'Garfield']);

    wrapper.setProps({ chartData: [] });
    expect(wrapper.vm.chartLabels).toEqual([]);
  });

  test('Getter chartValues returns array of numbers', () => {
    expect(wrapper.vm.chartValues).toEqual(['15', '21', '32', '44', '51']);

    wrapper.setProps({ chartData: [] });
    expect(wrapper.vm.chartValues).toEqual([]);
  });

  test('Charts barChart and circleChart are defined', () => {
    expect(wrapper.vm.barChart).toBeDefined();
    expect(wrapper.vm.circleChart).toBeDefined();
  });

  test('Cart new props trigger chart creation', () => {
    wrapper.setMethods({ createBarChart: mockedCreateBarChart });
    wrapper.setMethods({ createCircleChart: mockedCreateCircleChart });

    wrapper.setProps({ chartData: chartData.slice(1) });

    expect(mockedCreateBarChart).toBeCalled();
    expect(mockedCreateCircleChart).toBeCalled();
  });
});
