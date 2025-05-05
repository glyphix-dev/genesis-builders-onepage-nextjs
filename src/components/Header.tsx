import * as React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';
import Logo from './Logo';
import StickyHeader from './StickyHeader';
import MobileMenu from './MobileMenu';
import NavBar from './NavBar';
// import SearchForm from './SearchForm';
import { client } from '@/sanity/lib/client';
import queries from '@/sanity/queries';
import { getRevalidation, QueryTypes } from '@/sanity/queries';

const revalidate = getRevalidation(QueryTypes.Settings)

interface IHeaderProps {
  isSticky?: boolean;
  className?: string;
  id?: string;
}

const Header: React.FunctionComponent<IHeaderProps> = async ({ isSticky = false, className, id = "header" }) => {
  const mainMenu = await client.fetch(queries.settings.mainMenu, {}, revalidate);
  const mobileMenu = await client.fetch(queries.settings.mobileMenu, {}, revalidate);

  const HeaderChildren = () => {
    return (<Container>
      <div id={id} className="bg-white flex justify-between items-center relative py-8 lg:py-12 px-8 2xl:px-0 ">
        <Logo />
        <NavBar
          className="hidden lg:flex font-bold text-primary"
          linkClassName="text-base"
          menu={mainMenu}
        />
        {/* <SearchForm className="hidden md:flex" /> */}
        <MobileMenu menu={mobileMenu} className="lg:hidden">
          <Logo />
        </MobileMenu>
      </div>
    </Container>)
  }

  return isSticky ? (
    <StickyHeader className={cn("sticky top-0 z-50 w-full bg-white", className)}>
      <HeaderChildren />
    </StickyHeader>
  ) : (
    <header className="w-full bg-white py-4">
      <HeaderChildren />
    </header>
  );
};

export default Header;
