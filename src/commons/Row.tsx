import React from 'react';
import { Flex, Heading, Spacer, Switch } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NumberField from './NumberField';
import _ from 'lodash';

interface Props {
  expandable?: boolean;
  onToggle: () => void;
  data: {
    title: string;
    active: boolean;
    count?: number;
  };
}

const Row = (props: Props) => {
  const { title, active, count } = props.data;
  const { onToggle, expandable } = props;

  return (
    <Flex>
      <Heading size='xs'>{title}</Heading>
      <Spacer />
      <Flex gap={2}>
        {!_.isUndefined(count) && <NumberField value={count} />}
        <Spacer />
        <Switch isChecked={active} onChange={onToggle} />
        {expandable && <ChevronDownIcon />}
      </Flex>
    </Flex>
  );
};

export default Row;
