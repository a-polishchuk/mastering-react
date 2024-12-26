import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef } from 'react';
import { updateArrayElement } from 'utils/updateArrayElement';

import classes from './PinInput.module.css';

export interface PinInputHandle {
  focus: () => void;
}

export interface PinInputProps {
  digits: string[];
  onChange: (newDigits: string[]) => void;
}

const Input: ForwardRefRenderFunction<PinInputHandle, PinInputProps> = (
  props,
  ref
) => {
  const { digits, onChange } = props;
  const inputRefs = useRef(new Array<HTMLInputElement | null>(digits.length));

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRefs.current[0]?.focus();
    },
  }));

  const handleChange = (index: number, newValue: string) => {
    const oldDigit = digits[index];
    const newDigit = newValue.trim().replace(oldDigit, '');
    if (newDigit < '0' || newDigit > '9') {
      return;
    }
    onChange(updateArrayElement(digits, index, newDigit));
    const inputs = inputRefs.current;
    if (index < inputs.length - 1) {
      inputs[index + 1]?.focus();
    } else {
      inputs[index]?.blur();
    }
  };

  const handleKeyDown = (index: number, keyPressed: string) => {
    if (keyPressed !== 'Backspace') {
      return;
    }
    if (digits[index]) {
      onChange(updateArrayElement(digits, index, ''));
    } else if (index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <>
      {digits.map((digit, index) => (
        <input
          key={index}
          className={classes.pinInput}
          value={digit}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event.nativeEvent.key)}
          ref={(ref) => {
            inputRefs.current[index] = ref;
          }}
          autoComplete="nope"
        />
      ))}
    </>
  );
};

export const PinInput = forwardRef(Input);
