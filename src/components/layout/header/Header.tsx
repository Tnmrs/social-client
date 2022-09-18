import React, { FC, useState } from 'react';

import styles from './Header.module.css';

import logoImg from './logo-cc.png';

const Header: FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles['image-wrapper']}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoImg.src} alt="" />
      </div>
      <div className={styles.wrapper}>
        {/* {!isSearchActive && <Search />} */}
        <input type="text" placeholder="Поиск" onClick={() => setIsSearchActive(true)} />
      </div>
    </header>
  );
};

export default Header;
