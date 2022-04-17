const WorkDesc = () => {
  return (
    <div>
      <h1>Hotspoter</h1>
      <p>
        Hotspoter is special software that allows users to transform their
        computer into a wireless router. This is ideal for people who are
        looking for a way to use their existing internet connection to surf on
        their Smartphone, while the connection can also be shared with a large
        number of different people at the same time without weakening the signal
        strength.
      </p>
      <div class="technologies">
        <h2>Technologies Used</h2>
        <span class="tech-stack"> CSharp </span>
        <span class="tech-stack"> .Net Framework </span>
      </div>
      <div class="technologies featured">
        <h2>Featured On</h2>
        <span class="partners">
          <a target="_blank" href="https://hotspoter.en.softonic.com">
            <img
              id="partner-logo"
              src="assets/img/work/hotspoter/softonic.png"
              style={{ padding: `10px` }}
            />
          </a>
        </span>
        <span class="partners">
          <a
            target="_blank"
            href="https://download.cnet.com/Hotspoter/3000-18508_4-76462434.html"
          >
            <img
              id="partner-logo"
              src="assets/img/work/hotspoter/cnet.png"
              style={{ borderRadius: `50%` }}
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default WorkDesc;
