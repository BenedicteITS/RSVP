function CardKomponent() {
  const guest1: string = "Navn navnesen";
  const guest2: string = "Gjest Gjestesen";
  return (
    <div className="mx-auto max-w-md md:max-w-xl min-h-80 rounded-xl bg-sage-light-500 p-8 flex flex-col">
      <div>
        <div className="text-lg font-semibold tracking-wide text-sage-dark-300 uppercase">
          <p>{guest1}</p>
        </div>
        <p className="mt-2 text-sage-900">
          Huk av for om {guest1} kommer eller ikke
        </p>
        <div className="flex gap-4 mt-2 pb-2">
          <label className="flex items-center gap-2">
            <input type="radio" name={`attending-${guest1}`} value="yes" />
            Kommer
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name={`attending-${guest1}`} value="no" />
            Kan ikke komme
          </label>
        </div>
      </div>
      <hr className="my-6 border-sage-600 " />
      <div>
        <div className="text-lg font-semibold tracking-wide text-sage-dark-300 uppercase">
          <p>{guest2}</p>
        </div>
        <p className="mt-2 text-sage-900">
          Huk av for om {guest2} kommer eller ikke
        </p>
        <div className="flex gap-4 mt-2 pb-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name={`attending-${guest2}`}
              value="yes"
              onClick={() => {}}
            />
            Kommer
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name={`attending-${guest2}`}
              value="no"
              onClick={() => {}}
            />
            Kan ikke komme
          </label>
        </div>
      </div>
       <div className="flex items-center justify-center text-center pt-4">
        <button className="mt-4 px-6 py-2 rounded-lg bg-sage-400 text-white font-medium hover:bg-sage-500 transition-colors ">
          Send svar
        </button>
      </div>
    </div>
  );
}
export default CardKomponent;
