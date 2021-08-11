import block from 'bem-cn';
import { useAppSelector } from 'redux/hooks';
import { selectProfitData } from 'redux/profit/profit.selectors';
import ProfitListItem from '../ProfitListItem';
import ProfitDataline from '../ProfitDataline';
import { ProfitItemType } from 'redux/profit/profit.types';
import './ProfitList.scss';

const ProfitList = () => {
  const profitData = useAppSelector(selectProfitData);
  const b = block('ProfitList');

  return (
    <div className={b()}>
      <ul className={b('list')}>
        {profitData.map((item: ProfitItemType, key: number) => (
          <ProfitListItem key={key} profitItem={item} id={key} />
        ))}
      </ul>

      <ProfitDataline
        title="Sum. projected profit"
        value={'15123.44'}
        currency="USDT"
      />
    </div>
  );
};

export default ProfitList;
