import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  setModalStatus,
  resetGame,
  stopGame,
  setModalstate,
} from "../../../redux/WordSlice";
import { BiRefresh } from "react-icons/bi";

function ResultModal() {
  const {
    selectedLanguage,
    totalCorrectWords,
    totalWrongWords,
    correctWordsTick,
    inCorrectWordsTick,
    language,
  } = useSelector((state) => state.typingSpeed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setModalstate());
  }, [dispatch]);

  function closeModal() {
    dispatch(resetGame());
    dispatch(setModalStatus(false));
    dispatch(stopGame());
  }
  // console.log(selectedLanguage);
  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center flex overflow-x-hidden overflow-y-auto  z-50 outline-none focus:outline-none">
        <div className="mx-auto w-[300px]">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-center p-4 border-b border-solid rounded-t bg-sky-500 text-white">
              <h3 className="text-2xl font-semibold uppercase">
                {selectedLanguage === language[0] ? "Sonuçlar" : "results"}
              </h3>
            </div>
            {/*body*/}
            <div className="w-full flex flex-col">
              <div className="flex flex-col items-center justify-center border-b border-slate-300 p-5">
                <span className="text-6xl font-bold text-indigo-700">
                  {totalCorrectWords * 10 - totalWrongWords * 2.5}
                </span>
                <span className="text-stone-400">
                  {selectedLanguage === language[0]
                    ? "(Puan kazandınız, Tebrikler)"
                    : "(Congratulations)"}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-300 p-2">
                <span>
                  {selectedLanguage === language[0]
                    ? "Tuş Vuruşu"
                    : "Keystroke"}
                </span>
                <div className="flex items-center justify-center">
                  <span className="px-2">
                    {`(`}{" "}
                    <span className="text-green-500">{correctWordsTick}</span>
                    <span className="text-slate-500 px-1">{`|`}</span>
                    <span className="text-red-500">{inCorrectWordsTick}</span>
                    {` )`}
                  </span>
                  <span className="font-semibold">
                    {correctWordsTick + inCorrectWordsTick}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-slate-300 p-2">
                <span>
                  {selectedLanguage === language[0] ? "Doğruluk" : "Truth"}
                </span>
                <span className="font-bold">{`${(
                  Math.round(totalCorrectWords * 100) /
                  Math.round(totalCorrectWords + totalWrongWords)
                ).toFixed(2)} %`}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-300 p-2">
                <span>
                  {selectedLanguage === language[0]
                    ? "Doğru Kelime"
                    : "Correct Words"}
                </span>
                <span className="text-green-500 font-semibold">
                  {totalCorrectWords}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-300 p-2">
                <span>
                  {selectedLanguage === language[0]
                    ? "Yanlış Kelime"
                    : "Incorrect Words"}
                </span>
                <span className="text-red-500 font-semibold">
                  {totalWrongWords}
                </span>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="mx-2 w-[60px] h-[48px] bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold duration-500 flex items-center justify-center rounded-md"
                type="button"
                onClick={closeModal}
              >
                <BiRefresh />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default ResultModal;
