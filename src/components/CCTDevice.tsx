import Ellipse132Stroke1 from "assets/Ellipse132Stroke1";

export default function CCTDevice(props: CCTDeviceProps) {
  return (
    <div className={`text-left font-['Inter']`}>
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(255,_255,_255,_0.12)_inset] [box-shadow-width:1px] absolute rounded-2xl w-[359.9px] h-[70px] left-[20.1px] top-[418.87px] bg-[rgba(255,255,255,0.12)] overflow-clip"
      >
        <div>
          <div className="absolute left-4 w-[58.79px] h-[34px] top-[18.13px]">
            <p
              className="right-0 top-0 absolute text-base font-semibold leading-none text-white inline m-0 left-[1.34%] bottom-[52.94%]"
            >
              Teplota
            </p>
            <p
              className="left-0 bottom-0 absolute text-xs font-medium leading-none inline m-0 right-[55.77%] top-[64.71%] text-[rgba(255,255,255,0.6)]"
            >
              CCT
            </p>
          </div>
        </div>
        <div>
          <div
            className="top-0 absolute bg-white w-[174.00991821289062px] h-[62.96px] left-[-213.62px] drop-shadow-lg"
           />
        </div>
        <div>
          <div
            className="absolute bg-white w-[278px] h-[70px] left-[-294.1px] top-[0.13px] drop-shadow-lg"
           />
        </div>
        <div>
          <div className="absolute top-3.5 w-[42px] h-[42px] left-[302px]">
            <div
              className="inset-0 absolute rounded-full bg-[rgba(255,255,255,0.12)]"
             />
            <Ellipse132Stroke1 />
          </div>
        </div>
        <div>
          <div
            className="w-1.5 absolute rounded-xl h-[19px] left-[-35.1px] top-[25.13px] bg-[rgba(217,217,217,1)]"
           />
        </div>
        <div className="text-white font-semibold">
          <div
            className="py-0.5 pl-2.5 pr-0 absolute flex items-start top-[26.13px] right-[71px] bg-[rgba(255,255,255,0.16)] overflow-clip gap-[8.39px] rounded-[10.49px]"
          >
            <div>
              <p className="relative m-0 text-[10px] leading-[normal]">
                OFF
              </p>
            </div>
            <div>
              <p
                className="right-2.5 absolute m-0 h-3 top-[-15.5px] text-[10px] leading-[normal]"
              >
                ON
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CCTDevice.defaultProps = {};

interface CCTDeviceProps {}

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
