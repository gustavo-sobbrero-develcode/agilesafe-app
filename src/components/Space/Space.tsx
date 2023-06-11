import React from 'react';
import { View } from 'react-native';

interface SpaceProps {
    value: string | number | undefined
}

const Space = ({ value }: SpaceProps) => {
    return (
        <View style={{ paddingBottom: value }}>
        </View>
    );
};

export default Space;
