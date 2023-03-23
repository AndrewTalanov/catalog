import styles from './Header.module.scss';

import iconLogo from '../../assets/img/logo.svg';
import iconCub from '../../assets/img/cub.svg';
import iconSearch from '../../assets/img/search.svg';
import iconDowload from '../../assets/img/dowload.svg';
import iconBasket from '../../assets/img/basket-black.svg';
import iconPsevdochel from '../../assets/img/psevdochel.png';

import Button from '../button/Button';
import Input from '../input/Input';
import Dashed from '../dashed/Dashed';

const Header = () => {
    return (
        <header className={styles.header}>
            <a href="#"><img src={iconLogo} alt="Логотип компании" /></a>

            <div className={styles.search}>
                <Button
                    padding={{
                        t: 21,
                        r: 54,
                        b: 21,
                        l: 54
                    }}
                    gap={12}
                    fontSize={14}
                >
                    Каталог <img src={iconCub} alt="Кубики" />
                </Button>

                <Input
                    type='text'
                    placeholder='Поиск...'
                    button={{
                        children: <img src={iconSearch} alt='Иконка поиска' />,
                        padding: { t: 13, r: 12, b: 12, l: 13 }
                    }}
                />
            </div>
            
            <div className={styles.other}>
                <div className={styles.feedback}>
                    <div className={styles.info}>
                        <a href="tel:+77774900091">+7 (777) 490-00-91</a>
                        <p>время работы: 9:00-20:00</p>
                        <a href="tel:+77774900091">Заказать звонок</a>
                    </div>
                    <img src={iconPsevdochel} alt="Сотрудник компании" />
                </div>
            
                <Dashed
                    height={49}
                />
                <Button
                    padding={{
                        t: 21,
                        r: 43,
                        b: 21,
                        l: 43
                    }}
                    gap={12}
                    fontSize={14}
                >
                    Прайс-лист <img src={iconDowload} alt="Кубики" />
                </Button>
                <Dashed
                    height={49}
                />

                <a href='#' className={styles.basket}>

                    <div className={styles.icon}>
                        <img src={iconBasket} alt="Корзина" />
                        <div className={styles.count}>
                            <div className={styles.back}></div>
                            <p>3</p>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <p>Корзина</p>
                        <p>12 478 ₸</p>
                    </div>
                </a>
            </div>

            

            
        </header>
    );
}

export default Header;