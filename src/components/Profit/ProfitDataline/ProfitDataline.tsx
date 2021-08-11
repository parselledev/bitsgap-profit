import block from 'bem-cn';
import './ProfitDataline.scss';

interface ProfitDatalineProps {
  title: string;
  value: string;
  currency?: string;
}

const ProfitDataline = ({ title, value, currency }: ProfitDatalineProps) => {
  const b = block('ProfitDataline');

  const renderValue = () => {
    if (currency) {
      return (
        <p className={b('value')}>
          <span className={b('green')}>{value}</span> {currency}
        </p>
      );
    } else return <p className={b('value')}>{value}</p>;
  };

  return (
    <div className={b()}>
      <p className={b('title')}>{title}</p>
      <div className={b('space')}></div>
      {renderValue()}
    </div>
  );
};

export default ProfitDataline;
