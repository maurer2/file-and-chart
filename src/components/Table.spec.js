import { shallowMount } from '@vue/test-utils';
import Table from '@/components/Table.vue';

const tableData = [
  { name: 'Bob', age: '15' },
  { name: 'Boots', age: '21' },
  { name: 'Cat', age: '32' },
  { name: 'Felix', age: '44' },
  { name: 'Garfield', age: '51' },
];

describe('Table', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Table, {
      propsData: {
        tableData,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('Table snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Table contains all elements and child elements', () => {
    expect(wrapper.find('.table').exists()).toBe(true);
  });

  test('Table has head and body', () => {
    expect(wrapper.find('thead').exists()).toBe(true);
    expect(wrapper.find('tbody').exists()).toBe(true);
  });

  test('Table has correct number of rows', () => {
    expect(wrapper.findAll('thead tr').length).toBe(1);
    expect(wrapper.findAll('tbody tr').length).toBe(tableData.length);
  });

  test('Getter numberOfRows returns correct number of rows', () => {
    expect(wrapper.vm.numberOfRows).toBe(tableData.length);

    wrapper.setProps({ tableData: [] });
    expect(wrapper.vm.numberOfRows).toBe(0);
  });

  test('Getter tableColumns returns array of strings', () => {
    expect(wrapper.vm.tableColumns).toEqual(['name', 'age']);

    wrapper.setProps({ tableData: [] });
    expect(wrapper.vm.tableColumns).toEqual([]);
  });
});
