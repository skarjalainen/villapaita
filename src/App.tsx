import { useState } from 'react';
import Select from 'react-select';
import './App.css';

import img0008 from './assets/images/0008.png';
import img0051 from './assets/images/0051.png';
import img0054 from './assets/images/0054.png';
import img1240 from './assets/images/1240.png';
import img1242 from './assets/images/1242.png';
import img9962 from './assets/images/9962.png';
import img9965 from './assets/images/9965.png';
import img9972 from './assets/images/9972.png';
import img9973 from './assets/images/9973.png';
import img9974 from './assets/images/9974.png';
import img9975 from './assets/images/9975.png';
import img9976 from './assets/images/9976.png';

type valueOption = { value: string; label: string; image: unknown } | null;

const options = [
  { 
    value: '0008',
    label: '0008 Vaalea denim',
    image: img0008,
  },
  { 
    value: '0051',
    label: '0051 Valkoinen',
    image: img0051,
  },
  { 
    value: '0054',
    label: '0054 Vaalea tuhkanharmaa',
    image: img0054,
  },
  { 
    value: '1240',
    label: '1240 Pinkki',
    image: img1240,
  },
  { 
    value: '1242',
    label: '1242 Verenpunainen',
    image: img1242,
  },
  { 
    value: '9962',
    label: '9962 Rubiininpunainen',
    image: img9962,
  },
  { 
    value: '9965',
    label: '9965 Keltavihreä',
    image: img9965,
  },
  {
    value: '9972',
    label: '9972 Ecru',
    image: img9972,
  },
  {
    value: '9973',
    label: '9973 Hiekanruskea',
    image: img9973,
  },
  { 
    value: '9974',
    label: '9974 Vaaleanharmaa tweed',
    image: img9974,
  },
  { 
    value: '9975',
    label: '9975 Musta tweed',
    image: img9975,
  },
  { 
    value: '9976',
    label: '9976 Beige tweed',
    image: img9976,
  },
];

function App() {
  const [value1, setValue1] = useState<valueOption>(options[1]);
  const [value2, setValue2] = useState<valueOption>(options[9]);
  const [value3, setValue3] = useState<valueOption>(options[10]);

  const getStyle1 = () => {
    if (value1 === null) {
      return {};
    }
    return {
      backgroundImage: `url(${value1.image})`,
    };
  };

  const getStyle2 = () => {
    if (value2 === null) {
      return {};
    }
    return {
      backgroundImage: `url(${value2.image})`,
    };
  };

  const getStyle3 = () => {
    if (value3 === null) {
      return {};
    }
    return {
      backgroundImage: `url(${value3.image})`,
    };
  };

  return (
    <>
      <div className="wrapper">
        <div className="top" style={getStyle1()}>
          <div className="selector">
            <Select
              options={options}
              onChange={setValue1}
              defaultValue={value1}
              formatOptionLabel={(val) => (
                <div className="colorOption">
                  <img src={val.image as string} alt="color-image" />
                  <span>{val.label}</span>
                </div>
              )}
            />
          </div>
        </div>
        <div className="middle" style={getStyle2()}>
          <div className="selector">
            <Select
              options={options}
              onChange={setValue2}
              defaultValue={value2}
              formatOptionLabel={(val) => (
                <div className="colorOption">
                  <img src={val.image as string} alt="color-image" />
                  <span>{val.label}</span>
                </div>
              )}
            />
          </div>
        </div>
        <div className="bottom" style={getStyle3()}>
          <div className="selector">
            <Select
              options={options}
              onChange={setValue3}
              defaultValue={value3}
              formatOptionLabel={(val) => (
                <div className="colorOption">
                  <img src={val.image as string} alt="color-image" />
                  <span>{val.label}</span>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
