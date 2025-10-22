import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { rubikWetPaint, inter, lusitana } from '@/app/ui/fonts';


export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-6 bg-halloween-black-900">
      <div className="flex items-end h-20 p-4 bg-halloween-orange-600 rounded-lg shrink-0 md:h-52 shadow-lg border-2 border-halloween-purple-700">
        {/* <AcmeLogo /> */}
      </div>
      
      <div className="flex flex-col gap-4 mt-4 grow md:flex-row">
        <div className="flex flex-col justify-center gap-6 px-6 py-10 rounded-lg bg-halloween-black-800 border border-halloween-orange-600 shadow-lg md:w-2/5 md:px-20">
        <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-halloween-orange-500"
        />
          <p className={` text-xl text-halloween-orange-300 md:text-3xl md:leading-normal`}>
            <strong className="text-halloween-orange-400">Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://yahoo.com/" className="text-halloween-purple-400 hover:text-halloween-purple-300">
              Yahoo Web Site
            </a>
            , brought to you by fooling around.
          </p>
          <Link
            href="/login"
            className="flex items-center self-start gap-5 px-6 py-3 text-sm font-medium text-white transition-colors bg-halloween-orange-600 rounded-lg hover:bg-halloween-orange-700 shadow-md md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
