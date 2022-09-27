export const Button = (props) => {
    const { children, className, label } = props;
    return (
      <button
        {...props}
        className={` ${className}`}
        type="button"
      >
        {label}
        {children}
      </button>
    );
};