import { useState } from 'react';
import Select from 'react-select';
import './App.css';

import img0008 from './assets/images/0008.png';
import img0010 from './assets/images/0010.png';
import img0047 from './assets/images/0047.png';
import img0051 from './assets/images/0051.png';
import img0052 from './assets/images/0052.png';
import img0053 from './assets/images/0053.png';
import img0054 from './assets/images/0054.png';
import img0056 from './assets/images/0056.png';
import img0057 from './assets/images/0057.png';
import img0058 from './assets/images/0058.png';
import img0059 from './assets/images/0059.png';
import img0085 from './assets/images/0085.png';
import img0086 from './assets/images/0086.png';
import img0709 from './assets/images/0709.png';
import img0867 from './assets/images/0867.png';
import img0118 from './assets/images/0118.png';
import img0163 from './assets/images/0163.png';
import img1231 from './assets/images/1231.png';
import img1232 from './assets/images/1232.png';
import img1233 from './assets/images/1233.png';
import img1234 from './assets/images/1234.png';
import img1235 from './assets/images/1235.png';
import img1236 from './assets/images/1236.png';
import img1237 from './assets/images/1237.png';
import img1238 from './assets/images/1238.png';
import img1240 from './assets/images/1240.png';
import img1242 from './assets/images/1242.png';
import img9958 from './assets/images/9958.png';
import img9959 from './assets/images/9959.png';
import img9961 from './assets/images/9961.png';
import img9962 from './assets/images/9962.png';
import img9964 from './assets/images/9964.png';
import img9965 from './assets/images/9965.png';
import img9966 from './assets/images/9966.png';
import img9967 from './assets/images/9967.png';
import img9969 from './assets/images/9969.png';
import img9971 from './assets/images/9971.png';
import img9972 from './assets/images/9972.png';
import img9973 from './assets/images/9973.png';
import img9974 from './assets/images/9974.png';
import img9975 from './assets/images/9975.png';
import img9976 from './assets/images/9976.png';
import img9983 from './assets/images/9983.png';
import img9987 from './assets/images/9987.png';

type valueOption = { value: string; label: string; image: unknown } | null;

const options = [
  {
    value: '0008',
    label: '0008 Vaalea denim',
    image: img0008,
  },
  {
    value: '0010',
    label: '0010 Farkunsininen',
    image: img0010,
  },
  {
    value: '0047',
    label: '0047 Punainen',
    image: img0047,
  },
  {
    value: '0051',
    label: '0051 Valkoinen',
    image: img0051,
  },
  {
    value: '0052',
    label: '0052 Mustalammas',
    image: img0052,
  },
  {
    value: '0053',
    label: '0053 Ruskea',
    image: img0053,
  },
  {
    value: '0054',
    label: '0054 Vaalea tuhkanharmaa',
    image: img0054,
  },
  {
    value: '0056',
    label: '0056 Tuhkanharmaa',
    image: img0056,
  },
  {
    value: '0057',
    label: '0057 Harmaa',
    image: img0057,
  },
  {
    value: '0058',
    label: '0058 Tummanharmaa',
    image: img0058,
  },
  {
    value: '0059',
    label: '0059 Musta',
    image: img0059,
  },
  {
    value: '0085',
    label: '0085 Vaalea luonnonruskea',
    image: img0085,
  },
  {
    value: '0086',
    label: '0086 Vaaleanbeige',
    image: img0086,
  },
  {
    value: '0867',
    label: '0867 Suklaanruskea',
    image: img0867,
  },
  {
    value: '0709',
    label: '0709 Keskiyö',
    image: img0709,
  },
  {
    value: '0118',
    label: '0118 Laivastonsininen',
    image: img0118,
  },
  {
    value: '0163',
    label: '0163 Tumma pehmeä violetti',
    image: img0163,
  },
  {
    value: '1231',
    label: '1231 Puutarha',
    image: img1231,
  },
  {
    value: '1232',
    label: '1232 Vaalea jäänsininen',
    image: img1232,
  },
  {
    value: '1233',
    label: '1233 Avaruus',
    image: img1233,
  },
  {
    value: '1234',
    label: '1234 Sininen tweed',
    image: img1234,
  },
  {
    value: '1235',
    label: '1235 Valonsäde',
    image: img1235,
  },
  {
    value: '1236',
    label: '1236 Poltettu oranssi',
    image: img1236,
  },
  {
    value: '1237',
    label: '1237 Suolaheinänkukka',
    image: img1237,
  },
  {
    value: '1238',
    label: '1238 Iltaruskonpunainen',
    image: img1238,
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
    value: '9958',
    label: '9958 Vaalea indigo',
    image: img9958,
  },
  { 
    value: '9959',
    label: '9959 Indigo',
    image: img9959,
  },
  {
    value: '9961',
    label: '9961 Bordeaux',
    image: img9961,
  },
  {
    value: '9962',
    label: '9962 Rubiininpunainen',
    image: img9962,
  },
  { 
    value: '9964',
    label: '9964 Kullankeltainen',
    image: img9964,
  },
  { 
    value: '9965',
    label: '9965 Keltavihreä',
    image: img9965,
  },
  { 
    value: '9966',
    label: '9966 Sypressinvihreä',
    image: img9966,
  },
  { 
    value: '9967',
    label: '9967 Sinivihreä',
    image: img9967,
  },
  { 
    value: '9969',
    label: '9969 Fuksia',
    image: img9969,
  },
  {
    value: '9971',
    label: '9971 Meripihka',
    image: img9971,
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
  {
    value: '9983',
    label: '9983 Beige tweed',
    image: img9983,
  },
  {
    value: '9987',
    label: '9987 Tumma oliivi',
    image: img9987,
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
