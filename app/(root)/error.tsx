'use client';

export default function Error({
  // error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-y-8 text-center">
        <div className="flex flex-col items-center gap-y-2">
          <h3 className="text-2xl font-semibold text-gray-600">
            Opps! Seems like we are having some issues
          </h3>
          <p className="text-sm text-gray-600">
            Make sure you are connected to the internet and try again.
          </p>
        </div>
        <button
          className="rounded-md bg-violet-500 px-4 py-2 text-white"
          onClick={reset}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
