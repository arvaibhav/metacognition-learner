import React from "react";

const HeaderDescriptionContainer = () => {
  return (
    <div className="flex flex-col w-full h-40 w-full mt-4">
      <div className="flex h-2/5 w-full box-border">
        <div className="mr-2 mb-4 w-1/5 bg-slate-300 p-2 box-border rounded-md">Header</div>
        <div className="ml-2 mb-4 w-4/5 bg-slate-300 p-2 rounded-md">Some random header from api</div>
      </div>
      <div className="flex h-3/5">
        <div className="mr-2 w-1/5 bg-slate-300 p-2 rounded-md">Description</div>
        <div className="ml-2 w-4/5 bg-slate-300 p-2 rounded-md">Some random description</div>
      </div>
    </div>
  );
};

export default HeaderDescriptionContainer;
