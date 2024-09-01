import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const MicrophoneSVG = ({ size = 21, color = "#000000" }) => (
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
        <G transform="matrix(1.1299999999999992,0,0,1.1299999999999992,-2.0794937372207514,-2.0799999999999876)">
            <Path
                d="M10 15V8a6 6 0 0 1 12 0v7a6 6 0 0 1-12 0zm15.24 0a1 1 0 0 0-1.21.73l-.3 1.27a8 8 0 0 1-15.46 0L8 15.76a1 1 0 1 0-2 .48l.3 1.21A10 10 0 0 0 15 25v4a1 1 0 0 0 2 0v-4a10 10 0 0 0 8.67-7.5l.3-1.21a1 1 0 0 0-.73-1.29z"
                fill={color}
                opacity={1}
                data-original={color}
                className=""
            />
        </G>
    </Svg>
);
export default MicrophoneSVG