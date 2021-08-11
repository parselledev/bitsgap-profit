import block from 'bem-cn';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import './CustomSlider.scss';

interface CustomSliderProps {
  value: number;
  onChange: any;
}

const CustomSlider = ({ value, onChange }: CustomSliderProps) => {
  const b = block('CustomSlider');

  return (
    <div className={b()}>
      <PrettoSlider
        aria-label="pretto slider"
        defaultValue={20}
        value={value}
        onChange={onChange}
      />
      <p className={b('value')}>{value}%</p>
    </div>
  );
};

const PrettoSlider = withStyles({
  root: {
    color: '#1F212C',
    height: 8
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -6,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

export default CustomSlider;
