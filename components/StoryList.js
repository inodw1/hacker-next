const StoryList = ({ articles }) => (
    <div className="story-list">
        {articles.map((article, index) => (
            /** no id or unique value in this api responses to represent the key */
            <div className="story" key={index}>
                <h2 className="story-title">
                    <a href={article.url}>{article.title}</a>
                </h2>
                <div className="story-details">
                    <span>{article.description}</span>
                </div>
            </div>
        ))}

        <style jsx>{`
            .story-list {
                padding: 0 1em;
            }
            .story {
                padding: 1em 0;
            }
            .story-title {
                font-size: 1rem;
                font-weight: 400;
                margin: 0;
                margin-bottom: 0.5em
            }
            .story-title a {
                color: #333;
                text-decoration: none;
            }
            .story-title a:hover .story-details a:hover {
                text-decoration: underline;
            }
            .story-details {
                font-size: 0.8rem;
                font-weight: bold;
            }
            .story-details span {
                margin-right: 1em
            }
            .story-details a {
                color: #6600ff;
                text-decoration: none;
            }
        `}</style>
    </div>
)

export default StoryList

