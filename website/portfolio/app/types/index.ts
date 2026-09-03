export interface NavItem {
  label: string;
  hash: string;
  route: string;
}

export interface SocialItem {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}