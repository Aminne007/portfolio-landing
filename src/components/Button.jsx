export default function Button({ href, variant = 'primary', children, className = '', type = 'button', ...rest }) {
  const isAnchor = typeof href === 'string' && href.length > 0;
  const Component = isAnchor ? 'a' : 'button';
  const componentProps = {
    className: `btn btn-${variant} ${className}`.trim(),
    ...rest,
  };

  if (isAnchor) {
    componentProps.href = href;
  } else {
    componentProps.type = type;
  }

  return <Component {...componentProps}>{children}</Component>;
}
