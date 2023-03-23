import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import Sort from '../../components/sort/Sort';

import styles from './Catalog.module.scss';

const Catalog = () => {
    return (
        <>
            <div className="wrapper">
                <Navigation/>
            </div>

            <hr className={styles.hr}/>

            <div className="wrapper">
                <Header/>
            </div>
            
            <hr className={styles.hr}/>

            <div className="wrapper">
                <BreadCrumbs/>

                <main className={styles.main}>
                    <div className={styles.title}>
                        <h1>Косметика и гигиена</h1>
                        <div className={styles.param}>
                            <Sort/>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Catalog;
