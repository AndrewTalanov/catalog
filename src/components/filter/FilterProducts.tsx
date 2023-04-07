import styles from './FilterProducts.module.scss';
import Button from '../button/Button';
import iconDelete from '../../assets/img/delete.svg';
import FilterPrice from '../filter-price/FilterPrice';
import { FilterProductsType } from './FilterProductsType';

const FilterProducts: React.FC<FilterProductsType> = ({minPrice, maxPrice, setCurrentMinPrice, setCurrentMaxPrice}) => {

    const submitFilters = (e: any) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
    
        const min = formData.get('min');
        const max = formData.get('max');

        if (min && max) {
            setCurrentMinPrice(+min);
            setCurrentMaxPrice(+max);
        }
    }

    return (
        <form className={styles.filter} onSubmit={(e) => submitFilters(e)}>
            <h3>ПОДБОР ПО ПАРАМЕТРАМ</h3>

            <FilterPrice
                minPriceCard={minPrice}
                maxPriceCard={maxPrice}
            />

            <div className={styles["filter-accept"]}>
                <Button
                    type='submit'
                    padding={{
                        t: 21,
                        r: 51,
                        b: 21,
                        l: 51
                    }}
                >
                    Показать
                </Button>

                <Button
                    type='reset'
                    padding={{
                        t: 20,
                        r: 20,
                        b: 20,
                        l: 20
                    }}
                >
                    <img src={iconDelete} alt="Очистить форму" />
                </Button>
            </div>




        </form>
    );
}

export default FilterProducts;