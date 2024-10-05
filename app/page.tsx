'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import dynamic from 'next/dynamic';

// Dynamic import for QRCode component
const DynamicQRCode = dynamic(() => import('@/components/QRCode'), {
  ssr: false, // Disable server-side rendering for this component
});

const Home = () => {
  const [qrData, setQrData] = useState<string>('https://secQr.com');

  const onDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQrData(event.target.value);
  };

  return (
    <div className='h-screen bg-black'>
      <Header />
      <div className='container flex items-center justify-center mx-auto xl:p-8'>
        <Card className='w-full xl:p-3 xl:max-h-[600px] bg-black border-none'>
          <CardContent className='flex flex-col-reverse xl:flex-row gap-6'>

            {/* Left side: QR Image */}
            <div className='flex-1 flex flex-col items-center justify-center'>
            <DynamicQRCode data={qrData} /> {/* Pass the qrData as a prop */}
            </div>

            {/* Right side: Button Section */}
            <div className='flex-1 flex w-full justify-start xl:px-5'>
              <Tabs defaultValue='Data' className='w-full mt-4 xl:ml-4'>
                <TabsList className='w-full grid grid-cols-5 h-[50px] gap-2 bg-main xl:px-5'>
                  <TabsTrigger value='Data'>Data</TabsTrigger>
                  <TabsTrigger value='Colors'>Corners</TabsTrigger>
                  <TabsTrigger value='Frames'>Frames</TabsTrigger>
                  <TabsTrigger value='Dots'>Dots</TabsTrigger>
                  <TabsTrigger value='upload'>Upload</TabsTrigger>
                </TabsList>
                <TabsContent value='Data'>
                  <Card className='h-[400px] bg-teal-800 py-3'>
                    <CardContent>
                      <div className='flex flex-row gap-2 mt-16 p-1 items-center justify-center'>
                        <div className='grid gap-1.5'>
                          <Label htmlFor='Url' className='text-white font-bold text-1xl '>URL / Link</Label>
                          <Input 
                            id='Url' 
                            value={qrData} 
                            onChange={onDataChange} 
                            className='w-[350px]' 
                            placeholder='Enter your Website URL here' 
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
