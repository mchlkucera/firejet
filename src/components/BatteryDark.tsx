import Rectangle23 from "assets/Rectangle23";
import Rectangle21Stroke from "assets/Rectangle21Stroke";

export default function BatteryDark(props: BatteryDarkProps) {
  return (
    <div className="relative w-[26.23px] h-[12.59px]">
      <Rectangle23 />
      <Rectangle21Stroke />
      <div
        className="absolute bg-white w-[19.94px] h-[8.39px] left-[2.1px] top-[calc(50%_-_4.2px_+_0px)] rounded-[1.05px]"
       />
    </div>
  );
}

BatteryDark.defaultProps = {};

interface BatteryDarkProps {}

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
