import { FC, useState } from "react";

interface Props {};

const HomePage: FC<Props> = () => {
  return (
    <div
      className="
        bg-white text-gray-700 dark:bg-slate-800 dark:text-gray-200 min-h-screen
        flex items-center justify-center text-4xl
      "
    >
      Hello, its app to manage your household
    </div>
  )
}

export default HomePage;
