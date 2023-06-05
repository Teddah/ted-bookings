import { Container, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { exampleData } from "../../exampleData";
import AdminLogin from "../AdminLogin";
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

interface Booking {
  firstname: string;
  lastname: string;
  date: Date | null;
  item: CottageItem;
}

function App() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<CottageItem[]>(exampleData);
  const [currentItem, setCurrentItem] = useState<CottageItem | null>(
    null
  );
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleItemClick = (item: CottageItem) => {
    setOpen(true);
    setCurrentItem(item);
  };

  const handleBooking = (
    item: CottageItem,
    firstname: string,
    lastname: string,
    date: Date | null
  ) => {
    setOpen(false);

    const updatedItems = items.map((prevItem) => {
      if (prevItem.id === item.id) {
        return { ...prevItem, booked: true };
      }
      return prevItem;
    });
    setItems(updatedItems);

    setBookings((prev) => [
      { firstname, lastname, date, item },
      ...prev,
    ]);
  };

  return (
    <div className="App">
      <Container>
        <Typography variant="h1">Ted Bookings</Typography>
        <DetailedItemsList items={items} onClick={handleItemClick} />
        <Modal
          open={open}
          handleOnClose={() => setOpen(false)}
          handleBooking={handleBooking}
          currentItem={currentItem}
        />
        {isAdmin && (
          <div>
            <Typography variant="h4" mb={2}>
              Bokningar
            </Typography>
            {bookings.length ? (
              bookings.map((booking) => (
                <div
                  key={booking.item.id}
                  style={{ margin: "14px 0px" }}
                >
                  <Typography>Stuga: {booking?.item.name}</Typography>
                  <Typography>
                    Namn: {booking?.firstname} {booking?.lastname}
                  </Typography>
                  <Typography>
                    Bokat datum: {booking?.date?.toLocaleDateString()}
                  </Typography>
                  <Divider />
                </div>
              ))
            ) : (
              <p>Inga bokningar...</p>
            )}
          </div>
        )}
        <AdminLogin setIsAdmin={setIsAdmin} isAdmin={isAdmin} />
      </Container>
    </div>
  );
}

export default App;
