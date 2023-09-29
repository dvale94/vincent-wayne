import PropTypes from "prop-types";
import './InstagramEmbed.scss';

export function InstagramEmbed({ embedId }) {
  return (
    <div className="post-responsive">
      <iframe
        src={`https://www.instagram.com/p/${embedId}/embed`}
        title="Embedded Instagram"
      />
    </div>
  );
};

InstagramEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};


