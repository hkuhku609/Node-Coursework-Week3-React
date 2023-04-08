export type bookingType = {
  id: number;
  title: string;
  firstName: string;
  surname: string;
  email: string;
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
};
export type stateType = {
  isLoading: boolean;
  isError: boolean;
};
export type LeftType = {
  callData: () => Promise<void>;
  setFilteredBookings: React.Dispatch<React.SetStateAction<bookingType[]>>;
  bookings: bookingType[];
  scrollToBottom: () => void;
};
export type LeftSearchDataType = {
  term: string;
  date: string;
};
export type RightType = {
  data: bookingType[];
  callData: () => Promise<void>;
  messagesEndRef: React.MutableRefObject<HTMLDivElement | null>;
};
export type EditType = {
  item: bookingType;
  setUpdatedBooking: React.Dispatch<React.SetStateAction<bookingType>>;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  updatedBooking: bookingType;
};
