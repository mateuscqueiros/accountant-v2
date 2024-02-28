import { useState } from 'react';
import { Tooltip, UnstyledButton, Stack, rem, AppShell } from '@mantine/core';
import { IconHome2, IconLogout, IconSwitchHorizontal } from '@tabler/icons-react';
import classes from './Navbar.module.css';
import menuItems from '../menuItems';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const links = menuItems.map((item, index) => {
    const isActive = location.pathname.includes(item.link);
    return (
      <NavbarLink
        {...item}
        key={item.label}
        active={isActive}
        onClick={() => navigate(item.link)}
      />
    );
  });

  return (
    <AppShell.Navbar>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>
          <Stack justify="center" gap={0}>
            {links}
          </Stack>
        </div>

        <Stack justify="center" gap={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </nav>
    </AppShell.Navbar>
  );
}
