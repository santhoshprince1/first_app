import Message from "../message/Message";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="middlecontent"></div>
      <div className="middlecontent">
        <Message></Message>
      </div>
      <div className="middlecontent"></div>
    </div>
  );
}

export default Home;
