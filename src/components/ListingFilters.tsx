import { Search } from "lucide-react";
import { memo, useState } from "react";

import { Button, DateRangePicker, Input, Stepper } from "@/components/ui";
import { type DateRange } from "react-day-picker";
import { type Filters } from "@/pages/ListingsPage";

interface ListingFiltersProps {
  onChange: (filters: Filters) => void;
}
/* eslint-disable */
const ListingFilters = ({ onChange }: ListingFiltersProps) => {
  const [dates, setDates] = useState<DateRange>();
  const [guests, setGuests] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  console.log({ onChange });

  const handleSubmit = () => {
    onChange({ dates, guests, search });
  };

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <Input
        className="w-[400px]"
        placeholder="Search destinations"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <DateRangePicker
        value={dates}
        onChange={setDates}
        minDate={new Date()}
        placeholder="Add dates"
      />
      <Stepper label="guest" value={guests} handleClick={setGuests} />
      <Button onClick={handleSubmit}>
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default memo(ListingFilters);
