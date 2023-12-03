import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";

export default function Quiz({ lectureId, chapaterId, sectionId }) {
  const {
    handleSubmit: handleQuestionSubmit,
    control: questionControl,
    reset: questionReset,
  } = useForm();

  const {
    control: answerControl,
    register: answerRegister,
    handleSubmit: handleAnswerSubmit,
  } = useForm({
    defaultValues: { quizList: [] },
  });

  const { fields, append, remove } = useFieldArray({
    control: answerControl,
    name: "quizList",
  });

  const onQuestionSubmit = (data) => {
    append({ question: data.question, answers: [], answerType: "shortAnswer" });
    questionReset();
  };

  const onAnswerSubmit = (data, quizIndex) => {
    const updatedAnswers = [
      ...fields[quizIndex].answers,
      data.quizList[quizIndex].answers,
    ];
    answerControl.setValue(`quizList[${quizIndex}].answers`, updatedAnswers);
  };

  const handleAddAnswer = (quizIndex) => {
    append({ answers: [] }, { shouldFocus: true, shouldDirty: true });
  };

  const handleDeleteQuiz = (quizIndex) => {
    remove(quizIndex);
  };

  const handleDeleteAnswer = (quizIndex, answerIndex) => {
    const updatedAnswers = [...fields[quizIndex].answers];
    updatedAnswers.splice(answerIndex, 1);
    answerControl.setValue(`quizList[${quizIndex}].answers`, updatedAnswers);
  };

  const handleSave = () => {
    console.log("Save to server:", answerControl.getValues().quizList);
  };

  return (
    <div className="p-4">
      <form
        className="flex flex-col"
        onSubmit={handleQuestionSubmit(onQuestionSubmit)}
      >
        <label className="text-lg font-bold">문제</label>
        <input
          className="mt-2"
          type="text"
          placeholder="문제를 입력하세요"
          {...questionControl.register("question")}
        />
        <button className="mt-2 w-[80px]" type="submit">
          + add
        </button>
      </form>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Quiz List</h3>
        {fields.map((quiz, quizIndex) => (
          <div key={quiz.id}>
            <div className="flex justify-between items-center mt-2">
              <p
                className="text-lg"
                onClick={() => {
                  // handleAnswerOpen(quizIndex);
                }}
              >
                {quizIndex + 1}.{quiz.question}
              </p>
              <div className="flex">
                <button
                  className="mr-2 h-[28px]"
                  onClick={() => handleDeleteQuiz(quizIndex)}
                >
                  Delete
                </button>
              </div>
            </div>
            <form
              onSubmit={handleAnswerSubmit((data) =>
                onAnswerSubmit(data, quizIndex)
              )}
            >
              <Controller
                name={`quizList[${quizIndex}].answerType`}
                control={answerControl}
                render={({ field }) => (
                  <select onValueChange={field.onChange}>
                    <option value="shortAnswer">주관식</option>
                    <option value="multiple">객관식</option>
                  </select>
                )}
              />
              {quiz.answerType === "multiple" && (
                <div>
                  {quiz.answers.map((answer, answerIndex) => (
                    <div key={answerIndex} className="flex">
                      <input
                        placeholder="답변을 입력하세요"
                        type="text"
                        {...answerRegister(
                          `quizList[${quizIndex}].answers[${answerIndex}]`
                        )}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteAnswer(quizIndex, answerIndex)
                        }
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleAddAnswer(quizIndex)}
                  >
                    + add
                  </button>
                </div>
              )}
            </form>
          </div>
        ))}
      </div>
      <button className="mt-4" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
