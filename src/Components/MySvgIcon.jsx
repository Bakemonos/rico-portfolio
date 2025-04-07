import svgIcons from '../utils/svgIcons';

export default function Icon({ name, size = 24, color = '#FFFFFF', className = '' }) {
  const SvgIcon = svgIcons[name];

  if (!SvgIcon) {
    console.warn(`Icon "${name}" not found.`);
    return <span style={{ color: 'red' }}>⚠️</span>; 
  }

  return (
    <SvgIcon width={size} height={size} fill={color} className={className} />
  );
}

