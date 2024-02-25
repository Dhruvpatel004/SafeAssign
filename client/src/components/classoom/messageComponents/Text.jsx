import React from "react";

function Text({text}) {
  return (
    <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
      <p class="text-sm font-normal text-gray-900 dark:text-white">
    
        {text}
      </p>
    </div>
  );
}

export default Text;
