import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import Select from '../../components/select/Select';
import styles from './Catalog.module.scss';
import ChapterItem from '../../components/chapterItem/ChapterItem';
import Filter from '../../components/filter/FilterProducts';
import Data from '../../Data.json';
import Card from '../../components/card/Card';
import { chapterItemList } from './data/chapterItemList';
import { optionsList } from './data/oprionsList';
import { useState, useEffect } from 'react';

const filterCard = (chapter: never[], setDataCard: any) => {
    if (chapter.length > 0) {

        let data: any = [];
        Data.products.filter(product => {
            product.typeCare.forEach(typeCare => {
                chapter.forEach(el => {
                    if (el == typeCare) {
                        if (!data.includes(product)) {
                            data.push(product);
                        }
                    }
                });
            })
        });

        setDataCard(data);
    } else {
        setDataCard(Data.products);
    }
}

const Catalog = () => {

    let [chapter, setChapter] = useState([]);
    const [dataCard, setDataCard] = useState(Data.products);
    const [select, setSelect] = useState(optionsList[0].label);

    useEffect(() => {
        filterCard(chapter, setDataCard);
    }, [chapter]);

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
        dataCard.sort((a, b) => +a.price - +b.price);
    }
    else if (select == optionsList[3].label) {
        dataCard.sort((a, b) => +b.price - +a.price);
    }


return (
    <div className={styles.catalog}>
        <div className="wrapper">
            <Navigation />
        </div>

        <hr className={styles.hr} />

        <div className="wrapper">
            <Header />
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
                            id={i}
                            key={i}
                            chapter={chapter}
                            setChapter={setChapter}
                        >
                            {el}
                        </ChapterItem>
                    })}
                </div>

                <div className={styles.content}>
                    <div>
                        <Filter />
                    </div>
                    
                    <div className={styles["content-list"]}>
                        {dataCard.map(el => {
                            return <Card
                                key={el.id}
                                id={el.id}
                                imageUrl={el.image_url}
                                name={el.name}
                                sizeType={el.size_type}
                                size={el.size}
                                barcode={el.barcode}
                                manufacturer={el.manufacturer}
                                brand={el.brand}
                                typeCare={el.typeCare}
                                price={el.price}
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
