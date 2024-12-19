import React from 'react';
import ActiveImage from './ActiveImage';
import { View } from 'react-native';
import InActiveImage from './InActiveImage';

export default function CheckInCard({ state, interest, item }: { state: boolean, interest?: any, item: string }) {

    return (
        <View style={{ padding: 19, paddingBottom: 0 }}>
            {state ?
                <InActiveImage item={item} /> :
                <ActiveImage interest={interest} item={item} />}
        </View>
    )
}