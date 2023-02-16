export default function Rectangle21Stroke(props: Rectangle21StrokeProps) {
  return (
    <div className="h-3.5 left-0 top-0 absolute w-[25px]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 25 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 3.754 0.837 H 21.591 C 23.33 0.837 24.739 2.247 24.739 3.985 V 10.281 C 24.739 12.019 23.33 13.429 21.591 13.429 H 3.754 C 2.016 13.429 0.606 12.019 0.606 10.281 V 3.985 C 0.606 2.247 2.016 0.837 3.754 0.837 Z M 3.754 1.887 C 2.595 1.887 1.655 2.826 1.655 3.985 V 10.281 C 1.655 11.44 2.595 12.379 3.754 12.379 H 21.591 C 22.75 12.379 23.69 11.44 23.69 10.281 V 3.985 C 23.69 2.826 22.75 1.887 21.591 1.887 H 3.754 Z"
          fill="#EBEBF5"
          fillOpacity="0.3"
         />
      </svg>
    </div>
  );
}

Rectangle21Stroke.defaultProps = {};

interface Rectangle21StrokeProps {}

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
