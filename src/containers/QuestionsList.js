import React from "react";
import Input from "../components/Input";
import Radio from "../components/Radio";
import MultiSelect from "../components/MultiSelect";
import { useParams } from "react-router-dom";
import Date from "../components/Date";
import Null from "../components/Null";
import Number from "../components/Number";

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
      case "date":
        return <Date question={data.question} />;
 case "number":
        return <Number question={data.question} />;
      case "null":
        return <Null question={data.question} />;
      case "unknown":
        return <Null question={data.question} />;
      default:
        break;
    }
  };

  return <div>{renderItems()}</div>;
};

export default QuestionsList;
