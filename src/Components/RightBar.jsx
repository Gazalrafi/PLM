import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import styles from '../style.module.css';
import Contract from './Contract';
import Details from './Details';
import OnBoard from './OnBoard';
import SupplierPage from './Pages/SupplierPage';

const RightBar = () => {
  let location = useLocation();

  console.log(location.pathname);

  let componentToRender;

  switch (location.pathname) {
    case '/details':
      componentToRender = <Details />;
      break;
    case '/onboard-status':
      componentToRender = <OnBoard />;
      break;
    case '/contract-details':
      componentToRender = <Contract />;
      break;
      case '/create-supplier':
      componentToRender = <SupplierPage/>;
      break;
    default:
      componentToRender = null;
  }

  return (
    <div className={styles.rightbarConatiner}>
      <div className={styles.rightBar}>
        <div className={styles.rightBarLogo}>
          <img
            src='https://cdn-icons-png.freepik.com/512/10703/10703269.png'
            width={30}
            height={30}
            alt=''
          />
          <img
            src='https://cdn-icons-png.freepik.com/512/7959/7959420.png'
            width={30}
            height={30}
            alt=''
          />
          <img
            src='https://cdn-icons-png.freepik.com/512/5994/5994710.png'
            width={30}
            height={30}
            alt=''
          />
          <img
            src='https://cdn-icons-png.freepik.com/512/9740/9740598.png'
            width={30}
            height={30}
            alt=''
          />
          <img
            src='https://cdn-icons-png.freepik.com/512/3425/3425921.png'
            width={30}
            height={30}
            alt=''
          />
        </div>
        <div className={styles.searchSection}>
          <FaSearch />
          <input type='text' name='' width={300} height={300} id='' />
        </div>
      </div>
      {componentToRender}
    </div>
  );
};

export default RightBar;
