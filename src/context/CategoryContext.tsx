import { createContext, useState, useEffect, ReactNode } from 'react';
import { getCategoriesOnly } from 'helpers/apiService/category.service';
import CategoryT from 'types/categoryTypes';


type ContextValue = {
  categories: CategoryT[]
}

const CategoryContext = createContext<ContextValue>(null!);


export const CategoryProvider= ({ children }: { children: ReactNode }) => {
  
  const [categories, setCategories] = useState<CategoryT[]>([]);

  useEffect(() => {
    (async () => {
      const categories = await getCategoriesOnly();
      categories && setCategories(categories)
    })()
  }, [])
  
  categories && console.log('categories:', categories)
  
  return (
    <CategoryContext.Provider value={{ categories }} >
     { children }
    </CategoryContext.Provider>
    )
}

export default CategoryContext;