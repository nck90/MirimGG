import SVGAttributeProps from "types/SVGAttributeProps.type";
import * as T from "styles/theme";

const MainLogo = ({ width = 12, height = 3.5 }: SVGAttributeProps) => {
  return (
    <svg
      width={width * 14} // 크기 크게 조정
      height={height * 14}
      viewBox="0 0 116 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0" /* 왼쪽 정렬 */
        y="20" /* 텍스트가 세로로 적절히 내려가도록 조정 */
        font-family="Arial, sans-serif"
        font-size="24" // 텍스트 크기 확대
        font-weight="bold"
        fill={T.blue[700]}
      >
        MIRIM.GG
      </text>
    </svg>
  );
};

export default MainLogo;
