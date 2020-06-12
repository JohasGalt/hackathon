import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import randomImage from '../utils/random-image';

export default function () {
    return <View style={styles.wrapper}>
            <Image source={ randomImage() } style={ styles.image } />
            <Image source={ randomImage() } style={ styles.image } />
            <Image source={ randomImage() } style={ styles.image } />
            <Image source={ randomImage() } style={ styles.image } />
    </View>
}

const styles = StyleSheet.create({
    wrapper: { flexBasis: 52, height: 52, width: 52, marginRight: 20, flexWrap: 'wrap' },
    image: { height: 26, flex: 1, flexBasis: '50%', width: 26 }
});
