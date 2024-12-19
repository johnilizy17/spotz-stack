import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function LikeIcon({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width={width ? width : "31"} height={height ? height : "24"} viewBox="0 0 31 24" fill="none" >
            <Path d="M19.9945 3.58984C18.0597 3.58984 16.4065 4.96892 15.4982 5.91969C14.5899 4.96892 12.9403 3.58984 11.0065 3.58984C7.67324 3.58984 5.34616 5.91323 5.34616 9.23907C5.34616 12.9037 8.23631 15.2723 11.0323 17.5634C12.3523 18.6462 13.7185 19.7649 14.7662 21.0055C14.9425 21.2132 15.2009 21.3332 15.4723 21.3332H15.5259C15.7982 21.3332 16.0557 21.2123 16.2311 21.0055C17.2806 19.7649 18.6459 18.6452 19.9668 17.5634C22.7619 15.2732 25.6539 12.9046 25.6539 9.23907C25.6539 5.91323 23.3268 3.58984 19.9945 3.58984Z" fill={color ? color : "#B6B7B8"} />
        </Svg>
    )
}