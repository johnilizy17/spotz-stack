import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function SpotzIcon({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width={width?width:"25"} height={height?height:"24"} viewBox="0 0 25 24" fill="none" >
            <Path d="M20.6979 3.37981C20.8901 3.8467 21 4.28611 21 4.72553C21 5.16495 20.9451 5.54944 20.7803 5.9614C20.643 6.34589 20.4507 6.73038 20.1761 7.11487C19.9289 7.49936 19.6268 7.88385 19.2973 8.29581C18.6107 9.17464 17.8966 10.026 17.1276 10.8499C16.3586 11.6738 15.5622 12.4703 14.7383 13.2667C13.9144 14.0632 13.063 14.8596 12.2116 15.6286C11.3603 16.3976 10.5363 17.2215 9.71244 18.0179C10.7835 17.9355 11.8271 17.7982 12.8708 17.6334C13.9144 17.4687 14.9855 17.4412 16.1115 17.5236C16.4136 17.5236 16.6882 17.5511 16.9628 17.606C17.2375 17.6609 17.4572 17.7158 17.6769 17.8257C17.8966 17.9355 18.0614 18.0729 18.2262 18.2926C18.391 18.4848 18.4733 18.7595 18.5283 19.1439C18.5283 19.2263 18.5557 19.3911 18.5832 19.5834C18.5832 19.8031 18.5832 19.9953 18.5557 20.215C18.5283 20.4347 18.4459 20.5995 18.336 20.7368C18.2262 20.8742 18.0889 20.9291 17.8966 20.9016C17.1002 20.7094 16.2213 20.627 15.2876 20.627C14.3538 20.627 13.3926 20.6819 12.4313 20.8192C11.4701 20.9565 10.5089 21.1213 9.54766 21.341C8.58643 21.5607 7.70759 21.7805 6.88368 22.0276C6.7189 22.0826 6.55412 22.1375 6.36188 22.1924C6.16963 22.2473 6.00485 22.3023 5.8126 22.3297C5.62036 22.3297 5.45558 22.3297 5.29079 22.3297C5.12601 22.3023 4.96123 22.1924 4.82391 22.0551C4.3021 21.4784 4.02746 20.7918 4 20.0228C4 19.7207 4.08239 19.446 4.3021 19.1989C4.49435 18.9792 4.71405 18.7595 4.96123 18.5672C7.15832 16.4525 9.32795 14.3927 11.4701 12.3604C13.6123 10.3281 15.7819 8.21342 17.8966 5.98886C15.4249 6.73038 13.1179 7.88385 10.9758 9.47674C10.8659 9.55913 10.7011 9.69645 10.5089 9.83377C10.3166 9.97109 10.1519 10.1359 9.95961 10.3007C9.79483 10.4654 9.65751 10.6577 9.54766 10.8499C9.43781 11.0422 9.41034 11.207 9.4378 11.3992C9.4378 11.564 9.38288 11.6738 9.30048 11.7562C9.21809 11.8112 9.1357 11.8661 9.02585 11.8386C8.94346 11.8386 8.83361 11.7837 8.72375 11.7288C8.6139 11.6738 8.50404 11.5914 8.42165 11.5091C7.89984 10.9598 7.6252 10.3007 7.57027 9.55913C7.54281 9.11972 7.6252 8.73523 7.87238 8.40566C8.09209 8.0761 8.36672 7.774 8.69629 7.4719C9.24556 7.00502 9.87722 6.53813 10.5363 6.07125C11.2229 5.63183 11.9095 5.19241 12.651 4.80792C13.3926 4.42343 14.1341 4.06641 14.9305 3.73684C15.6995 3.40728 16.496 3.13264 17.2649 2.88547C17.5396 2.80308 17.8691 2.72069 18.1987 2.63829C18.5283 2.5559 18.8578 2.50098 19.1599 2.50098C19.462 2.50098 19.7641 2.58337 20.0388 2.72069C20.3134 2.858 20.5331 3.10518 20.6979 3.4622V3.37981Z" fill={color?color:"#FF2D89"} />
        </Svg>
    )
}