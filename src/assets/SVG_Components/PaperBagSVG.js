import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const PaperBagSVG = ({ size = 21, color = "#000" }) => (
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
        <G>
            <Path
                d="M17 7V6c0-2.757-2.243-5-5-5S7 3.243 7 6v1H1v20c0 2.21 1.79 4 4 4h10.68a11.17 11.17 0 0 1-2.17-2H5c-1.1 0-2-.9-2-2V9h4v2h2V9h6v2h2V9h4v2.05c.33-.03.66-.05 1-.05s.67.02 1 .05V7zM9 7V6c0-1.654 1.346-3 3-3s3 1.346 3 3v1zm13 24c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm0-16c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm-1 10.414L17.586 22 19 20.586l2 2 4-4L26.414 20z"
                fill={color}
                opacity={1}
                data-original={color}
                className=""
            />
        </G>
    </Svg>
);
export default PaperBagSVG