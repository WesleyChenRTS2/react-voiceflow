import React from "react";

const RenderJson = ({ data, indent = 0 }: any) => {
  delete data.intent;
  if (typeof data !== "object" || data === null) {
    return <span>{JSON.stringify(data)}</span>;
  }

  return (
    <div className={`pl-${indent * 2} pt-2`}>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <span className="text-blue-500">{key}:</span>
          {typeof value === "object" ? (
            <RenderJson data={value} indent={indent + 1} />
          ) : (
            <span className="text-green-600"> {JSON.stringify(value)}</span>
          )}
        </div>
      ))}
    </div>
  );
};

const JsonDisplay = ({ data }: any) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow max-w-full overflow-auto">
      <RenderJson data={data} />
    </div>
  );
};

export default JsonDisplay;
