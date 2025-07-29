import axios from "axios";
import { toast } from "react-toastify";

export async function handleLogin(data: { firstName: string; lastName: string }) {
  const { firstName, lastName } = data;

  try {
    const res = await axios.get("/api.json");
    const user = res.data.results[0];

    const apiFirstName = user.name.first.toLowerCase();
    const apiLastName = user.name.last.toLowerCase();

    if (
      apiFirstName === firstName.toLowerCase().trim() &&
      apiLastName === lastName.toLowerCase().trim()
    ) {
      toast.success("✅ Login successful");
      return true;
    } else {
      toast.error("❌ Login failed: Name does not match API");
      return false;
    }
  } catch (err) {
    console.error("Login error:", err);
    toast.error("❌ Login failed: API error");
    return false;
  }
}
