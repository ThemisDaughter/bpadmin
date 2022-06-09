import React from 'react';
import CreatorT from 'types/creatorTypes';
import {StyledCategoryList} from 'styles/styledAdminComponents'

interface Props {
  creator: CreatorT;
}

const CategoryListcomponent = ({ creator }:Props) => {
  return (
    <StyledCategoryList>
    {
        creator.categories.map((cat: { category_name: any }) => cat.category_name)
        .join(' | ')
    }
  </StyledCategoryList>
  )
}

export default CategoryListcomponent