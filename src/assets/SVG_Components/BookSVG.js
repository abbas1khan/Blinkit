import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const BookSVG = ({ size = 21, color = "#000" }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={size}
        height={size}
        x={0}
        y={0}
        viewBox="0 0 36 36"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        className=""
    >
        <G transform="matrix(1.1900000000000002,0,0,1.1900000000000002,-3.3250000000000064,-3.419999999999998)">
            <Path
                d="M31 4H7a1 1 0 0 0-1 1v4H4a1 1 0 0 0 0 2h2v6H4a1 1 0 0 0 0 2h2v6H4a1 1 0 0 0 0 2h2v4a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 26H8v-3h2a1 1 0 0 0 0-2H8v-6h2a1 1 0 0 0 0-2H8v-6h2a1 1 0 0 0 0-2H8V6h22z"
                fill={color}
                opacity={1}
                data-original={color}
            />
            <Path
                d="M18.182 22.207a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414l-6.293 6.293-3.182-3.186a1 1 0 0 0-1.414 1.414z"
                fill={color}
                opacity={1}
                data-original={color}
            />
        </G>
    </Svg>
);
export default BookSVG