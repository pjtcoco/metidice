import { IconProps } from "./props";

const IsometricDataPieIcon: React.FC<IconProps> = ({ color = "secondary" }) => {
  return (
    <span className={`ensome__icon_idata__${color}`}>
      <svg width="50" height="37" viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M38.9385 21.4193C38.9437 21.477 38.9413 21.5351 38.9313 21.5921C38.3351 23.9951 36.2217 26.1707 33.0163 27.692C29.438 29.2802 25.5472 29.9965 21.6513 29.7844C17.8779 29.7064 14.1835 28.6656 10.9043 26.7566C8.12234 25.0006 6.56172 22.6901 6.52734 20.2871V21.7936C6.5373 24.2197 8.10334 26.5524 10.9088 28.326C14.1869 30.2329 17.8798 31.2721 21.6513 31.3491C25.5489 31.5612 29.4413 30.8442 33.0208 29.2548C36.2262 27.7354 38.3396 25.5579 38.9358 23.155C38.9901 22.9304 38.9503 21.423 38.9503 21.423C38.9503 21.423 38.9421 21.4239 38.9385 21.4193Z"
          fill="#002B4E"
        />
        <path
          d="M43.4742 15.2651V15.4102C43.4506 16.0941 42.4528 16.596 41.2938 16.596H27.1867C26.6139 16.6074 26.0477 16.469 25.542 16.1939C25.3605 16.1091 25.2032 15.9784 25.0848 15.8143C24.9664 15.6502 24.8909 15.458 24.8652 15.2559V16.7928C24.885 17.0017 24.9586 17.2015 25.0784 17.3719C25.1982 17.5423 25.36 17.6773 25.5474 17.7633C26.0533 18.0379 26.6193 18.1763 27.1921 18.1653H41.2974C42.4564 18.1653 43.4543 17.6635 43.4778 16.9795L43.4742 15.2651Z"
          fill="#002B4E"
        />
        <g filter="url(#filter0_d_220_15539)">
          <path
            d="M20.4857 10.7131C21.7586 10.6068 22.8062 11.2325 22.8062 11.9895V19.1836C22.806 19.4592 22.9129 19.7236 23.1034 19.9188C23.2939 20.1139 23.5524 20.2238 23.8222 20.2243H36.7668C38.0515 20.2243 39.1118 20.8417 38.9308 21.5921C38.3346 23.9951 36.2212 26.1707 33.0159 27.692C29.4376 29.2802 25.5468 29.9965 21.6509 29.7844C17.8772 29.7063 14.1825 28.6655 10.903 26.7567C8.09839 24.9831 6.53234 22.6494 6.52148 20.2243C6.52148 17.9137 7.93373 15.6799 10.5022 13.9331C13.5221 12.0366 16.9535 10.9306 20.492 10.7131H20.4857ZM41.2939 16.5959C42.4529 16.5959 43.4508 16.0941 43.4743 15.4101V15.2253C43.4523 13.8791 43.0084 12.5756 42.2077 11.5062C41.2352 10.209 40.0038 9.13792 38.5952 8.36389C36.9044 7.41333 35.0884 6.71641 33.2031 6.29456C31.1254 5.8161 28.9998 5.58873 26.8702 5.61711C25.7112 5.63097 24.8599 6.22155 24.8599 6.90362V15.2216C24.8795 15.4305 24.953 15.6304 25.0728 15.8008C25.1927 15.9713 25.3546 16.1063 25.5421 16.192C26.0478 16.4671 26.614 16.6055 27.1868 16.5941L41.2939 16.5959Z"
            fill="#185CFF"
          />
        </g>
        <defs>
          <filter id="filter0_d_220_15539" x="5.40146" y="5.61475" width="39.1929" height="28.1262" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2.80007" />
            <feGaussianBlur stdDeviation="0.560014" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.133333 0 0 0 0 0.227451 0 0 0 0.3 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_220_15539" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_220_15539" result="shape" />
          </filter>
        </defs>
      </svg>
    </span>
  );
};

export default IsometricDataPieIcon;
