import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const ShareSVG = ({ size = 21, color = "#000" }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={size}
        height={size}
        x={0}
        y={0}
        viewBox="0 0 24 24"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        className=""
    >
        <G transform="matrix(1.0899999999999994,0,0,1.0899999999999994,-1.0569112765788944,-1.0799649167060785)">
            <Path
                fill={color}
                fillRule="evenodd"
                d="M12.62 3.316a.75.75 0 0 1 .805.122l8.22 7.25a1.75 1.75 0 0 1 0 2.624l-8.22 7.25A.75.75 0 0 1 12.179 20v-3.75c-1.948.007-3.614.06-5.126.494-1.61.461-3.071 1.364-4.453 3.206a.75.75 0 0 1-1.35-.45c0-4.619 1.529-7.594 3.817-9.398 2.094-1.65 4.722-2.24 7.112-2.337V4a.75.75 0 0 1 .441-.684zm1.059 2.345V8.3a.951.951 0 0 1-.941.951c-2.362.026-4.854.54-6.743 2.03-1.527 1.204-2.74 3.11-3.12 6.126a9.192 9.192 0 0 1 3.765-2.105c1.89-.541 3.94-.551 6.088-.552a.95.95 0 0 1 .95.95v2.639l6.975-6.151a.25.25 0 0 0 0-.375z"
                clipRule="evenodd"
                opacity={1}
                data-original={color}
                className=""
            />
        </G>
    </Svg>
);
export default ShareSVG