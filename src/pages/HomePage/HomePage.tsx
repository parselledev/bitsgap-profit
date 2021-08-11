import block from 'bem-cn';
import Profit from 'components/Profit';
import './HomePage.scss';

const HomePage = () => {
  const b = block('HomePage');

  return (
    <div className={b()}>
      <div className={b('content')}>
        <Profit />
      </div>
    </div>
  );
};

export default HomePage;
