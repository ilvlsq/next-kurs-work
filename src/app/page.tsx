import PhonesTable from "./components/PhonesTable";
import BirthdaysCards from "./components/BirthdaysCards";
import { verification } from "./api/auth/verification";
import { getContacts } from "./api/contact-book/contactsActions";
import { getBirthdays } from "./api/birthdays/birthdaysActions";

export default async function Home() {
  verification;
  const contaktsForTable = await getContacts();
  const birthdaysForTable = await getBirthdays();
  return (
    <>
      <div className="flex flex-col justify-center mx-auto mt-11">
        <div className="mb-11">
          <span className="text-2xl">Here your Phone Book:</span>
          <PhonesTable contaktsForTable={contaktsForTable} />
        </div>
        <span className="text-2xl">Here&apos;s your list of birthdays:</span>
        <div className="grid grid-cols-4 gap-4">
          <BirthdaysCards birthdaysForTable={birthdaysForTable} />
        </div>
      </div>
    </>
  );
}
