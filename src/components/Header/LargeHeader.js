import React from 'react';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

const LargeHeader = ({ title }) => {
    return (
        <IonHeader collapse='condense'>
            <IonToolbar style={{ background: "#f0652f" }} color='primary'>
                <IonTitle size='Large'>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default LargeHeader;