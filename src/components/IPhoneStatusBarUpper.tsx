import NetworkSignalDark from "assets/NetworkSignalDark";
import WiFiSignalDark from "assets/WiFiSignalDark";
import BatteryDark from "components/BatteryDark";
import TimeDark from "components/TimeDark";

export default function IPhoneStatusBarUpper(props: IPhoneStatusBarUpperProps) {
  return (
    <div>
      <div
        className="absolute top-0 w-[393.47296142578125px] h-[46.17px] left-[-0.47px] overflow-clip"
      >
        <div
          className="absolute inline-flex items-center top-[16.79px] right-[15.16px] gap-[4.2px]"
        >
          <NetworkSignalDark />
          <WiFiSignalDark />
          <BatteryDark />
        </div>
        <TimeDark />
      </div>
    </div>
  );
}

IPhoneStatusBarUpper.defaultProps = {};

interface IPhoneStatusBarUpperProps {}

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
