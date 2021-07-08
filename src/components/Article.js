const Article = ({article}) => {
    return (
        <article>
            <h3>{article.title}</h3>
            <small>{article.date}</small> {/* make sure to do the thing */}
            <p>{article.preview}</p>
        </article>
    )
}

export default Article;