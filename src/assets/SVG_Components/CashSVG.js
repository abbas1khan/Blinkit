import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { colors } from "../../utils/Theme";

const CashSVG = ({ size = 21, color = colors.text }) => (
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
        <G transform="matrix(1.1199999999999992,0,0,1.1199999999999992,-1.9199999999999875,-1.9199999999999875)">
            <G data-name="Layer 4">
                <Path
                    d="M26 20V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2zM4 8h20v12H4z"
                    fill={color}
                    opacity={1}
                    data-original={color}
                    className=""
                />
                <Path
                    d="M29 10a1 1 0 0 0-1 1v13H7a1 1 0 0 0 0 2h21a2 2 0 0 0 2-2V11a1 1 0 0 0-1-1zM14 10a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"
                    fill={color}
                    opacity={1}
                    data-original={color}
                    className=""
                />
            </G>
        </G>
    </Svg>
);
export default CashSVG