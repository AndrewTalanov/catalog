import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Card from "../../components/card/Card";

import iconSearch from '../../assets/img/search.svg';
import Select from "../../components/select/Select";

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

            

           
        </div>
    )
}

export default Uikit;