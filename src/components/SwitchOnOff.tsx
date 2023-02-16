import Ellipse132Stroke from "assets/Ellipse132Stroke";

export default function SwitchOnOff(props: SwitchOnOffProps) {
  return (
    <div>
      <div
        className="absolute top-[20.59%] bottom-[20.59%] left-[80.83%] right-[5.28%]"
      >
        <div
          className="inset-0 absolute rounded-full bg-[rgba(68,68,68,1)]"
         />
        <Ellipse132Stroke />
      </div>
    </div>
  );
}

SwitchOnOff.defaultProps = {};

interface SwitchOnOffProps {}

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
