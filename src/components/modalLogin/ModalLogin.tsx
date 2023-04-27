import { useState, useRef, useEffect } from 'react';
import styles from './ModalLogin.module.scss';
import { ModalLoginType } from './ModalLoginType';
import { URL } from '../../URL';

const ModalLogin: React.FC<ModalLoginType> = ({ setActive, setUser, userRegisterToken, setUserRegisterToken }) => {

    const [toggle, setToggle] = useState(true);

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target: EventTarget = e.target;
        const formData = new FormData(target);

        if (!toggle) {
            const user = {
                name: formData.get('name'),
                phone: `+7${formData.get('phone')}`,
                password: formData.get('password'),
                email: formData.get('email')
            }
    
            try {                
                await fetch(URL.DOMEN + URL.REGISTER, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(user)
                }) 
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.statusCode);
                        if (!data.statusCode) {
                            alert('Успешно зарегистрирован!');
                            setUserRegisterToken(data.accessToken);
                            target.reset();
                        } else {
                            if (data.message == 'Internal server error') {
                                alert('Такое имя уже есть');
                            } else {
                                alert(data.message);
                            }
                        }
                    });
            } catch (error) {
                alert(error);
            }
            
        } else {
            const user = {
                password: formData.get('password'),
                email: formData.get('email')
            }

            await fetch(URL.DOMEN + URL.LOGIN, {
                method: 'POST',
                headers: {
                    'Authorization': `${userRegisterToken}`,
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            }) 
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.statusCode == 404) {
                        alert(data.message);
                    } else if (data.statusCode == 401) {
                        alert(data.message);
                    } else if (data.statusCode == 400) {
                        alert(data.message);
                    } else if (data.user) {
                        setUser({
                            user: {
                                email: data.user.email,
                            },
                            accessToken: data.accessToken
                        });
                        setActive(false);
                    }
                });
        }
    }

    return (
        <form
            className={styles['modal-wrapper']}
            onClick={() => setActive(false)}
            onSubmit={(e) => submitForm(e)}
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
                        <span> Email:</span>
                        <input name='email' type="email" />
                    </label>
                    <label>
                        <span> Пароль:</span>
                        <input name='password' type="password" />
                    </label>
                    {
                        toggle ?
                            ''
                            :
                            <>
                                <label>
                                    <span> Номер телефона:</span>
                                    <input name='phone' type="text" />
                                </label>
                                <label>
                                    <span> Имя:</span>
                                    <input name='name' type="text" />
                                </label>
                            </>
                    }
                </div>
                <div className={styles.buttons}>
                    <button
                        className={styles.ok}
                    >
                        {toggle ? 'Войти' : 'Зарегистрироваться'}
                    </button>
                    
                    <button
                        className={styles.toggle}
                        onClick={() => setToggle(!toggle)}
                        type='button'
                    >
                        { toggle ? 'Зарегистрироваться' : 'Войти'}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default ModalLogin;