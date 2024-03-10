import { Metadata } from 'next';

export const dynamic = 'force-static'; // no necessary, just for demonstration

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About NextSpace',
};

export default function Blog() {
  return (
    <div className='py-5 px-4'>
      <h1 className='font-bold text-3xl mb-2'>About us</h1>
      <p className='text-xl '>We are a social media company that wants to bring people together!</p>
    </div>
  );
}