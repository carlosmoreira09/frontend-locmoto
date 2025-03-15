import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const formatDate = (date: Date | undefined | string) => {
  if (typeof date == "string") {
    const dateArray = date.split('-')
    if (dateArray[2] == undefined) {
      const dateArray = date.split('/')
      return dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]
    }
    return dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0]
  }
}