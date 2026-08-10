import { iconMap } from '../../../iconMap';

export const IconLink = ({ icon, href, className }) => {
  const Icon = iconMap[icon];
  return (
    <a href={href}>
      <Icon size={22} className={className} />
    </a>
  );
};
