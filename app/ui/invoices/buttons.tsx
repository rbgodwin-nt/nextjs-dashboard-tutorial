import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-halloween-orange-600 px-4 text-sm font-medium text-white transition-colors hover:bg-halloween-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-halloween-orange-600 shadow-md"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href="/dashboard/invoices"
      className="rounded-md border border-halloween-purple-600 bg-halloween-purple-700 p-2 hover:bg-halloween-purple-600 transition-colors"
    >
      <PencilIcon className="w-5 text-halloween-orange-300" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  return (
    <>
      <button type="submit" className="rounded-md border border-halloween-orange-600 bg-halloween-orange-700 p-2 hover:bg-halloween-orange-600 transition-colors">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 text-white" />
      </button>
    </>
  );
}
