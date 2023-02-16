export default function SwitchOnOff1(props: SwitchOnOff1Props) {
  return (
    <div>
      <div className="top-0 absolute w-[158px] h-[70px] left-[202px]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 158 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_199_1007)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 121 56 C 132.598 56 142 46.598 142 35 C 142 23.402 132.598 14 121 14 C 109.402 14 100 23.402 100 35 C 100 46.598 109.402 56 121 56 Z M 121.75 24.65 C 121.75 24.236 121.414 23.9 121 23.9 C 120.586 23.9 120.25 24.236 120.25 24.65 V 29.445 C 120.25 29.859 120.586 30.195 121 30.195 C 121.414 30.195 121.75 29.859 121.75 29.445 V 24.65 Z M 116.598 27.892 C 116.945 27.667 117.045 27.202 116.819 26.855 C 116.594 26.507 116.13 26.408 115.782 26.633 C 113.141 28.344 111.39 31.319 111.39 34.704 C 111.39 40.011 115.693 44.313 121 44.313 C 126.307 44.313 130.609 40.011 130.609 34.704 C 130.609 31.319 128.859 28.344 126.218 26.633 C 125.87 26.408 125.406 26.507 125.18 26.855 C 124.955 27.202 125.054 27.667 125.402 27.892 C 127.635 29.338 129.109 31.849 129.109 34.704 C 129.109 39.183 125.479 42.813 121 42.813 C 116.521 42.813 112.89 39.183 112.89 34.704 C 112.89 31.849 114.365 29.338 116.598 27.892 Z"
              fill="url(#paint0_radial_199_1007)"
             />
          </g>
          <defs>
            <filter
              id="filter0_dd_199_1007"
              x="0"
              y="-83"
              width="242"
              height="242"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
               />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
               />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="50" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
               />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_199_1007"
               />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
               />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="50" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
               />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_199_1007"
                result="effect2_dropShadow_199_1007"
               />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_199_1007"
                result="shape"
               />
            </filter>
            <radialGradient
              id="paint0_radial_199_1007"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(121 35) rotate(90) scale(21)"
            >
              <stop offset="0.46875" stopColor="white" />
              <stop offset="1" stopColor="#E8E8E8" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

SwitchOnOff1.defaultProps = {};

interface SwitchOnOff1Props {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
