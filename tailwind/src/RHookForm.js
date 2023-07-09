import React from "react";
import { useForm } from "react-hook-form";

function RHookForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isDirty, isSubmitting, isValid },
  } = useForm();
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleSetValue = () => {
    setValue("name", "John");
  };

  const handleGetValues = () => {
    const formData = getValues();
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto pt-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* <div>
          <label htmlFor="name" className="block font-medium mb-1">
            이름
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="border rounded px-2 py-1 w-full"
            placeholder="이름"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div> */}
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            이메일
          </label>
          <input
            {...register("email", {
              required: "*필수 입력",
              pattern: {
                value: regex,
                message: "*유효하지 않음",
              },
            })}
            type="email"
            id="email"
            className="border rounded px-2 py-1 w-full"
            placeholder="이메일"
          />
        </div>
        <p className="text-gray-500 text-sm">
          수정 여부: {isDirty ? "수정됨" : "수정되지 않음"}
        </p>
        {/* <p className="text-gray-500 text-sm">
          제출 중: {isSubmitting ? "제출 중..." : "대기 중"}
        </p> */}
        <p className="text-gray-500 text-sm">
          유효성 검사: {isValid ? "유효함" : "유효하지 않음"}
        </p>
        <div className="flex space-x-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            제출
          </button>
          {/* <button
            type="button"
            onClick={handleSetValue}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            값 설정
          </button>
          <button
            type="button"
            onClick={handleGetValues}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            값 가져오기
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default RHookForm;
