import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

const UpdateitemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };
  const handleIncrement = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex items-center gap-2  md:gap-3">
      <Button type="round" onClick={handleDecrement}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};

export default UpdateitemQuantity;
