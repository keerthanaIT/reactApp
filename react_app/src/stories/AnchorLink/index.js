export const AnchorLink = (props) => {
    const { children, className, label } = props;
    return (
      <li
        {...props}
        className={``}
      >
        <a className="md:p-4 py-2 block hover:text-white-400" href="#">{label}</a>
        {children}
      </li>
    );
};