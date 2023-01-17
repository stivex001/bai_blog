import QuoteList from "../components/quotes/QuoteList";

const Quotes_data = [
  {
    id: 'q1',
    author: "Stephen",
    text: "Consistency not speed",
  },
  {
    id: 'q2',
    author: "Oladunjoye",
    text: "HardWork Pays",
  },
];

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={Quotes_data} />
    </div>
  );
};

export default AllQuotes;
