import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown, Check } from 'lucide-react';

export const Select = SelectPrimitive.Root;
export const SelectTrigger = React.forwardRef(({ children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className="flex items-center justify-between w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  >
    {children}
    <SelectPrimitive.Icon className="ml-2">
      <ChevronDown size={16} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
export const SelectValue = SelectPrimitive.Value;
export const SelectContent = React.forwardRef(({ children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className="bg-white rounded-md shadow-lg"
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
export const SelectItem = React.forwardRef(({ children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className="flex items-center px-8 py-2 text-sm rounded-md cursor-default select-none focus:bg-blue-100 focus:outline-none"
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
      <Check size={16} />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));