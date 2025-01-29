import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const Togglebutton = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <MenuButton className="links flex font-medium text-[#252B42] hover:bg-gray-50">
        Shop
        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
      </MenuButton>
    </div>

    <MenuItems
      transition
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    >
      <div className="py-1">
        <MenuItem>
          <Link
            href="/items"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
          >
            Item 1
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="/items"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
          >
            Item 2
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="/items"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
          >
            Item 3
          </Link>
        </MenuItem>
        <form action="/items" method="POST">
          <MenuItem>
            <button
              type="submit"
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Item 4
            </button>
          </MenuItem>
        </form>
      </div>
    </MenuItems>
  </Menu>
  )
}

export default Togglebutton