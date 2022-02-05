import Row from '../commons/Row';
import {
  VStack,
  Box
} from '@chakra-ui/react';

import _ from 'lodash';
import { useApplicationState } from '../hooks/useApplicationState';
import { Feature } from './../config/Interfaces';

type SubCategoryRendererProps = {
  subCategories: Array<number>;
}; 

const SubCategoryRenderer =(props:SubCategoryRendererProps)=>{
  const { subCategories } = props;

  const [
    features,
    ,
    ,
    ,
    toggleStatus,
  ] = useApplicationState();

  const subCategoryRows = features.filter((item:Feature) => {
    if (_.includes(subCategories, item.id)) return true
    return false;
  });
  //Find rows
  return (
    <VStack>
      {subCategoryRows.map((item:Feature) => {
        return (
          <Box w='100%' px={4} py={2} key={item.id}>
            <Row
              data={item}
              key={item.id}
              onToggle={() => toggleStatus(item.id)}
            />
          </Box>
        );
      })}
    </VStack>
  );
};

export default SubCategoryRenderer;
