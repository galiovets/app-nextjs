const Socials = ({ link, icon }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
      <style jsx>
        {`
          a {
            padding: 5px;
          }

          a:not(:last-child) {
            margin-left: 20px;
          }

          a:hover {
            color: #0ea5e9;
            transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}
      </style>
    </>
  );
};

export default Socials;
