import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

export const useApplicationState = () => {
  const dispatch = useDispatch();
  const subCategories = useSelector((state) => state.subCategories);
  const categories = useSelector((state) => state.categories);
  const features = useSelector((state) => state.features);

  const getItemSubcategories = (id) => {
    const subCategory = _.find(subCategories, (subcategory) => {
      if (subcategory.id === id) return true;
    });
    const subCategoryItems = subCategory && subCategory.items;
    return subCategoryItems;
  };

  const toggleStatus = (id) => {
    const itemSubCategories = getItemSubcategories(id);
    if (itemSubCategories) {
      dispatch({
        type: 'toggleStatusForGroup',
        id,
      });
    } else {
      dispatch({
        type: 'toggleStatus',
        id,
      });
    }
  };

  const showSubcategories = (id) => {
    const itemSubCategories = getItemSubcategories(id);

    const getMainFeature = _.find(features, (feature) => {
      if (feature.id === id) return true;
    });

    if (itemSubCategories && getMainFeature.active) {
      return true;
    }
    return false;
  };

  return [
    features,
    categories,
    getItemSubcategories,
    showSubcategories,
    toggleStatus,
  ];
};
