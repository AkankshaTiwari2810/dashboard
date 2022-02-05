import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, GridItem, Heading, Box } from '@chakra-ui/react';
import RowRenderer from './RowRenderer';
import GroupRenderer from './GroupRenderer';
import { Category } from './../config/Interfaces';

const PanelRenderer: React.FunctionComponent = () => {
  const categories = useSelector((state: any) => state.categories);

  const categoriesWithGroup = categories.filter((category: Category) => {
    if (category.group) return true; return false;
  });

  const categoriesWithoutGroup = categories.filter((category: Category) => {
    if (!category.group) return true; return false;
  });

  return (
    <Container maxW='container.xl' p={20}>
      {categoriesWithoutGroup.map((category: Category) => {
        return (
          <Box key={category.id}>
            <Heading as={'h3'} fontSize={'sm'} mb={4}>
              {category.title}
            </Heading>
            <RowRenderer rowIds={category.items} />
          </Box>
        );
      })}

      <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={10}>
        {categoriesWithGroup.map((category: Category) => {
          return (
            <GridItem key={category.id}>
              <Heading as={'h3'} fontSize={'sm'} mb={4}>
                {category.title}
              </Heading>
              <GroupRenderer rowIds={category.items} />
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PanelRenderer;
