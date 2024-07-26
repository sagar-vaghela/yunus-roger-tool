import React, { useEffect } from "react";
import Input from "../components/Input";
import Radio from "../components/Radio";
import MultiSelect from "../components/MultiSelect";
import Date from "../components/Date";
import Null from "../components/Null";
import Number from "../components/Number";

const QuestionsList = ({
  data,
  answerData,
  onChange,
  formData,
  setFormData
}) => {
  console.log("answerData", answerData);

  const findAnswer = answerData?.find(
    (answer) => answer.question === data.question
  );

  useEffect(() => {
    if (findAnswer) {
      setFormData((prevData) => ({
        ...prevData,
        [data.question]: findAnswer.answer
      }));
    }
  }, [findAnswer, data.question, setFormData]);

  const renderItems = () => {
    switch (data.type) {
      case "text":
        return (
          <Input
            question={data.question}
            formData={formData}
            onChange={onChange}
          />
        );

      case "radio":
        return (
          <Radio
            question={data.question}
            options={data.values}
            subitems={data.subitems}
            onChange={onChange}
            formData={formData}
            setFormData={setFormData}
            answerData={answerData}
          />
        );
      case "multiselect":
        return (
          <MultiSelect
            question={data.question}
            options={data.values}
            subitems={data.subitems}
            onChange={onChange}
            formData={formData}
            setFormData={setFormData}
            answerData={answerData}
          />
        );
      case "date":
        return (
          <Date
            question={data.question}
            onChange={onChange}
            formData={formData}
          />
        );
      case "number":
        return (
          <Number
            question={data.question}
            onChange={onChange}
            formData={formData}
          />
        );
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
