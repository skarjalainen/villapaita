import { useState } from 'react';
import Select from 'react-select';
import './App.css';

import img0008 from './assets/images/0008.png';
import img0051 from './assets/images/0051.png';
import img0054 from './assets/images/0054.png';
import img1242 from './assets/images/1242.png';
import img9965 from './assets/images/9965.png';
import img9972 from './assets/images/9972.png';
import img9973 from './assets/images/9973.png';
import img9974 from './assets/images/9974.png';
import img9975 from './assets/images/9975.png';
import img9976 from './assets/images/9976.png';

const images = {
  '0008': img0008,
  '0051': img0051,
  '0054': img0054,
  '1242': img1242,
  '9965': img9965,
  '9972': img9972,
  '9973': img9973,
  '9974': img9974,
  '9975': img9975,
  '9976': img9976,
};

const options = [
  { 
    value: '0008',
    label: '0008 Vaalea denim',
  },
  { 
    value: '0051',
    label: '0051 Valkoinen',
  },
  { 
    value: '0054',
    label: '0054 Vaalea tuhkanharmaa',
  },
  { 
    value: '1242',
    label: '1242 Verenpunainen',
  },
  { 
    value: '9965',
    label: '9965 Keltavihreä',
  },
  {
    value: '9972',
    label: '9972 Ecru',
  },
  {
    value: '9973',
    label: '9973 Hiekanruskea',
  },
  { 
    value: '9974',
    label: '9974 Vaaleanharmaa tweed',
  },
  { 
    value: '9975',
    label: '9975 Musta tweed',
  },
  { 
    value: '9976',
    label: '9976 Beige tweed',
  },
];

function App() {
  const [value1, setValue1] = useState(options[0]);
  const [value2, setValue2] = useState(options[1]);
  const [value3, setValue3] = useState(options[5]);

  const getStyle1 = () => {
    return {
      backgroundImage: `url(${images[value1.value]})`,
    };
  };

  const getStyle2 = () => {
    return {
      backgroundImage: `url(${images[value2.value]})`,
    };
  };

  const getStyle3 = () => {
    return {
      backgroundImage: `url(${images[value3.value]})`,
    };
  };

  const selectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      textColor: 'black',
    }),
  };

  return (
    <>
      <div className="wrapper">
        <div className="top" style={getStyle1()}>
          <div className="selector">
            <Select
              styles={selectStyles}
              options={options}
              onChange={setValue1}
              defaultValue={value1}
            />
          </div>
        </div>
        <div className="middle" style={getStyle2()}>
          <div className="selector">
            <Select
              styles={selectStyles}
              options={options}
              onChange={setValue2}
              defaultValue={value2}
            />
          </div>
        </div>
        <div className="bottom" style={getStyle3()}>
          <div className="selector">
            <Select
              styles={selectStyles}
              options={options}
              onChange={setValue3}
              defaultValue={value3}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
