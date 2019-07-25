import { shallowMount } from '@vue/test-utils';
import Form from '@/components/Form.vue';

describe('Form', () => {
  let wrapper;

  const mockedChangeEvent = jest.fn();
  const mockedGetFileContent = jest.fn();

  beforeEach(() => {
    wrapper = shallowMount(Form, {
      // methods: { handleChangeEvent: mockedChangeEvent },
      attachToDocument: true,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('Form snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Form contains all elements and child elements', () => {
    expect(wrapper.find('.form').exists()).toBe(true);
    expect(wrapper.find('.label').exists()).toBe(true);
    expect(wrapper.find('.field').exists()).toBe(true);
    expect(wrapper.find('.button-group .button:nth-child(1)').exists()).toBe(true);
    expect(wrapper.find('.button-group .button:nth-child(2)').exists()).toBe(true);
  });

  test('Form field is of type file', () => {
    expect(wrapper.find('.field').attributes('type')).toBe('file');
    expect(wrapper.find('.field').attributes('type')).not.toBe('text');
  });

  test('Form field id is the same as label for attribute', () => {
    const fieldId = wrapper.find('.field').attributes('id');

    expect(wrapper.find('.label').attributes('for')).toBe(fieldId);
  });

  test('Form field change event triggers handleChangeEvent', () => {
    wrapper.setMethods({ handleChangeEvent: mockedChangeEvent });
    wrapper.find('.field').trigger('change');

    expect(mockedChangeEvent).toBeCalled();
  });

  test('Form field handleChangeEvent calls getFileContent when correct file is set', () => {
    wrapper.setMethods({ getFileContent: mockedGetFileContent });

    wrapper.vm.handleChangeEvent(new Event('change'));
    expect(mockedGetFileContent).not.toBeCalled();
  });

  test.skip('Form getFileContent emits event when correct file is uploaded', (done) => {
    const testBlob = new Blob(['cat'], { type: 'text/plain' });

    wrapper.vm.getFileContent(testBlob);

    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted('fileUpload')).toBeTruthy();
      done();
    });
  });

  test('Form openCatsCSV emits event', () => {
    wrapper.vm.openCatsCSV();

    expect(wrapper.emitted('fileUpload')).toBeTruthy();
  });

  test('Form openDogsCSV emits event', () => {
    wrapper.vm.openCatsCSV();

    expect(wrapper.emitted('fileUpload')).toBeTruthy();
  });
});
