import { Outlet } from 'react-router'
import { Toaster } from 'sonner';

import { Header } from '@/components/layout/components/Header'

function Layout() {
  return (
    <>
      <Header />
      <Toaster position='top-right' richColors />
      <main className='mt-10 mx-auto max-w-6xl p-10 bg-white shadow-lg '>
        <Outlet />
      </main>
    </>
  )
}

export { Layout }