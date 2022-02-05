import React from 'react';
import Row from '../commons/Row';
import { Box, VStack, StackDivider } from '@chakra-ui/react';
import _ from 'lodash';
import SubCategoryRenderer from './SubCategoryRenderer';
import { useApplicationState } from '../hooks/useApplicationState';
import { Feature } from './../config/Interfaces';

const GroupRenderer: React.FunctionComponent<{rowIds: Array<number>;}> = (props) => {
  const { rowIds } = props;

  const [
    features,
    ,
    getItemSubcategories,
    showSubcategories,
    toggleStatus,
  ] = useApplicationState();

  const featuresForCurrentCategory = features.filter((item: Feature) => {
    if (_.includes(rowIds, item.id)) return true; return false;
  });

  return (
    <Box
      borderWidth='1px'
      borderColor={'gray.600'}
      borderRadius={'sm'}
      bg={'gray.700'}
    >
      <VStack
        spacing={2}
        align='stretch'
        divider={<StackDivider borderColor='gray.600' />}
      >
        {featuresForCurrentCategory.map((item: Feature) => {
          return (
            <Box key={item.id}>
              <Box p={2}>
                <Row
                  data={item}
                  key={item.id}
                  onToggle={() => toggleStatus(item.id)}
                  expandable={getItemSubcategories(item.id) ? true : false}
                />
              </Box>
              {showSubcategories(item.id) && (
                <SubCategoryRenderer
                  subCategories={getItemSubcategories(item.id)}
                />
              )}
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
};

export default GroupRenderer;
