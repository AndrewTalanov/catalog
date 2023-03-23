import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Card from "../../components/card/Card";

import iconSearch from '../../assets/img/search.svg';

const Uikit = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 15, alignItems: 'flex-start' }}>
            <Button
                padding={{ t: 20, r: 50, b: 20, l: 50 }}
                fontSize={14}
            >
                привет
            </Button>

            <Input
                type="text"
                placeholder="Поиск..."
                button={{
                    children: <img src={iconSearch} alt='Иконка поиска' />,
                    padding: { t: 13, r: 12, b: 12, l: 13 }
                }}
            />

            <div style={{ display: 'flex', gap: '20px' }}>
                <Card
                    id={1}
                    imageUrl="https://i.pinimg.com/originals/a9/6b/08/a96b086b33c39d6fcaa943d5a20b458b.jpg"
                    name="ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник"
                    sizeType="вес"
                    size="3 кг"
                    barcode="8001090746626"
                    manufacturer="Procter & Gamble"
                    brand="Ariel"
                    price={'53,95'}
                />

                <Card
                    id={2}
                    imageUrl="https://i.pinimg.com/originals/a9/6b/08/a96b086b33c39d6fcaa943d5a20b458b.jpg"
                    name="ARIEL Автмат Гель СМС жидкое fsdfds fds"
                    sizeType="вес"
                    size="3 кг"
                    barcode="8001090746626"
                    manufacturer="Procter & Gamble"
                    brand="Ariel"
                    price={'53,95'}
                />
            </div>
        </div>
    )
}

export default Uikit;