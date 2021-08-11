import block from 'bem-cn-lite';
import HomePage from 'pages/HomePage';
import './App.scss';

const App = () => {
  const b = block('app');

  return (
    <div className={b()}>
      <HomePage />
    </div>
  );
};

export default App;
