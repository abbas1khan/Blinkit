import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const SupportSVG = ({ size = 21, color = "#000000" }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={size}
        height={size}
        x={0}
        y={0}
        viewBox="0 0 32 32"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        className=""
    >
        <G transform="matrix(1.05,0,0,1.05,-0.8000000000000007,-0.8000000000000007)">
            <Path
                d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z"
                fill={color}
                opacity={1}
                data-original={color}
            />
            <Path
                d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zM16 16H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z"
                fill={color}
                opacity={1}
                data-original={color}
            />
        </G>
    </Svg>
);
export default SupportSVG