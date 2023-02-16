import SwitchOnOff from "components/SwitchOnOff";

export default function AllDevices(props: AllDevicesProps) {
  return (
    <div className={`text-left font-['Inter']`}>
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(255,_255,_255,_0.12)_inset] [box-shadow-width:1px] absolute left-4 rounded-2xl w-[360px] h-[85px] top-[120px] bg-[rgba(255,255,255,0.12)] overflow-clip"
      >
        <div className="text-white font-semibold">
          <p
            className="absolute text-lg leading-none m-0 left-[18.4px] top-[25.5px] tracking-[-0.32px]"
          >
            All devices
          </p>
        </div>
        <div className="font-medium text-[rgba(255,255,255,0.6)]">
          <p
            className="absolute text-xs leading-none m-0 left-[18.4px] top-[47.5px]"
          >
            3 devices
          </p>
        </div>
        <SwitchOnOff />
        <div>
          <div
            className="px-2.5 absolute top-0 bg-white gap-2 flex justify-end items-center pt-[25px] pb-[25px] w-[368px] h-[85px] left-[-385px] drop-shadow-lg"
          >
            <div
              className="w-1.5 rounded-xl h-[19px] bg-[rgba(217,217,217,1)]"
             />
          </div>
        </div>
      </div>
    </div>
  );
}

AllDevices.defaultProps = {};

interface AllDevicesProps {}

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
