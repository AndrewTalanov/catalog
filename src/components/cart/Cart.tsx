import styles from './Cart.module.scss';
import { CartType } from './CartType';
import { CardType } from '../card/CardType';
import { URL } from '../../URL';

const Cart: React.FC<CartType> = ({ setOpenCart, products, setProducts, cart, setCart, user }) => {

    const productsSet = new Set(products);
    const pr: any = [...productsSet];

    let objCount: any = {}

    const searchDouble = (prsFull: any, prs: any) => {
        prs.forEach((value: any, v: any, set: any) => {
            prsFull.forEach((el: any) => {
                if (value.id == el.id) {
                    if (objCount[el.id]) {
                        objCount[value.id] += 1;
                    } else {
                        objCount[value.id] = 1;
                    }
                }
            });
        });
    }
    
    searchDouble(products, productsSet);
    

    const deleteItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.stopPropagation();
        setCart(cart.filter((el: number) => el != id));
        setProducts(products.filter((el: any) => el.id != id));
    }

    const convertObjectToArray = (obj: any) => {
        return Object.keys(obj).reduce((arr, key) => {
          const count = obj[key];
          for (let i = 0; i < count; i++) {
            arr.push(parseInt(key));
          }
          return arr;
        }, []);
      }

    const payCart = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();


        const orders = convertObjectToArray(objCount);

        if (!user) {
            alert('Вы не авторизованы!');    
        } else {

            const body = {
                "userId": user.user.id,
                "productIds": orders
            }
            
            await fetch(URL.DOMEN + URL.ORDER, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(body)
            })
            .then(response => response.json())
            .then(data => {
                setProducts([]);
                setCart([]);
                alert('Заказ успешно оформлен!');
            });
        }
    }

    return (
        <div className={styles.wrapper} onClick={() => setOpenCart(false)}>
            <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
                <h2>Корзина</h2>
                <div className={styles['cart-items']}>
                    {
                        products.length ? pr.map((el: CardType, i: number) => {
                            return (
                                <div key={i} className={styles['cart-item']}>
                                    <div className={styles.img}>
                                        <img src={el.images[0]} alt="картинка товара" />
                                    </div>
                                    <div className={styles.info}>
                                        <p>Название: {el.name}</p>
                                        <p>Кол-во: {objCount[el.id]}</p>
                                        <p>Цена: {el.price * objCount[el.id]}</p>
                                    </div>
                                    <button onClick={(e) => deleteItem(e, el.id)}>Удалить товар</button>
                                </div>
                            );
                        }) : <p> В корзине нет товаров </p>
                    }
                </div>
                {products.length ? <button onClick={(e) => payCart(e)} className={styles.confirm}>Оплатить</button> : <button className={styles.confirm} style={{backgroundColor: '#f5f5f5'}} disabled>Оформить</button> }
            </div>
        </div>
    );
}

export default Cart;
