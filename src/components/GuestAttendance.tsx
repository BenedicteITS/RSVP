import type { Guest } from "../types/Guest";

type GuestAttendanceProps = {
  guest: Guest;
  onAttendingChange: (guestId: number, attending: boolean) => void;
};

function GuestAttendance({ guest, onAttendingChange }: GuestAttendanceProps) {


  return (

    <div>
      <div className="text-lg font-semibold tracking-wide text-sage-dark-300 uppercase">
        <p>{guest.name}</p>
      </div>
      <p className="mt-2 text-sage-900">
        Huk av for om {guest.name} kommer eller ikke
      </p>
      <div className="flex gap-4 mt-2 pb-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name={`attending-${guest.id}`}
            value="yes"
            checked={guest.attending === true}
            onChange={() => onAttendingChange(guest.id, true)}
          />
          Kommer
        </label>
        <label className="flex items-center gap-2">
          <input type="radio"
            name={`attending-${guest.id}`}
            value="no"
            checked={guest.attending === false}
            onChange={() => onAttendingChange(guest.id, false)}
          />
          Kan ikke komme
        </label>
      </div>
    </div>
  )
}
export default GuestAttendance;