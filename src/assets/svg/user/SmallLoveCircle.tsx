import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

export default function SmallLoveCircle() {

    return (
        <Svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <Rect width="35.5" height="35.5" rx="17.75" fill="#FF2D89" />
            <Path d="M22.0067 10.5537C20.2896 10.5537 18.8224 11.7776 18.0162 12.6214C17.2101 11.7776 15.7462 10.5537 14.0299 10.5537C11.0716 10.5537 9.00635 12.6157 9.00635 15.5674C9.00635 18.8197 11.5714 20.9219 14.0528 22.9552C15.2243 23.9162 16.4368 24.9091 17.3666 26.0101C17.5231 26.1945 17.7525 26.301 17.9933 26.301H18.0408C18.2825 26.301 18.5111 26.1936 18.6667 26.0101C19.5982 24.9091 20.8098 23.9154 21.9821 22.9552C24.4628 20.9227 27.0294 18.8206 27.0294 15.5674C27.0294 12.6157 24.9641 10.5537 22.0067 10.5537Z" fill="white" />
        </Svg>
    )
}