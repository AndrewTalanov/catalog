import React from 'react';

import styles from './Dashed.module.scss';

import { DashedType } from './DashedType';

const Dashed: React.FC<DashedType> = ({height}) => {
    return (
        <div
            style={{
                height: height
            }}
            className={styles.dashed}></div>
    );
}

export default Dashed;