import React from "react";
import { useForm, Controller } from "react-hook-form";
import "tailwindcss/tailwind.css";

const PollForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data); // 폼 데이터를 처리하는 로직을 추가하세요.
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#C7D3D4]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#FEFEFE] shadow-lg rounded w-2/5 p-8 px-12"
      >
        <div className="flex align-center justify-center mt-6 mb-10">
          <img
            src="./assets/flunti_typo_blue-svg.svg"
            alt="logo"
            className="h-12"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            이메일
          </label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "이메일은 필수 입력 사항입니다.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "올바른 이메일 형식을 입력해주세요.",
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  {...field}
                />
                {fieldState.error && (
                  <p className="text-red-500 text-xs italic">
                    {fieldState.error.message}
                  </p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            사원번호
          </label>
          <Controller
            name="employeeId"
            control={control}
            rules={{ required: "사원번호는 필수 입력 사항입니다." }}
            render={({ field, fieldState }) => (
              <>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  {...field}
                />
                {fieldState.error && (
                  <p className="text-red-500 text-xs italic">
                    {fieldState.error.message}
                  </p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            이름
          </label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "이름은 필수 입력 사항입니다." }}
            render={({ field, fieldState }) => (
              <>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  {...field}
                />
                {fieldState.error && (
                  <p className="text-red-500 text-xs italic">
                    {fieldState.error.message}
                  </p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            전화번호
          </label>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: "전화번호는 필수 입력 사항입니다." }}
            render={({ field, fieldState }) => (
              <>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  {...field}
                />
                {fieldState.error && (
                  <p className="text-red-500 text-xs italic">
                    {fieldState.error.message}
                  </p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            만족도
          </label>
          <Controller
            name="satisfaction"
            control={control}
            render={({ field }) => (
              <div className="flex">
                <label className="mr-4">
                  <input
                    className="mr-1"
                    type="checkbox"
                    value="verySatisfied"
                    {...field}
                  />
                  매우 만족함
                </label>
                <label className="mr-4">
                  <input
                    className="mr-1"
                    type="checkbox"
                    value="satisfied"
                    {...field}
                  />
                  만족함
                </label>
                <label>
                  <input
                    className="mr-1"
                    type="checkbox"
                    value="neutral"
                    {...field}
                  />
                  보통
                </label>
              </div>
            )}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-[#2E3C7E] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            제출
          </button>
        </div>
      </form>
    </div>
  );
};

export default PollForm;
