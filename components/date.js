// Importing the 'parseISO' and 'format' functions from the 'date-fns' library.
import { parseISO, format } from 'date-fns';

// Defining the Date component that takes a 'dateString' prop.
export default function Date({ dateString }) {
  // Parsing the date string into a JavaScript Date object using 'parseISO'.
  const date = parseISO(dateString);

  // Returning a time element with the formatted date string using the 'format' function.
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

