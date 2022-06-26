import { useContext } from 'react';
import CategoryContext from 'context/CategoryContext';
import { StyledTag } from 'styles/styledFormComponents';


const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

interface Props {
  onUpdateSelected: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CategoriesFormComponent = ({ onUpdateSelected}:Props) => {
  const { categories } = useContext(CategoryContext);

  return (
    <>
      {
        categories && categories.map(cat => {
          return (<StyledTag key={cat.id} colour={getRandomColor()}><label htmlFor={cat.id}><input type='checkbox' id={cat.id} value={cat.id} onChange={e => onUpdateSelected(e)}></input>{cat.category_name}</label></StyledTag>)
        })
}    </>
  )
}

export default CategoriesFormComponent