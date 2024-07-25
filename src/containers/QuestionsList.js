import React from "react";
import Input from "../components/Input";
import Radio from "../components/Radio";
import MultiSelect from "../components/MultiSelect";
import { useParams } from "react-router-dom";

const QuestionsList = ({ data }) => {
  const params = useParams();

  const renderItems = () => {
    switch (data.type) {
      case "text":
        return <Input question={data.question} />;

      case "radio":
        return (
          <Radio
            question={data.question}
            options={data.values}
            subitems={data.subitems}
          />
        );
      case "multiselect":
        return (
          <MultiSelect
            question={data.question}
            options={data.values}
            subitems={data.subitems}
          />
        );
      default:
        break;
    }
  };

  return (
    <div>
      <h1 className="capitalize mb-4">{params.queId}</h1>
      {/* {renderItems()} */}
    </div>
  );
};

export default QuestionsList;
