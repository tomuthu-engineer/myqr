// /utils/qrCodeUtils.ts
import QRCodeStyling, {
    Options,
    DrawType,
    TypeNumber,
    Mode,
    ErrorCorrectionLevel,
    DotType,
    CornerSquareType,
    CornerDotType,
  } from 'qr-code-styling';
  
  export const createQRCode = (options: Options) => {
    return new QRCodeStyling(options);
  };
  
  export const defaultQRCodeOptions: Options = {
    width: 300,
    height: 300,
    type: 'svg' as DrawType,
    data: 'https://secQr.com',
    image: '',
    margin: 10,
    qrOptions: {
      typeNumber: 0 as TypeNumber,
      mode: 'Byte' as Mode,
      errorCorrectionLevel: 'Q' as ErrorCorrectionLevel,
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: 'anonymous',
    },
    dotsOptions: {
      color: '#222222',
      type: 'rounded' as DotType,
    },
    backgroundOptions: {
      color: '#FFF',
    },
    cornersSquareOptions: {
      color: '#222222',
      type: 'extra-rounded' as CornerSquareType,
    },
    cornersDotOptions: {
      color: '#222222',
      type: 'dot' as CornerDotType,
    },
  };
  