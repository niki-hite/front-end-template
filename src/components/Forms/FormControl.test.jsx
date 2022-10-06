import { render, screen } from '@testing-library/react';
import { InputControl, SelectControl,
  TextAreaControl, CheckBox, FormButton } from './FormControl.jsx';

test('input control should work', async () => {
  render(
    <InputControl
      label="FAV COLOR"
      name="color"
      required
      placeholder="FIRST FAV"
    />
  );

  const inputControl = screen.getByLabelText('FAV COLOR');
  expect(inputControl.name).toEqual('color');
  expect(inputControl.placeholder).toEqual('FIRST FAV');
  expect(inputControl.required).toEqual(true);
});

test('select control should render', async () => {
  render(
    <SelectControl label="shade" name="shade" required>
      <option value="1">LIGHT</option>
      <option value="2">DARK</option>
      <option value="3">DARKER</option>
    </SelectControl>
  );
  const selectControl = screen.getByLabelText('shade');
  expect(selectControl.name).toEqual('shade');
  expect(selectControl.required).toEqual(true);
  expect(selectControl.options.length).toEqual(3);
});

test('text area control should render', async () => {
  render(<TextAreaControl
    required
    label="color bio"
    name="bio"
    placeholder="why do you love the color(s) (optional)" />
  );
    
  const textControl = screen.getByLabelText('color bio');
  expect(textControl.name).toEqual('bio');
  expect(textControl.placeholder)
    .toEqual('why do you love the color(s) (optional)');
  expect(textControl.required).toEqual(true);
});

test('checkbox should render', async () => {
  render(<CheckBox
    required
    legend="submit?"
    label="yessir"
    name="Submit"/>);
    
  const legend = screen.getByText('submit?');
  expect(legend).not.toBeNull();
  const checkBox = screen.getByLabelText('yessir');
  expect(checkBox.name).toEqual('Submit');
  expect(checkBox.required).toEqual(true);
});

test('button should render, preferably for submission', async () => {
  render(<FormButton type="submit">Submit</FormButton>);
    
  const button = screen.getByRole('button');
  expect(button.textContent).toEqual('Submit');
});
