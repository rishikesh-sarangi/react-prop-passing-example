import React from "react";

const Biriyani = ({ name, note, qty, img }) => {
  return (
    <>
      <section
        className={`flex items-center justify-center gap-5 mt-10 ${
          qty === 0 ? "grayscale text-slate-500" : ""
        }`}
      >
        <img
          src={img}
          className="object-cover w-32 h-32"
          alt={name + " photo"}
        />
        <div className="flex flex-col items-start self-start justify-start gap-2">
          <div>
            <h1 className="text-lg font-medium">{name + ` Biriyani`}</h1>
            <p className="text-sm italic max-w-xxs leading-2 text-slate-600">
              {note}
            </p>
          </div>
          {qty === 0 ? (
            <p className="font-bold">SOLD OUT</p>
          ) : (
            <p className="text-lg font-medium">{qty}</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Biriyani;
