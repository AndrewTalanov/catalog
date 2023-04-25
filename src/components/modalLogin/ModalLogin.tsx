import { useState } from 'react';
import styles from './ModalLogin.module.scss';
import { ModalLoginType } from './ModalLoginType';

const ModalLogin: React.FC<ModalLoginType> = ({ setActive }) => {

    const [toggle, setToggle] = useState(true);

    return (
        <form
            className={styles['modal-wrapper']}
            onClick={() => setActive(false)}
            onSubmit={(e) => e.preventDefault()}
        >
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                {
                    toggle ? <h2>Авторизация</h2> : <h2>Регистрация</h2>
                }
                <div className={styles.fields}>
                    <label>
                        <span> Логин:</span>
                        <input name='login' type="text" />
                    </label>
                    <label>
                        <span> Пароль:</span>
                        <input name='password' type="password" />
                    </label>
                    {
                        toggle ?
                            ''
                            :
                            <label>
                                <span> Повторите пароль:</span>
                                <input name='confirm-password' type="password" />
                            </label>
                    }
                </div>
                <div className={styles.buttons}>
                    {
                        toggle ?
                            <button
                                className={styles.ok}
                                type='submit'
                            >
                                Войти
                            </button>
                            :
                            <button
                                className={styles.ok}
                                type='submit'
                            >
                                Зарегистрироваться
                            </button>
                    }
                    {
                        toggle ?
                            <button
                                className={styles.toggle}
                                onClick={() => setToggle(!toggle)}
                            >
                                Зарегистрироваться
                            </button>
                            :
                            <button
                                className={styles.toggle}
                                onClick={() => setToggle(!toggle)}
                            >
                                Войти
                            </button>
                    }
                </div>

            </div>
        </form>
    );
}

export default ModalLogin;