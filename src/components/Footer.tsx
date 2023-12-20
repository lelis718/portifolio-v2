
type CustomIconProps = {
  icon: string;
};

const CustomIcon = function (props: CustomIconProps) {
  return <span className={props.icon}></span>;
};

export function Footer() {
  return (
    <div className="footer mat-accent">
      <div className="contact-icons">
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/lelis718">
          <CustomIcon icon="linkedin" />
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://www.hackerrank.com/andrelelis">
          <CustomIcon icon="hackerrank" />
        </a>
        <a
          rel="noopener noreferrer" target="_blank"
          href="https://stackoverflow.com/users/444682/lelis718"
        >
          <CustomIcon icon="stackoverflow" />
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://www.reddit.com/user/lelis718">
          <CustomIcon icon="reddit" />
        </a>
      </div>
      <div className="mail">
        <a rel="noopener noreferrer" target="_blank" href="mailto:andrelelis@gmail.com">
          andrelelis@gmail.com
        </a>
      </div>
    </div>
  );
}
