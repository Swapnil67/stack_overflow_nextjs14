import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface filterProp {
  name: string;
  value: string;
}

interface SelectFilterProps {
  filters: filterProp[];
  placeholder: string;
  otherClasses?: string;
  containerClasses?: string;
}

const SelectFilters = ({ filters, placeholder, otherClasses, containerClasses }: SelectFilterProps) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger className={`${otherClasses} 
          body-regular light-border background-light800_dark300 text-dark500_light700 border p-2.5`}>
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>
        <SelectContent className="background-light900_dark200">
          <SelectGroup>
            {
              filters.map(item => {
                return (
                  <SelectItem key={item.value} value={item.value}>{item.name}</SelectItem>
                )
              })
            }
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectFilters;
