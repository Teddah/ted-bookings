import { Button, TextField, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

interface AdminLoginProps {
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
  isAdmin: boolean;
}

const AdminLogin = ({ setIsAdmin, isAdmin }: AdminLoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = () => {
    if (username === "admin" && password === "admin") {
      setIsAdmin(true);
    }
    setUsername("");
    setPassword("");
  };

  const logout = () => {
    setIsAdmin(false);
  };
  return (
    <div style={{ position: "absolute", bottom: 10 }}>
      <Typography>Admin</Typography>
      {isAdmin ? (
        <Button onClick={logout} variant="outlined">
          Logga ut
        </Button>
      ) : (
        <div>
          <TextField
            required
            sx={{ mb: 4 }}
            id="firstname"
            label="Användarnamn"
            type="text"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            required
            sx={{ mb: 4 }}
            id="lastname"
            label="Lösenord"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="outlined"
            sx={{ height: "55px" }}
            onClick={handleAdminLogin}
          >
            Logga in
          </Button>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
