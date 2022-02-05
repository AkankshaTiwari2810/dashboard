import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

const NumberField: React.FunctionComponent<{
  value: number,
}> = (props) => {
  return (
    <NumberInput
      size='xs'
      maxW={16}
      defaultValue={props.value}
      min={0}
      max={10}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default NumberField;
