import ModalLogin from '../modalLogin/ModalLogin';
import styles from './Account.module.scss';
import { AccountType } from './AccountType';
import { useState, useEffect, useRef } from 'react';
import avatar from '../../assets/img/avatar.png';

const Account: React.FC<AccountType> = ({}) => {

    const [active, setActive] = useState(false);
    const buttonRef: any = useRef();

    useEffect(() => {

        const body = buttonRef.current.closest('body');

        active ? body.classList.add('body-hidden') : body.classList.remove('body-hidden')

    }, [active]);

    return (
        <>
            <button
                ref={buttonRef}
                className={styles.login}
                onClick={() => setActive(!active)}
            >
                <img src={avatar} alt="аватарка" />
                <p>Войти</p>
            </button>
            {
                active ? <ModalLogin setActive={setActive} /> : ''
            }
        </>
    );
}

export default Account;