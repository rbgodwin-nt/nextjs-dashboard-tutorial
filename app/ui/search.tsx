'use client';
 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {useSearchParams, usePathname, useRouter} from 'next/navigation';
import {useDebouncedCallback} from 'use-debounce';


export default function Search({ placeholder }: { placeholder: string }) {
  const searchParameters = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
 
  const handleSearch = useDebouncedCallback(handleSearchNoDebounce, 1000);
 
  function  handleSearchNoDebounce(term: string) {
    const params = new URLSearchParams(searchParameters);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    console.log(`Searching... ${term} Params: ${params}`);
    replace(`${pathname}?${params.toString()}`);
  }
 
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-border bg-surface text-text-primary py-[9px] pl-10 text-sm outline-2 placeholder:text-text-muted"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParameters.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-text-secondary peer-focus:text-text-primary" />
    </div>
  );
}