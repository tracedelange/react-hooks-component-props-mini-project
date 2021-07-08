import Article from "./Article";

const ArticleList = ({articles}) => {

    // console.log(articles)

    const articleArray = articles.map((article) => <Article article={article} key={article.id} /> )

    return (
        <main>
            { articleArray }
        </main>
    )
}

export default ArticleList;