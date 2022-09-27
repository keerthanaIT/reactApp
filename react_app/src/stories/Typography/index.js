export const Heading = (props) => {
    const { children, className, label } = props;
    return (
      <h1
        {...props}
        className={`text-6xl ${className}`}
      >
        {label}
        {children}
      </h1>
    );
};

export const WParagraph = (props) => {
  const { children, className, label } = props;
  return (
    <p
      {...props}
      className={`text-xl ${className}`}
    >
      {label}
      {children}
    </p>
  );
};

export const SubHeading = (props) => {
  const { children, className, label } = props;
  return (
    <h2
      {...props}
      className={` ${className}`}
    >
      {label}
      {children}
    </h2>
  );
};