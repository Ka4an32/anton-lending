import s from "./s.module.scss";

import CashItem from "../assets/cash-item.png";
import CashMenu from "../assets/cash-menu.jpg";
import Crypto from "../assets/crypto.jpg";
import Crypto2 from "../assets/crypto2.jpg";
import Menu from "../assets/menu.jpg";
import Account from "../assets/account.jpg";
import Cash from "../assets/cash.jpg";

import Image from "next/image";

const FourtyGrid = () => {
  return (
    <div className={s["fourty-grid"]}>
      <div className={s["column"]}>
        <Image src={CashItem} className={s["cash-item"]} alt="cash-item" />
        <Image src={CashMenu} className={s["cash-menu"]} alt="cash-menu" />
      </div>
      <div className={s["column"]}>
        <Image src={Crypto} className={s["crypto"]} alt="crypto" />
        <Image src={Crypto2} className={s["crypto2"]} alt="crypto2" />
      </div>
      <div className={s["column"]}>
        <Image src={Cash} className={s["cash"]} alt="cash" />
        <Image src={Menu} className={s["menu"]} alt="menu" />
        <Image src={Account} className={s["account"]} alt="account" />
      </div>
    </div>
  );
};

export default FourtyGrid;
