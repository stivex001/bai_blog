import React from "react";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const Quotes_data = [
  {
    id: "q1",
    author: "Stephen",
    text: "Consistency not speed",
  },
  {
    id: "q2",
    author: "Oladunjoye",
    text: "HardWork Pays",
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = Quotes_data.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>oops! Quotes not found</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
