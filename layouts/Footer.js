const Footer = () => {
  return (
    <footer>
      <div className="soc">
       <a target="_blank" href="https://github.com/IrfanEzani">
          <span className="ion ion-social-github" />
        </a>
        <a target="_blank" href="https://instagram.com/irfan.ezani">
          <span className="ion ion-social-instagram" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/irfanezani/">
          <span className="ion ion-social-linkedin" />
        </a>
      </div>
      <div className="copy">
        © {new Date().getFullYear()} Irfan Shuhaimi. All rights reserved.
      </div>
      <div className="clr" />
    </footer>
  );
};
export default Footer;
