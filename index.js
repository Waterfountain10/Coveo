

const YouTubeResultTemplate = ({result}) => {
    return (
      <div className="youtube-result">
        {/* Display badges, date, title, excerpt, thumbnail, duration, and video URI */}
        <div>Featured or Top Result Badge: {result.isTopResult ? 'Top Result' : ''}</div>
        <div>Date: {result.date}</div>
        <div>Title: {result.title}</div>
        <div>Excerpt: {result.excerpt}</div>
        <img src={result.raw.ytthumbnailurl} alt="Thumbnail" />
        <div>Duration: {result.raw.ytvideoduration} sec</div>
        <div>URI: {result.uri}</div>
      </div>
    );
  };
  