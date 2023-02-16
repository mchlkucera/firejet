import Group407 from "assets/Group407";
import SwitchOnOff1 from "assets/SwitchOnOff1";

export default function RGBDevice(props: RGBDeviceProps) {
  return (
    <div className={`text-left font-['Inter']`}>
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(255,_255,_255,_0.12)_inset] [box-shadow-width:1px] absolute left-5 rounded-2xl w-[360px] h-[70px] top-[497px] bg-[rgba(255,255,255,0.24)] overflow-clip"
      >
        <Group407 />
        <div>
          <div className="absolute left-4 w-[79.1px] h-[34px] top-[17.95px]">
            <div className="inset-0 absolute w-[79.103515625px]">
              <p
                className="right-0 top-0 absolute text-base font-semibold leading-none text-white inline m-0 left-[0.13%] bottom-[52.94%]"
              >
                Můj pásek
              </p>
              <p
                className="left-0 bottom-0 absolute text-xs font-medium leading-none inline m-0 right-[68.4%] top-[64.71%] text-[rgba(255,255,255,0.6)]"
              >
                RGB
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="absolute bg-white w-[169.66615295410156px] h-[58.51px] left-[-195.66px] top-[1.92px] drop-shadow-lg"
           />
        </div>
        <div className="text-white font-semibold">
          <div
            className="py-0.5 pl-2.5 pr-0 absolute flex items-start top-[25.5px] right-[66.46px] bg-[rgba(255,255,255,0.16)] overflow-clip gap-[8.39px] rounded-[10.49px]"
          >
            <div>
              <p className="relative m-0 text-[10px] leading-[normal]">
                Vodopády
              </p>
            </div>
            <div>
              <p
                className="absolute m-0 h-3 left-[41.46px] top-[16.5px] text-[10px] leading-[normal]"
              >
                OFF
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="absolute bg-white w-[364px] h-[70px] left-[-381px] top-[-0.05px] drop-shadow-lg"
           />
        </div>
        <SwitchOnOff1 />
        <div>
          <div
            className="w-1.5 -left-8 absolute rounded-xl h-[19px] top-[25px] bg-[rgba(217,217,217,1)]"
           />
        </div>
      </div>
    </div>
  );
}

RGBDevice.defaultProps = {};

interface RGBDeviceProps {}

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
