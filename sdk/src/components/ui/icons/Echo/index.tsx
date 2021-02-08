


import React from 'react';
import Svg, { SvgProps } from '../Svg';

interface EchoProps extends SvgProps {
  muted?: boolean;
  poorConnection?: boolean;
}

const Echo: React.SFC<EchoProps> = ({
  muted = false,
  poorConnection = false,
  ...rest
}) => (
  <Svg {...rest}>
    {poorConnection ? (
      muted ? (
        <path d="M12.463 18.992l.037 1c-.145.005-.29.008-.438.008-.19-.003-.361-.003-.54-.008l.033-1c.165.006.335.007.505.008.138 0 .271-.003.402-.008zM4.146 4.146c.194-.195.511-.195.707 0l2.228 2.229c-.005-.013-.014-.024-.02-.037l.913.912c-.016-.008-.03-.019-.045-.027l1.447 1.446.026.01 1.23 1.229-.021-.003 5.387 5.388v-.018l.298.297h.014l.537.538-.015.015 3.02 3.021c.195.195.195.512 0 .707-.098.098-.226.147-.354.147-.127 0-.255-.049-.352-.146L17 17.707v.11h-1v-.943h.169l-.09-.088c-.966.532-2.556.786-4.08.786-2.171 0-4.489-.512-4.92-1.622h-.08v-.943h1v.565c0 .256 1.375 1 4 1 1.57 0 2.682-.267 3.332-.535l-6.47-6.47C8 9.313 7.337 8.93 7.101 8.41H7v-.702L4.146 4.854c-.195-.196-.195-.513 0-.708zm5.616 14.647c.278.055.575.101.89.135l-.11.994c-.345-.038-.672-.087-.977-.149zm4.49-.005l.2.98c-.305.063-.632.114-.978.152l-.109-.994c.312-.034.61-.081.886-.138zm-6.05-.568c.17.123.417.243.716.346l-.328.945c-.396-.137-.724-.299-.974-.48zm7.604-.006l.596.803c-.246.184-.575.348-.974.488l-.332-.944c.3-.105.546-.226.71-.348zM8 16.895v.942H7v-.942h1zm0-3.772v.943H7v-.943h1zm9-.019v.943h-.813L16 13.86v-.756h1zm-9-1.866v.943H7v-.943h1zm9-.019v.942h-1v-.942h1zM8 9.352v.943H7v-.943h1zm9-.018v.942h-1v-.942h1zm0-1.886v.942h-.091c-.46 1.066-2.68 1.567-4.796 1.583l-1.03-1.03c.286.021.592.032.917.032 2.625 0 4-.743 4-1v-.527h1zM12 4c2.408 0 5 .626 5 2l-.001.005H17v.5h-.132C16.315 7.527 14.09 8 12 8c-.678 0-1.369-.052-2.014-.153L8.563 6.424C9.194 6.706 10.349 7 12 7c2.625 0 4-.743 4-1s-1.375-1-4-1c-2.372 0-3.712.604-3.95.91l-.702-.702C8.128 4.385 10.117 4 12 4zM9.892 5.648c.514 0 .931.142.931.318 0 .176-.417.317-.93.317-.515 0-.932-.141-.932-.317 0-.176.417-.318.931-.318zm4.328 0c.515 0 .932.142.932.318 0 .176-.417.317-.932.317-.513 0-.93-.141-.93-.317 0-.176.417-.318.93-.318z" />
      ) : (
        <path d="M12.46 18.992l.038 1c-.144.005-.29.008-.436.008-.181-.003-.362-.003-.54-.008l.03-1c.167.006.335.007.508.008.136 0 .27-.003.4-.008zm-2.697-.2c.277.056.573.102.887.136l-.109.994c-.345-.038-.673-.088-.979-.15zm4.488-.004l.201.98c-.305.063-.632.114-.978.152l-.109-.994c.312-.034.61-.081.886-.138zm-6.046-.568c.168.122.414.242.714.345l-.328.945c-.397-.137-.725-.299-.974-.48zm7.603-.008l.592.806c-.248.183-.576.346-.973.485l-.332-.942c.3-.105.546-.227.713-.35zM8 16.893v.942H7v-.942h1zm9-.017v.942h-1v-.942h1zm0-1.886v.942h-.071c-.415 1.121-2.744 1.64-4.929 1.64-2.173 0-4.489-.513-4.922-1.622H7v-.943h1v.564c0 .257 1.375 1 4 1s4-.743 4-1v-.58h1zm-9-1.869v.943H7v-.943h1zm9-.016v.942h-1v-.942h1zm-9-1.87v.943H7v-.943h1zm9-.016v.942h-1v-.942h1zM8 9.351v.943H7v-.943h1zm9-.017v.942h-1v-.942h1zm0-1.885v.942h-.092C16.44 9.475 14.149 9.976 12 9.976c-2.139 0-4.417-.495-4.901-1.567H7v-.944h1v.51c0 .258 1.375 1 4 1s4-.742 4-1V7.45h1zM12 4c2.408 0 5 .626 5 2l-.001.005H17v.5h-.132C16.315 7.527 14.09 8 12 8c-2.09 0-4.315-.473-4.868-1.495H7v-.5V6c0-1.374 2.592-2 5-2zm0 1c-2.625 0-4 .743-4 1s1.375 1 4 1 4-.743 4-1-1.375-1-4-1zm-2.107.647c.515 0 .932.143.932.318 0 .176-.417.319-.932.319-.515 0-.932-.143-.932-.319 0-.175.417-.317.932-.317zm4.329 0c.514 0 .93.143.93.318 0 .176-.416.319-.93.319-.515 0-.932-.143-.932-.319 0-.175.417-.317.932-.317z" />
      )
    ) : muted ? (
      <path d="M4.146 4.146c.196-.195.512-.195.708 0l15 15c.195.196.195.512 0 .708-.098.097-.226.146-.354.146-.128 0-.256-.049-.354-.146L17 17.707V18c0 1.374-2.592 2-5 2s-5-.626-5-2V7.707L4.146 4.854c-.195-.196-.195-.512 0-.708zM16 16.825c-.972.505-2.516.747-4 .747-1.479 0-3.025-.237-4-.738V18c0 .257 1.375 1 4 1s4-.743 4-1zM8 9.232v6.34c0 .257 1.375 1 4 1 1.569 0 2.682-.265 3.331-.534L8.86 9.567c-.317-.094-.608-.205-.86-.335zM12 4c2.409 0 5 .626 5 2v8.909l-1-1V9.237c-.96.494-2.474.73-3.934.738L11.03 8.939c.302.022.624.037.97.037 2.625 0 4-.743 4-1v-.714c-.974.5-2.52.738-4 .738-.698 0-1.41-.054-2.072-.163L8.463 6.372C9.063 6.669 10.246 7 12 7c2.625 0 4-.743 4-1s-1.375-1-4-1c-2.46 0-3.806.649-3.967.942L7.62 5.53l-.297-.296C8.088 4.393 10.099 4 12 4zM9.892 5.648c.515 0 .931.142.931.318 0 .176-.416.317-.93.317-.515 0-.932-.141-.932-.317 0-.176.417-.318.931-.318zm4.33 0c.513 0 .93.142.93.318 0 .176-.417.317-.93.317-.515 0-.932-.141-.932-.317 0-.176.417-.318.931-.318z" />
    ) : (
      <path d="M12 4c2.408 0 5 .626 5 2v12c0 1.374-2.592 2-5 2s-5-.626-5-2V6c0-1.374 2.592-2 5-2zm4 12.834c-.975.5-2.521.739-4 .739s-3.025-.238-4-.74V18c0 .257 1.375 1 4 1s4-.743 4-1zm0-7.595c-.975.5-2.521.738-4 .738s-3.025-.237-4-.738v6.334c0 .257 1.375 1 4 1s4-.743 4-1zm0-1.977c-.975.5-2.521.738-4 .738s-3.025-.237-4-.738v.715c0 .257 1.375 1 4 1s4-.743 4-1zM12 5c-2.625 0-4 .744-4 1 0 .257 1.375 1 4 1s4-.743 4-1c0-.256-1.375-1-4-1zm-2.108.648c.515 0 .932.143.932.32 0 .173-.417.316-.932.316-.514 0-.931-.143-.931-.317 0-.176.417-.319.93-.319zm4.329 0c.515 0 .932.143.932.32 0 .173-.417.316-.932.316-.514 0-.931-.143-.931-.317 0-.176.417-.319.93-.319z" />
    )}
  </Svg>
);

Echo.displayName = 'Echo';

export default Echo;
