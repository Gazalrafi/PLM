import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../style.module.css';

const LeftBar = () => {
  const navigate=useNavigate();
  const [data, setData] = useState([
   
    {
      name: 'Metrodonics',
      options: ['Details', 'Onboarding status', 'View Contract details'],
      isVisible: false,
    },
    {
      name: 'Metrodonics',
      options: ['Details', 'Onboarding status', 'View Contract details'],
      isVisible: false,
    },
    {
      name: 'Metrodonics',
      options: ['Details', 'Onboarding status', 'View Contract details'],
      isVisible: false,
    },
    {
      name: 'Metrodonics',
      options: ['Details', 'Onboarding status', 'View Contract details'],
      isVisible: false,
    },
  ]);

  const [display, setDisplay] = useState(true);

  const handlToggle = (control) => {
    setDisplay(control);
  };

  const handleNavToggle = (elem) => {
    setData((data) =>
      data.map((item) =>
        item === elem ? { ...item, isVisible: !item.isVisible } : item
      )
    );
  };

  return (
    <div className={styles.leftbar}>
      {display ? (
        <>
          <div
            className={styles.logoText}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div className={styles.logoText}>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYXelNvTYzqH7ndMP0MZlMWQPiQJRhPFft33kyoiCGg&s'
                alt='logo'
                className={styles.imageIcon}
              />
              <p>SUPPLIER</p>
            </div>

            <p onClick={() => handlToggle(false)}>
              <ImCross />
            </p>
           
          </div>

          <div className={styles.leftbarParent}>
            <Link to='/create-supplier'>Create Supplier</Link>
            {data.map((elem,index) => {
              return (
                <>
                  <div key={index} className={styles.leftbarChild}>
                    <div className={styles.logoText}>
                      <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYXelNvTYzqH7ndMP0MZlMWQPiQJRhPFft33kyoiCGg&s'
                        alt='logo'
                        className={styles.imageIcon}
                      />
                     
                      <p onClick={() => handleNavToggle(elem)}>{elem.name}</p>

                    </div>
                    {elem.isVisible ? (
                      <div className={styles.leftbarOptions}>
                        <Link to='/details'>{elem.options[0]}</Link>
                        <Link to={'/onboard-status'}>{elem.options[1]}</Link>
                        <Link to='/contract-details'>{elem.options[2]}</Link>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </>
      ) : (
        <p onClick={() => handlToggle(true)}>
          <FaArrowRight />
        </p>
      )}
    </div>
  );
};

export default LeftBar;
