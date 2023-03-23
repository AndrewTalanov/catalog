import Dashed from '../dashed/Dashed';
import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = () => {
    return (
        <div className={styles.breadcrumbs}>
            <a href='#'>Главная</a>
            <Dashed
                height={16}
            />
            <p>Косметика и гигиена</p>
        </div>
    );
}

export default BreadCrumbs;