import styles from './Navigation.module.scss';

import iconLocation from '../../assets/img/location.svg'
import iconMessage from '../../assets/img/message.svg'
import Dashed from '../dashed/Dashed';

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            
            <address className={styles.address}>

                <div className={styles["address-item"]}>
                    <img src={iconLocation} alt="Иконка локация" />
                    <div className={styles.info}>
                        <p>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
                        <p>(Рынок Восточный)</p>
                    </div>
                </div>

                <Dashed/>

                <div className={styles["address-item"]}>
                    <img src={iconMessage} alt="Иконка сообщение" />
                    <div className={styles.info}>
                        <a href='mailto:opt.sultan@mail.ru'>opt.sultan@mail.ru</a>
                        <p>На связи в любое время</p>
                    </div>
                </div>

            </address>

            <nav>
                <ul>
                    <li><a href="#">О компании</a></li>
                    <Dashed/>
                    <li><a href="#">Доставка и оплата</a></li>
                    <Dashed/>
                    <li><a href="#">Возврат</a></li>
                    <Dashed/>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>

        </div>
    );
}

export default Navigation;