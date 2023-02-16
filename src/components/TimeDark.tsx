import Component from "assets/Component";

export default function TimeDark(props: TimeDarkProps) {
  return (
    <div
      className="absolute w-[56.66px] h-[22.03px] left-[22.03px] top-[12.59px] overflow-clip rounded-[20.99px]"
    >
      <Component />
    </div>
  );
}

TimeDark.defaultProps = {};

interface TimeDarkProps {}

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
