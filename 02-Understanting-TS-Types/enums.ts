// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

const enum SeatChoice {
  AISLE = "AISLE",
  MIDDLE = 8,
  WINDOW,
  FOURTH,
}
// As soon as one initializes the value with number the consecutive values will  take up values of the next number for example in seatChoice the number for window will be 9

const hcSeat = SeatChoice.AISLE;

// putting the const before enum produces a lot less code that it did without const
