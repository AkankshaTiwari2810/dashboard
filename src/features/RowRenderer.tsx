import Row from '../commons/Row';
import {
  Grid,
  GridItem,
} from '@chakra-ui/react';
import _ from 'lodash';
import { useApplicationState } from '../hooks/useApplicationState';
import { Feature } from './../config/Interfaces';

type RowRendererProps = {
  rowIds: Array<number>;
}; 

const RowRenderer = (props:RowRendererProps) => {
  const { rowIds } = props;

  const [
    features,
    ,
    ,
    ,
    toggleStatus,
  ] = useApplicationState();

  const featuresForCurrentCategory = features.filter((item:Feature) => {
    if (_.includes(rowIds, item.id)) return true;
    return false;
  });

  //Find rows
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {featuresForCurrentCategory.map((item:Feature) => {
        return (
          <GridItem
            w='100%'
            h='10'
            bg={'gray.700'}
            borderRadius={'md'}
            p='2'
            key={item.id}
          >
            <Row
              data={item}
              key={item.id}
              onToggle={() => toggleStatus(item.id, item.active)}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default RowRenderer;
