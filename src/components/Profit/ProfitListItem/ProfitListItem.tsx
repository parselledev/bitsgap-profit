import { useAppDispatch } from 'redux/hooks';
import { profitRemoveItem } from 'redux/profit/profit.actions';
import block from 'bem-cn';
import IconProfit from 'assets/icons/profit.svg';
import IconError from 'assets/icons/error.svg';
import { ProfitItemType } from 'redux/profit/profit.types';
import './ProfitListItem.scss';

interface ProfitListItemProps {
  profitItem: ProfitItemType;
  id: number;
}

const ProfitListItem = ({ profitItem, id }: ProfitListItemProps) => {
  const { price, percent } = profitItem;
  const dispatch = useAppDispatch();
  const b = block('ProfitListItem');

  const handleItemRemove = () => {
    dispatch(profitRemoveItem(id));
  };

  return (
    <li className={b()}>
      <div className={b('content')}>
        <img src={IconProfit} alt="icon profit" className={b('icon')} />
        <p className={b('price')}>{price}</p>
        <p className={b('percent')}>{percent}%</p>
      </div>

      <button className={b('deleteBtn')} onClick={handleItemRemove}>
        <img src={IconError} alt="delete icon" />
      </button>
    </li>
  );
};

export default ProfitListItem;
