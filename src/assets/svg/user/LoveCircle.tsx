import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export default function LoveCircle() {

    return (
        <Svg width="53" height="53" viewBox="0 0 53 53" fill="none">
            <Rect width="53" height="53" rx="26.5" fill="#FF2D89" />
            <Path d="M32.8553 15.7563C30.2917 15.7563 28.1012 17.5836 26.8977 18.8434C25.6942 17.5836 23.5085 15.7563 20.9462 15.7563C16.5297 15.7563 13.4463 18.8348 13.4463 23.2416C13.4463 28.0972 17.2757 31.2356 20.9804 34.2713C22.7294 35.706 24.5396 37.1883 25.9278 38.8321C26.1614 39.1073 26.5039 39.2663 26.8634 39.2663H26.9344C27.2952 39.2663 27.6364 39.1061 27.8688 38.8321C29.2595 37.1883 31.0684 35.7047 32.8186 34.2713C36.5221 31.2368 40.354 28.0984 40.354 23.2416C40.354 18.8348 37.2706 15.7563 32.8553 15.7563Z" fill="white" />
        </Svg>
    )
}