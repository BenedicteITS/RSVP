import { useState } from "react";
import GuestAttendance from "./AttendanceCardContent";
import guestListFromApi from "../data/MockData";
import type { Guest } from "../types/Guest";

function CardComponent() {
  const [guestList, setGuestList] = useState<Guest[]>(guestListFromApi);

  function handleAttendingChange(guestId: number, attending: boolean) {
    // Finne hvilken plass gjesten har i lista 
    const guestIndex = guestList.findIndex((g) => g.id === guestId);
    // Lage kopi av hele lista (ny liste med de samme gjestene)
    const updatedList = [...guestList];
    // Lage kopi av gjesten, men med nytt svar
    const updatedGuest = { ...guestList[guestIndex], attending: attending };
    // Bytte ut den gamle gjesten med den nye i kopien
    updatedList[guestIndex] = updatedGuest;
    // Gi nye lista til React
    setGuestList(updatedList);

  }
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(guestList);
  }
  return (
    <div className="mx-auto max-w-md md:max-w-xl min-h-80 rounded-xl bg-sage-light-500 p-8 flex flex-col">
      <form onSubmit={handleSubmit}>
        {guestList.map((guest) => (
          <GuestAttendance
            key={guest.id}
            guest={guest}
            onAttendingChange={handleAttendingChange}
          />
        ))}

        <div className="flex items-center justify-center text-center pt-4">
          <button type="submit" className="mt-4 px-6 py-2 rounded-lg bg-sage-400 text-white font-medium hover:bg-sage-500 transition-colors ">
            Send svar
          </button>
        </div>
      </form>
    </div>
  );
}
export default CardComponent;
