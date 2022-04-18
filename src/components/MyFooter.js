import MediaSosial from "./MediaSosial";

const MyFooter = () => {
  return (
    <div className="footer-full fadeIn delay-2s">
      <div
        id="contact-social"
        className="social-icons"
        style={{ display: `inline` }}
      >
        <MediaSosial />
      </div>
    </div>
  );
};

export default MyFooter;
