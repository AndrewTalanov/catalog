import ModalLogin from '../modalLogin/ModalLogin';
import styles from './Account.module.scss';
import { AccountType } from './AccountType';
import { useState, useEffect, useRef } from 'react';
import avatar from '../../assets/img/avatar.png';

const Account: React.FC<AccountType> = ({setUser, user}) => {

    const [active, setActive] = useState(false);
    const [userRegisterToken, setUserRegisterToken] = useState();
    const buttonRef: any = useRef();

    useEffect(() => {
        const body = buttonRef.current.closest('body');
        active ? body.classList.add('body-hidden') : body.classList.remove('body-hidden')
    }, [active]);

    let email;
    if (user.user.email) {
        email = user.user.email;
    } else if (sessionStorage.getItem('email')){
        email = sessionStorage.getItem('email');
    }

    return (
        <>
            <button
                ref={buttonRef}
                className={styles.login}
                onClick={() => setActive(!active)}
            >
                <img src={avatar} alt="аватарка" />
                <p>{ email || 'Войти'}</p>
            </button>
            {
                active ? <ModalLogin 
                    setActive={setActive} 
                    setUser={setUser} 
                    userRegisterToken={userRegisterToken}
                    setUserRegisterToken={setUserRegisterToken}
                    /> : ''
            }
        </>
    );
}

export default Account;