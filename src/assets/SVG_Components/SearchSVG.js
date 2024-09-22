import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const SearchSVG = ({ size = 21, color = "#000000" }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={size}
        height={size}
        x={0}
        y={0}
        viewBox="0 0 6.35 6.35"
        style={{
            enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        className=""
    >
        <G transform="matrix(1.1699999999999997,0,0,1.1699999999999997,-0.537918145656584,-0.5375339913368213)">
            <Path
                d="M2.894.511a2.384 2.384 0 0 0-2.38 2.38 2.386 2.386 0 0 0 2.38 2.384c.56 0 1.076-.197 1.484-.523l.991.991a.265.265 0 0 0 .375-.374l-.991-.992a2.37 2.37 0 0 0 .523-1.485C5.276 1.58 4.206.51 2.894.51zm0 .53c1.026 0 1.852.825 1.852 1.85S3.92 4.746 2.894 4.746s-1.851-.827-1.851-1.853.825-1.852 1.851-1.852z"
                paintOrder="stroke fill markers"
                fill={color}
                opacity={1}
                data-original={color}
                className=""
            />
        </G>
    </Svg>
);
export default SearchSVG