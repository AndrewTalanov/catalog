import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import Select from '../../components/select/Select';
import styles from './Catalog.module.scss';
import ChapterItem from '../../components/chapterItem/ChapterItem';
import FilterProducts from '../../components/filter/FilterProducts';
import Card from '../../components/card/Card';
import { optionsList } from './data/oprionsList';
import { useState, useEffect } from 'react';
import { CardType } from '../../components/card/CardType';
import { URL } from '../../URL';

const Data: CardType[] = [];
const chapterItemList: any[] = [];

await fetch(URL.DOMEN + URL.PRODUCTS)
    .then(response => response.json())
    .then(data => Data.push(...data.product));

await fetch(URL.DOMEN + URL.CATEGORY)
    .then(response => response.json())
    .then(data => chapterItemList.push(...data));

const Catalog = () => {

    const [cart, setCart] = useState<number[]>([]);

    const [chapter, setChapter] = useState([]);
    const [dataCard, setDataCard] = useState<CardType[]>(Data);

    const [select, setSelect] = useState(optionsList[0].label);

    const [minPriceCard, setMinPriceCard] = useState(() => dataCard.length ? dataCard.sort((a, b) => a.price - b.price)[0].price : 0);
    const [maxPriceCard, setMaxPriceCard] = useState(() => dataCard.length ? dataCard.sort((a, b) => b.price - a.price)[0].price : 0);

    const [currentMinPrice, setCurrentMinPrice] = useState(minPriceCard);
    const [currentMaxPrice, setCurrentMaxPrice] = useState(maxPriceCard);

    // Сортировка по категориям
    const data: CardType[] = [...Data];

    if (chapter.length > 0) {

        data.length = 0;

        Data.filter(product => {

            chapter.forEach(el => {
                if (product.categoryId == el) {
                    if (!data.includes(product)) {
                        data.push(product);
                    }
                }
            });
        });
    }

    // Сортировка по цене
    const sortedPrice: CardType[] = [];

    data.filter((product) => {
        if (product.price >= currentMinPrice && product.price <= currentMaxPrice) {
            sortedPrice.push(product);
        }
    });

    useEffect(() => {
        setDataCard(sortedPrice);
    }, [currentMinPrice, chapter, currentMaxPrice]);

    // сортировка товаров
    if (select == optionsList[0].label) {
        dataCard.sort((a, b) => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
    }
    else if (select == optionsList[1].label) {
        dataCard.sort((a, b) => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        }).reverse();
    }
    else if (select == optionsList[2].label) {
        dataCard.sort((a, b) => a.price - b.price);
    }
    else if (select == optionsList[3].label) {
        dataCard.sort((a, b) => b.price - a.price);
    }


    return (
        <div className={styles.catalog}>
            <div className="wrapper">
                <Navigation />
            </div>

            <hr className={styles.hr} />

            <div className="wrapper">
                <Header
                    Data={Data}
                    cart={cart}
                    setCart={setCart}
                />
            </div>

            <hr className={styles.hr} />

            <div className="wrapper">
                <BreadCrumbs />

                <main className={styles.main}>

                    <div className={styles.title}>
                        <h1>Косметика и гигиена</h1>
                        <div className={styles.param}>
                            <Select
                                options={optionsList}
                                select={select}
                                setSelect={setSelect}
                            />
                        </div>
                    </div>

                    <div className={styles.chapter}>
                        {chapterItemList.map((el, i) => {
                            return <ChapterItem
                                id={el.id}
                                key={i}
                                chapter={chapter}
                                setChapter={setChapter}
                            >
                                {el.name}
                            </ChapterItem>
                        })}
                    </div>

                    <div className={styles.content}>
                        <div>
                            <FilterProducts
                                minPrice={minPriceCard}
                                maxPrice={maxPriceCard}
                                setCurrentMinPrice={setCurrentMinPrice}
                                setCurrentMaxPrice={setCurrentMaxPrice}
                            />

                        </div>

                        <div className={styles["content-list"]}>
                            {dataCard.map(el => {
                                return <Card
                                    key={el.id}
                                    id={el.id}
                                    images={el.images}
                                    name={el.name}
                                    barcode={el.barcode}
                                    manufacturer={el.manufacturer}
                                    brand={el.brand}
                                    categoryId={el.categoryId}
                                    price={el.price}
                                    cart={cart}
                                    setCart={setCart}
                                />
                            })}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Catalog;
