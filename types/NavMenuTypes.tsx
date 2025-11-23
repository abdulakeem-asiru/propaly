// Type for nav menu
export type NavMenuItem = {
  label: string;
  href: string;
  children?: NavMenuItem[]; // For dropdown menus
};