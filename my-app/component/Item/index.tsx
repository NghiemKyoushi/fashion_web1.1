import Button from '@mui/material/Button';
import style from './style.module.css';

export type CartItemType = {
    id: string;
    image: string;
    price: number;
    name: string
    // amount: number;
  };
   
type Props = {
  item: CartItemType;
//   handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item = ({ item }: Props) => {
  return (
    <div className={style.featureContainer} >
      <img className={style.img} src={item.image} alt={item.name} />
      <div>
        <p className={style.nameItem}>{item.name}</p>
        <p>${item.price}</p>
      </div>
      <Button>Add to cart</Button>
    </div>
  );
};

export default Item;
