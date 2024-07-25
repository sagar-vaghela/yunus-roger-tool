import React from "react";
import { useParams } from "react-router-dom";
import hchbData from "../lib/mock/hchb.json";
import QuestionsList from "../containers/QuestionsList";

const QuestionPage = () => {
  const params = useParams();

  const { queId } = params;

  const findKey = Object.keys(hchbData).filter((key) => {
    if (key.replace(/[\/\s]+/g, "-").toLowerCase() === queId) {
      return key;
    }
  });

  const questionData = hchbData[findKey];

  return (
    <div>
      <h1 className="capitalize mb-4">{queId}</h1>
      {/* {questionData &&
        questionData.map((data, i) => {
          return (
            <div key={i}>
              <QuestionsList data={data} />
            </div>
          );
        })} */}
    </div>
  );
};

export default QuestionPage;
