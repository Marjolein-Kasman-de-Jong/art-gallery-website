// Styles
import "./article.css";

export default function Article({ content: { section, headings, paragraphs } }) {
    return (
        <article>
            <header>
                {
                    section === "hero" && <h1 className="heading-1">{headings.mainHeading}</h1>
                }
            </header>
            <div className="wrapper">
                {
                    Object.entries(paragraphs).map(([key, value]) => {
                        if (value === null) {
                            return null;
                        } else {
                            return <p key={key} className="paragraph-1">
                                {value}
                            </p>
                        }
                    })
                }
                <footer>
                    button
                </footer>
            </div>

        </article>
    )
}