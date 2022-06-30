import { useContext, useEffect, useState } from 'react';
import CategoryContext from 'context/CategoryContext';
import { StyledTag } from 'styles/styledFormComponents';
import CategoryT from 'types/categoryTypes';


const getRandomColor = (num: number) => {
  const letters = '0123456789ABCDEF';
  const colArray = [];
  for (let i = 0; i <= num; i++){
    let hex = '#';
    for (let j = 0; j < 6; j++) {
      hex += letters[Math.floor(Math.random() * 16)];
    }
    colArray.push(hex)
  }
  return colArray;
}

interface Props {
  onUpdateSelected: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: string[];
}

const CategoriesFormComponent = ({ onUpdateSelected, checked }: Props) => {
  
  const {  categories } = useContext(CategoryContext);
  const [colors, setColors] = useState<string[]>([]);
  useEffect(() => {
      setColors(getRandomColor(categories.length));
  }, [categories])


  return (
    <>
      {
        categories && categories.map((cat: CategoryT, index: number)=> {
          return (<StyledTag key={cat.id} colour={colors[index]}><label htmlFor={cat.id}><input type='checkbox' id={cat.id} value={cat.id} checked={checked.includes(cat.id!) ? true : false} onChange={e => onUpdateSelected(e)}></input>{cat.category_name}</label></StyledTag>)
        })
}    </>
  )
}

export default CategoriesFormComponent