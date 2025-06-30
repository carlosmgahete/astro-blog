import { useState } from 'preact/hooks';

interface Props {
  initialValue?: number;
  step?: number;
  label?: string;
}

export default function InteractiveCounter({ 
  initialValue = 0, 
  step = 1, 
  label = "Contador" 
}: Props) {
  const [count, setCount] = useState(initialValue);

  return (
    <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700 my-4">
      <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        {label}: <span class="text-blue-600 dark:text-blue-400">{count}</span>
      </h3>
      <div class="flex gap-2">
        <button
          onClick={() => setCount(count - step)}
          class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
        >
          -{step}
        </button>
        <button
          onClick={() => setCount(initialValue)}
          class="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + step)}
          class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-medium"
        >
          +{step}
        </button>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-3">
        Este componente es completamente interactivo gracias a Preact 🎉
      </p>
    </div>
  );
}
