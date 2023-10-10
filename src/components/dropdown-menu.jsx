import { forwardRef, useState } from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

/**
 * Component with a custom dropdown menu based on radix-ui.
 */
export default function DropdownMenu(props) {
  const [selectedValue, setSelectedValue] = useState(null);

  /**
   * Function to handle the value change of the dropdown menu.
   * @param {*} value the selected value 
   */
  const handleValueChange = (value) => {
    setSelectedValue(value);
    if (props.onChange) props.onChange(value);
  };

  return (
    <Select.Root onValueChange={handleValueChange} value={selectedValue}>
      <Select.Trigger
        className="inline-flex items-center justify-between  rounded-[8px] px-[15px] text-[15px] leading-none h-[35px] gap-[5px] bg-[#f6f6f6] text-gray-500  hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-white data-[placeholder]:text-violet9 outline-none"
        aria-label={props.label}
      >
        <Select.Value>
          {selectedValue || props.description}
        </Select.Value>
        <Select.Icon className="text-gray-700 ">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                {props.label}
              </Select.Label>
              {
                props.data.map((data) => (
                    <SelectItem value={data.value}>
                        {data.name}
                    </SelectItem>
                ))
              }
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-purple-500 cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-purple-500 data-[highlighted]:text-white",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
