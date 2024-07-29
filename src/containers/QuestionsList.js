import React, { useEffect } from "react";
import Input from "../components/Input";
import Radio from "../components/Radio";
import MultiSelect from "../components/MultiSelect";
import Null from "../components/Null";
import Number from "../components/Number";
import DatePickerField from "../components/DatePickerField";

const QuestionsList = ({
  data,
  answerData,
  onChange,
  formData,
  setFormData,
  answerFillup,
  queId
}) => {
  const findAnswer = answerData?.find(
    (answer) => answer.question === data.question
  );

  useEffect(() => {
    if (findAnswer && answerFillup[queId]) {
      setFormData((prevData) => ({
        ...prevData,
        [data.question]: findAnswer.answer
      }));
    }
  }, [findAnswer, data.question, setFormData, answerFillup]);

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
            answerFillup={answerFillup}
            queId={queId}
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
            answerFillup={answerFillup}
            queId={queId}

          />
        );
      case "date":
        return (
          <DatePickerField
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
