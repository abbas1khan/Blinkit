import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const CreditCardSVG = ({ size = 21, color = "#000000" }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={size}
        height={size}
        x={0}
        y={0}
        viewBox="0 0 512 512"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        className=""
    >
        <G>
            <Path
                d="M456 80H56c-30.878 0-56 25.122-56 56v240c0 30.878 25.122 56 56 56h400c30.878 0 56-25.122 56-56V136c0-30.878-25.122-56-56-56zM56 112h400c13.233 0 24 10.767 24 24v32H32v-32c0-13.233 10.767-24 24-24zm400 288H56c-13.233 0-24-10.767-24-24V200h448v176c0 13.233-10.767 24-24 24z"
                fill={color}
                opacity={1}
                data-original={color}
                className=""
            />
            <Path
                d="M112 352H96c-8.836 0-16-7.164-16-16v-16c0-8.836 7.164-16 16-16h16c8.836 0 16 7.164 16 16v16c0 8.836-7.164 16-16 16z"
                fill={color}
                opacity={1}
                data-original={color}
                className=""
            />
        </G>
    </Svg>
);
export default CreditCardSVG