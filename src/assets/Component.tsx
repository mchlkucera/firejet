export default function Component(props: ComponentProps) {
  return (
    <div
      className="absolute w-[35px] h-[17px] left-[calc(50%_-_17.5px_+_0.71px)] top-[calc(50%_-_8.5px_+_0.63px)]"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 35 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 6.26 14.473 C 9.08 14.473 10.756 12.267 10.756 8.532 C 10.756 7.126 10.487 5.942 9.972 5.028 C 9.226 3.606 7.943 2.837 6.321 2.837 C 3.908 2.837 2.202 4.459 2.202 6.734 C 2.202 8.87 3.739 10.423 5.853 10.423 C 7.151 10.423 8.204 9.815 8.727 8.763 H 8.75 C 8.75 8.763 8.781 8.763 8.788 8.763 C 8.804 8.763 8.858 8.763 8.858 8.763 C 8.858 11.299 7.897 12.813 6.275 12.813 C 5.322 12.813 4.585 12.29 4.331 11.452 H 2.356 C 2.686 13.274 4.231 14.473 6.26 14.473 Z M 6.329 8.847 C 5.053 8.847 4.147 7.94 4.147 6.672 C 4.147 5.435 5.1 4.49 6.337 4.49 C 7.574 4.49 8.527 5.45 8.527 6.703 C 8.527 7.94 7.597 8.847 6.329 8.847 Z"
          fill="white"
         />
        <path
          d="M 13.999 14.365 C 14.729 14.365 15.229 13.842 15.229 13.151 C 15.229 12.451 14.729 11.937 13.999 11.937 C 13.277 11.937 12.77 12.451 12.77 13.151 C 12.77 13.842 13.277 14.365 13.999 14.365 Z M 13.999 8.601 C 14.729 8.601 15.229 8.086 15.229 7.395 C 15.229 6.695 14.729 6.18 13.999 6.18 C 13.277 6.18 12.77 6.695 12.77 7.395 C 12.77 8.086 13.277 8.601 13.999 8.601 Z"
          fill="white"
         />
        <path
          d="M 22.422 14.204 H 24.32 V 12.136 H 25.819 V 10.461 H 24.32 V 3.114 H 21.523 C 19.563 6.065 18.003 8.532 17.004 10.369 V 12.136 H 22.422 V 14.204 Z M 18.841 10.392 C 20.132 8.117 21.285 6.296 22.345 4.728 H 22.453 V 10.507 H 18.841 V 10.392 Z"
          fill="white"
         />
        <path
          d="M 30.046 14.204 H 32.029 V 3.114 H 30.054 L 27.156 5.143 V 7.049 L 29.915 5.112 H 30.046 V 14.204 Z"
          fill="white"
         />
      </svg>
    </div>
  );
}

Component.defaultProps = {};

interface ComponentProps {}

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
