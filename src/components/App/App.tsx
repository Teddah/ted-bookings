import { Container, Typography } from "@mui/material";
import { useState } from "react";
import DetailedItemsList from "../DetailedItemsList";
import Modal from "../Modal";
import "./App.css";

export interface CottageItem {
  id: number;
  name: string;
  beds: number;
  rooms: number;
  price: number;
  booked: boolean;
}

function App() {
  const initialItems: CottageItem[] = [
    {
      id: 1,
      name: "Stuga 1",
      beds: 4,
      rooms: 2,
      price: 870,
      booked: false,
    },
    {
      id: 2,
      name: "Stuga 2",
      beds: 6,
      rooms: 3,
      price: 1089,
      booked: false,
    },
    {
      id: 3,
      name: "Stuga 3 (xl)",
      beds: 10,
      rooms: 5,
      price: 1895,
      booked: false,
    },
  ];
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<CottageItem[]>(initialItems);
  const [currentItem, setCurrentItem] = useState<CottageItem | null>(
    null
  );

  const handleBookingClick = (item: CottageItem) => {
    setOpen(true);
    setCurrentItem(item);
  };

  const handleBooking = (item: CottageItem) => {
    setOpen(false);

    const updatedItems = items.map((prevItem) => {
      if (prevItem.id === item.id) {
        return { ...prevItem, booked: true };
      }
      return prevItem;
    });
    setItems(updatedItems);
  };
  const handleOnClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <Container>
        <Typography variant="h1">Ted Bookings</Typography>
        <DetailedItemsList
          items={items}
          onClick={handleBookingClick}
        />
        <Modal
          open={open}
          handleOnClose={handleOnClose}
          handleBooking={handleBooking}
          currentItem={currentItem}
        />
      </Container>
    </div>
  );
}

export default App;
