import { useState } from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { selectProfitData } from 'redux/profit/profit.selectors';
import { profitSaveData, profitClearData } from 'redux/profit/profit.actions';
import block from 'bem-cn';
import { Button as MuiButton } from '@material-ui/core';
import { Button } from 'components/UI/Button';
import CustomModal from 'components/UI/CustomModal';
import ProfitList from './ProfitList';
import ProfitAdd from './ProfitAdd';
import ProfitStats from './ProfitStats';
import IconSecurity from 'assets/icons/security.svg';
import './Profit.scss';

const Profit = () => {
  const [open, setOpen] = useState(true);
  const profitData = useAppSelector(selectProfitData);
  const b = block('Profit');
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(profitClearData());
  };

  const handleSaveProfit = () => {
    dispatch(profitSaveData());
    setOpen(false);
  };

  const renderProfitList = () => {
    if (profitData.length > 0) return <ProfitList />;
  };

  const renderProfitAdd = () => {
    if (profitData.length <= 4) return <ProfitAdd />;
  };

  const renderProfitStats = () => {
    if (profitData.length <= 4) return <ProfitStats />;
  };

  const renderButtons = () => {
    if (profitData.length > 0) {
      return (
        <div className={b('controlDouble')}>
          <Button text="Cancel" type="dark" onClick={handleClose} />
          <Button text="Confirm" type="primary" onClick={handleSaveProfit} />
        </div>
      );
    } else
      return (
        <div className={b('control')}>
          <Button text="Cancel" type="dark" onClick={handleClose} />
        </div>
      );
  };

  return (
    <div className={b()}>
      <MuiButton
        classes={{ root: b('btn'), label: b('btnLabel') }}
        onClick={handleOpen}
      >
        <img src={IconSecurity} alt="icon security" />
        Add protection
      </MuiButton>

      <CustomModal
        open={open}
        handleClose={handleClose}
        label={
          <p>
            Take Profit {profitData.length}/<span className={b('grey')}>5</span>
          </p>
        }
      >
        <div>
          {renderProfitList()}
          {renderProfitAdd()}
          {renderProfitStats()}
          {renderButtons()}
        </div>
      </CustomModal>
    </div>
  );
};

export default Profit;
