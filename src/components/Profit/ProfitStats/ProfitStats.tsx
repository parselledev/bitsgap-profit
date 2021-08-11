import block from 'bem-cn';
import ProfitDataline from '../ProfitDataline';
import './ProfitStats.scss';

const ProfitStats = () => {
  const b = block('ProfitStats');

  return (
    <div className={b()}>
      <ProfitDataline title="Price change" value="+20%" />
      <ProfitDataline
        title="Projected profit"
        value="15122.44"
        currency="USDT"
      />
    </div>
  );
};

export default ProfitStats;
