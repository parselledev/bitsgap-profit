import React, { useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { profitAddItem } from 'redux/profit/profit.actions';
import block from 'bem-cn';
import { TextField } from '@material-ui/core';
import CustomSlider from 'components/UI/CustomSlider';
import IconCoin from 'assets/icons/coin.svg';
import IconArrowCircle from 'assets/icons/arrowCircle.svg';
import IconSwitch from 'assets/icons/switch.svg';
import IconPlus from 'assets/icons/plus.svg';
import './ProfitAdd.scss';

const ProfitAdd = () => {
  const dispatch = useAppDispatch();
  const [type, setType] = useState('price');
  const [price, setPrice] = useState(0);
  const [percent, setPercent] = useState(20);
  const b = block('ProfitAdd');

  const handleAddItem = () => {
    const newItem = {
      price: price,
      percent: percent
    };
    dispatch(profitAddItem(newItem));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const handlePercentChange = (event: any, newValue: number | number[]) => {
    setPercent(Number(newValue));
  };

  const handleTypeChange = () => {
    if (type === 'price') setType('percent');
    else setType('price');
  };

  const renderFieldIcon = () => {
    switch (type) {
      case 'price':
        return <img src={IconCoin} alt="icon coin" />;

      case 'percent':
        return <img src={IconArrowCircle} alt="icon arrow circle" />;

      default:
        break;
    }
  };

  const renderFieldTitle = () => {
    switch (type) {
      case 'price':
        return 'price';

      case 'percent':
        return 'Price change % ';

      default:
        break;
    }
  };

  return (
    <div className={b()}>
      <div className={b('row')}>
        <div className={b('fieldBlock')}>
          {renderFieldIcon()}
          <TextField
            id="count"
            label={renderFieldTitle()}
            size="small"
            classes={{ root: b('field') }}
            value={price}
            onChange={handlePriceChange}
            type="number"
          />

          <button className={b('switchBtn')} onClick={handleTypeChange}>
            <img src={IconSwitch} alt="icon switch" />
          </button>
        </div>

        <button className={b('addBtn')} onClick={handleAddItem}>
          <img src={IconPlus} alt="icon plus" />
        </button>
      </div>

      <div className={b('slider')}>
        <div className={b('amount')}>
          <p className={b('amountTitle')}>Sell BTC amount</p>

          <CustomSlider value={percent} onChange={handlePercentChange} />
        </div>
      </div>
    </div>
  );
};

export default ProfitAdd;
