import IPhoneStatusBarUpper from "components/IPhoneStatusBarUpper";
import AllDevices from "components/AllDevices";
import Icons24 from "assets/Icons24";
import Icons25 from "assets/Icons25";
import Ellipse132Stroke2 from "assets/Ellipse132Stroke2";
import CCTDevice from "components/CCTDevice";
import RGBDevice from "components/RGBDevice";

export default function IPhone14ProMockupSpaceBlackLabel(
  props: IPhone14ProMockupSpaceBlackLabelProps
) {
  return (
    <div
      className={`relative w-[393px] h-[852px] bg-[rgba(8,12,12,1)] overflow-clip font-['Inter']`}
      style={props.style}
    >
      <div>
        <div
          className="absolute w-[393.4729309082031px] h-[145.85px] left-[1011.48px] top-[104.93px]"
         />
      </div>
      <IPhoneStatusBarUpper />
      <div>
        <div
          className="absolute w-[146.19528198242188px] h-[116.08px] left-[494.19px] top-[218.96px] bg-[rgba(63,63,63,1)]"
         />
      </div>
      <AllDevices />
      <div className="text-center font-medium">
        <div
          className="absolute bottom-0 flex justify-between items-center pl-[71px] pr-[71px] w-[393.4729309082031px] h-[75.55px] left-[-0.47px]"
        >
          <div
            className="flex flex-col items-center text-white w-[62.955665588378906px] gap-[4.2px]"
          >
            <Icons24 />
            <p className="text-xs m-0 leading-[normal]">Seznam</p>
          </div>
          <div
            className="flex flex-col items-center w-[62.955665588378906px] gap-[4.2px] text-[rgba(255,255,255,0.6)]"
          >
            <Icons25 />
            <p className="text-xs m-0 leading-[normal]">Nastavení</p>
          </div>
        </div>
      </div>
      <div className="text-left">
        <div
          className="[box-shadow:0px_0px_0px_1px_rgba(255,_255,_255,_0.12)_inset] [box-shadow-width:1px] absolute rounded-2xl w-[359.9px] h-[70px] left-[16.89px] top-[281px] overflow-clip"
        >
          <div className="absolute left-4 w-[58px] h-[34px] top-[18px]">
            <p
              className="top-0 absolute text-base font-semibold leading-none text-white inline m-0 left-[0.18%] right-[49.82%] bottom-[52.94%]"
            >
              Bílá
            </p>
            <p
              className="inset-x-0 bottom-0 absolute text-xs font-medium leading-none inline m-0 top-[64.71%] text-[rgba(255,255,255,0.6)]"
            >
              Dimmable
            </p>
          </div>
          <div className="absolute top-3.5 w-[42px] h-[42px] right-[15.9px]">
            <div>
              <div
                className="inset-0 absolute rounded-full bg-[rgba(255,255,255,0.12)] w-[42px] h-[42px]"
               />
            </div>
            <Ellipse132Stroke2 />
          </div>
          <div
            className="[box-shadow:0px_0px_0px_1.049261212348938px_rgba(255,_255,_255,_0.12)_inset] [box-shadow-width:1.05px] px-1.5 py-0.5 absolute inline-flex items-start font-semibold top-[24.9px] right-[68.2px] gap-[8.39px] rounded-[10.49px] text-[rgba(255,255,255,0.4)]"
          >
            <p className="m-0 text-[10.49px] leading-[normal]">OFFLINE</p>
          </div>
        </div>
      </div>
      <div className="text-white text-left font-semibold">
        <div className="absolute left-[26.58px] top-[249px] gap-[9.44px]">
          <p className="text-lg leading-none m-0">Hlavní stůl</p>
        </div>
      </div>
      <div className="text-white text-left font-semibold">
        <div className="absolute left-[25.89px] top-[388.25px] gap-[9.44px]">
          <p className="text-lg leading-none m-0">Párty linka</p>
        </div>
      </div>
      <CCTDevice />
      <RGBDevice />
      <div className="text-white text-left font-semibold">
        <div
          className="absolute flex justify-between items-start w-[341.15px] left-[26px] top-[68px]"
        >
          <p className="text-2xl m-0 tracking-[-0.32px] leading-[normal]">
            Your devices
          </p>
          <div
            className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/e55f7f6c095d8a194ce129e7f1774f18e20aaf29:0.webp)_no-repeat_center_/_contain,linear-gradient(0deg,_rgba(116,_22,_45,_1),_rgba(116,_22,_45,_1))] w-[30.151123046875px] h-[30.15px] rounded-[35px]"
           />
        </div>
      </div>
    </div>
  );
}

IPhone14ProMockupSpaceBlackLabel.defaultProps = {
  style: {},
};

interface IPhone14ProMockupSpaceBlackLabelProps {
  style: Object;
}

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
