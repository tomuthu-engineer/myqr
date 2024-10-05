import React, { useEffect, useRef } from 'react';
import QRCodeStyling, { Options, DrawType } from 'qr-code-styling';
import { Button } from '@/components/ui/button';

interface QRCodeProps {
  data: string;
}

const QRCode: React.FC<QRCodeProps> = ({ data }) => {
  const options: Options = {
    width: 300,
    height: 300,
    type: 'svg' as DrawType,
    data: data,
    image: '',
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'Q',
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: 'anonymous',
    },
    dotsOptions: {
      color: '#222222',
      type: 'rounded',
    },
    backgroundOptions: {
      color: '#FFF',
    },
    cornersSquareOptions: {
      color: '#222222',
      type: 'extra-rounded',
    },
    cornersDotOptions: {
      color: '#222222',
      type: 'dot',
    },
  };

  const qrCode = new QRCodeStyling(options);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    qrCode.update({ ...options, data });
  }, [data, qrCode, options]);

  const onDownloadClick = () => {
    qrCode.download({
      extension: 'png',
    });
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='relative h-[300px] w-[300px]' ref={ref}></div>
      <div className='flex gap-3 mt-4'>
        <Button onClick={onDownloadClick}>Download</Button>
      </div>
    </div>
  );
};

export default QRCode;
